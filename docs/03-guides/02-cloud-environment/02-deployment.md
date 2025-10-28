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
| Platform service `.env` values | Stored on VM | Should be migrated to Secret Manager later |

---

## Deployment (CI/CD)

The platform uses **automated deployments**:

1. Code is pushed to `main`.
2. **GitHub Actions** builds new Docker images.
3. Images are pushed to **GitHub Container Registry (GHCR)**.
4. The **`si-infra`** workflow connects to the VM and runs the following to restart services with the new versions:
   ```bash
   docker compose pull
   docker compose up -d
  ```

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
| **Manual Keycloak user provisioning** | User registration currently requires admin console access or API automation; no self-service sign-up yet. |
| **Platform microservices tightly coupled** | Updates may require coordinated deployments; future refactor could improve modularity. |

---

## Operational Quick Reference

| Task | Command |
|------|---------|
| Restart services | `docker compose up -d` |
| Check logs for a service | `docker logs <container-name> --follow` |
| Check running containers | `docker compose ps` |
| SSH into the VM | `gcloud compute ssh si-compute-1-<id> --zone=australia-southeast1-b` |

