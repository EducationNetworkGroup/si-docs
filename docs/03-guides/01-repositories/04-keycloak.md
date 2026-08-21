---
sidebar_position: 3
description: Central authentication service for the Science Island platform.
---

# Keycloak (si-auth-service)

The `si-auth-service` repository provides the **central authentication and Single Sign-On (SSO)** service for the Science Island platform using **Keycloak**.  
It includes the **version-controlled realm configuration**, **custom Science Island login theme**, and configuration for both **local development** and **production deployment**.

This service is shared by multiple platform applications, so changes to **clients, redirect URLs, roles, and groups** must follow the documented workflow to avoid breaking authentication.
 
---

## Folder Structure

| Path | Description |
|------|-------------|
| `themes/science-island/` | Custom Science Island login + account UI theme |
| `realms/science-island.json` | **Authoritative** Keycloak realm configuration (imported on startup) |
| `caddy/` | Reverse proxy + HTTPS configuration for public access |
| `scripts/` | Utility scripts (token generation, debugging) |
| `docker-compose.yml` | Local Keycloak + PostgreSQL development environment |
| `.github/workflows/` | CI/CD pipelines for automated builds and image publishing |
| `Dockerfile` | Builds Keycloak image with the custom theme + realm configuration |

> Helm is obsolete now as the live deployment was drastically simplified in the migration from AWS to GCP in 2025. Kubernetes was removed from the project in favour of a simple VM setup.

---

## Live Deployment

**Production Login URL:**  
https://login.scienceisland.com

### Deployment Workflow

This repository does **not** handle production deployment directly.

Production deployment is managed in the **si-infrastructure** repository, which builds and publishes the Keycloak container image (via GHCR) and runs it alongside the other services through Docker Compose on the GCP VM — Helm/Kubernetes is no longer used (see [si-infrastructure](06-si-infrastructure.md)).

Because Pulumi ignores a new commit to `main` unless its Docker image version tag has also changed, shipping a change from this repo currently requires a **second, manual step**: bump the version tag in the `si-infrastructure` Pulumi config, open a PR against `si-infrastructure`, and get it approved before the new image is actually deployed to the VM. This added approval step has been a recurring source of deployment delay since Sprint 2 — see [Deployment](../02-cloud-environment/02-deployment.md) for the full workflow.

---

## Realm Roles & Google SSO

Since Sprint 2, `realms/science-island.json` also carries the Realm Roles used for RBAC (`student`, `teacher`, `admin-teacher`, `admin`, `parent`) and, since Sprint 3, a Google identity provider entry for social login. See [Keycloak Configuration](../../02-tools-and-technologies/05-keycloak/03-configuration.md#roles) for the full role/resource matrix and current limitations (Google OAuth testing mode, role propagation delay).

Google's Client ID/Secret are treated as production secrets — they're injected via Pulumi/Caddy rather than committed to the realm file. Local development uses short-lived, "burned" throwaway Google credentials instead.

## Environment Variables & Secrets (`.env`)

The live deployment uses a `.env` file stored **only on the VM**.  
It contains Keycloak + database credentials and must **not** be committed to Git.

**Location on VM:**

/opt/app/.env

These variables are loaded automatically by `docker-compose.yml`.

---

## Updating Realm Configuration

Changes made in the Keycloak Admin Console are **not automatically persisted** to this repository.  
If you do not export and commit the updated realm file, your changes will be **lost on redeployment**.

To persist changes:

To persist configuration changes:

1. Log into the **Keycloak Admin Console**
2. Navigate to: **Realm Settings → Export**
3. Set the export options:
   - **Export users** → `OFF`  
   - **Export groups and roles** → `ON`
4. Click **Export** → a `.json` file will download
5. Replace the file in this repository: realms/science-island.json
6. Commit and push the updated file:

```bash
git add realms/science-island.json
git commit -m "chore: update Keycloak realm configuration"
git push
```

Important:
The realm file in this repository is exported without users on purpose.
There are demo/test accounts currently used for presentations (e.g., the account provided to the client) which exist only in the live Keycloak instance.
These accounts should not be stored in version control.
If demo accounts need to be recreated, they should be added manually through the Admin Console.