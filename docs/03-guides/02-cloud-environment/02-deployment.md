---
sidebar_position: 2
---

# Current Production Deployment (GCP Runtime)

This page describes the *final deployed production environment* for Science Island on Google Cloud Platform (GCP).

---

## Compute

The entire platform runs on a **single Compute Engine VM**:

| Component | Value |
|---------|-------|
| VM Name | `si-compute-1-<id>` |
| Region / Zone | `australia-southeast1-b` |
| Machine Type | `e2-standard-2` (2 vCPU, 8GB RAM) |
| Networking | Private VPC (`10.10.0.0/24`), External **Static IP** |
| OS | Debian with Docker + Docker Compose |

This VM hosts **all services** via `docker-compose.yml`.

---

## Containers Running on the VM

| Service Group | Purpose |
|--------------|---------|
| **Caddy** | Reverse proxy + TLS |
| **Keycloak** | Authentication + SSO |
| **Platform Frontend & Microservices** | Teacher-facing system logic |
| **Curriculum Mapper** | Curriculum authoring and planning |
| **Postgres** | Keycloak data |
| **MySQL + Redis** | Platform backend data + caching |

All services communicate via an **internal Docker network**. Only **Caddy** is externally exposed.

---

## Authentication Flow (Keycloak)

- Login is performed via: `https://login.scienceisland.com`
- Provides SSO for Platform + Game.
- Redirect URIs are configured individually per client.

---

## DNS + Reverse Proxy

| Subdomain | Purpose | Destination |
|---------|---------|-------------|
| `scienceisland.com` | Public landing website | Static IP → Caddy |
| `login.scienceisland.com` | Keycloak login UI | Static IP → Keycloak container |
| `platform.scienceisland.com` | Teacher Portal UI | Static IP → Platform frontend |
| `mapper.scienceisland.com` | Curriculum Mapper UI | Static IP → Mapper frontend |

**DNS is managed in Cloud DNS**.  
**TLS certs are automatically issued and renewed by Caddy**.

---

## Secrets & Credentials

| Secret | Storage | Notes |
|--------|---------|------|
| `keycloak-admin-password` | **GCP Secret Manager** | Used for Keycloak admin console |
| `keycloak-db-password` | **GCP Secret Manager** | Used by Keycloak → Postgres |
| Google OAuth Client ID/Secret | **Pulumi config (secret) + Caddy** | Powers the Google SSO identity provider. Local dev uses separate, short-lived "burned" credentials rather than the production pair. |
| Brevo SMTP credentials | **Keycloak realm SMTP config** | Sends forgotten-password emails; replaced Gmail after Swinburne's mail filter began blocking delivery. |
| Platform service `.env` values | Stored on VM | Should be migrated to Secret Manager later |

---

## Deployment (CI/CD)

The platform uses **automated deployments**:

1. Code is pushed to `main` (via `KC-Dev` → `KC-Production` → PR to `main`, tested at each stage).
2. **GitHub Actions** builds new Docker images and pushes them to **GitHub Container Registry (GHCR)**.
3. The commit is tagged with a new version. Pulumi ignores a push to `main` whose version tag hasn't changed, so this tag bump has to be applied manually in the `si-infrastructure` Pulumi config.
4. A separate PR is opened against **si-infrastructure** with the tag bump, and requires manual approval from the project supervisor before it can be merged — this approval step has repeatedly been the slowest part of the pipeline, since it depends on the supervisor's availability rather than CI.
5. Once merged, the **`si-infra`** workflow connects to the VM and runs the following to restart services with the new versions:
   ```bash
   docker compose pull
   docker compose up -d
   ```

Because of the approval bottleneck, the team moved from pushing each change to production individually to batching a set of changes into a single deployment — this doesn't remove the approval step, but reduces how often the team is blocked waiting on it.

### Rollback

To revert a deployment:

1. Edit the relevant service’s image tag in `docker-compose.yml` to a previous version.
2. Commit the change to the `main` branch.
3. The CI/CD workflow will automatically redeploy using the previous image.

This ensures versioned, repeatable rollbacks with no manual SSH intervention.

---

## Known Limitations

| Limitation | Impact |
|-----------|--------|
| **Single VM deployment** | No horizontal scaling or redundancy — if the VM goes down, the whole platform is unavailable. |
| **Deployment approval bottleneck** | Shipping to `si-infrastructure` requires a manually-bumped Pulumi version tag and manual PR approval from the project supervisor, adding friction and delay to every release (see above). |
| **Google SSO in testing mode** | App-driven self-service sign-up has existed for some time; Google SSO was added on top as an additional sign-in path, but Google OAuth is still in *testing* mode — only an allow-listed set of Google accounts can use it until the app passes Google's verification process. |
| **Platform microservices tightly coupled** | Updates may require coordinated deployments; future refactor could improve modularity. |

---

## Operational Quick Reference

| Task | Command |
|------|---------|
| Restart services | `docker compose up -d` |
| Check logs for a service | `docker logs <container-name> --follow` |
| Check running containers | `docker compose ps` |
| SSH into the VM | `gcloud compute ssh si-compute-1-<id> --zone=australia-southeast1-b` |

