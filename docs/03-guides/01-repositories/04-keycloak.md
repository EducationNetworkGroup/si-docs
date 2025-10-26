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
| `helm/` | Helm chart for deployment to Kubernetes (GKE) |
| `docker-compose.yml` | Local Keycloak + PostgreSQL development environment |
| `.github/workflows/` | CI/CD pipelines for automated builds + Helm releases |
| `Dockerfile` | Builds Keycloak image with the custom theme + realm configuration |

---

## Live Deployment (Production)

Keycloak runs on a single Compute Engine VM in GCP using Docker Compose.

**Production Login URL:**  
https://login.scienceisland.com

### Deployment Workflow

This repository uses CI/CD to **automatically build and publish** the Keycloak Docker image when changes are pushed to the `main` branch or when a version tag is created.

To deploy updates to production:

```bash
ssh <vm-user>@<vm-ip>
cd /opt/si-auth-service
git pull
docker compose pull        
docker compose up -d      
```

### Updating Realm Configuration

1. Make changes in Keycloak Admin Console
2. Export realm **without users**
3. Replace `realms/science-island.json` in this repository
4. Commit and push the update
5. Create a tag to trigger CI/CD image build:

```bash
git tag v0.0.x
git push --tags
```