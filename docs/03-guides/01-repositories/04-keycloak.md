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
| `.github/workflows/` | CI/CD pipelines for automated builds + Helm releases |
| `Dockerfile` | Builds Keycloak image with the custom theme + realm configuration |

> Helm is obsolete now as the live deployment was drastically simplified in the migration from AWS to GCP in 2025. Kubernetes was removed from the project in favour of a simple VM setup.

---

## Live Deployment

**Production Login URL:**  
https://login.scienceisland.com

### Deployment Workflow

This repository does **not** handle production deployment directly.

Production deployment is managed in the **si-infrastructure** repository via CI/CD pipelines, which:
- Build and publish the Keycloak container image
- Apply Helm chart updates to the cluster
- Manage rollout and versioning

No manual SSH access or container restarts are required.

### Updating Realm Configuration

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