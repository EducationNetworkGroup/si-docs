---
sidebar_position: 3
description: Understand and deploy the si-auth-service repository.
---

# KeyCloak (si-auth-service)

The `si-auth-service` repository uses Keycloak for identity management and PostgreSQL as its backend database. Docker Compose is used to run all services locally. Caddy provides HTTPS via reverse proxy, and Keycloakify is used for theming the login UI.

## Folder Structure

| File/Folder           | Description                                                   |
|-----------------------|---------------------------------------------------------------|
| `theme/`              | Source code for the custom Keycloak UI theme                  |
| `caddy/`              | Configuration for reverse proxy and HTTPS                     |
| `realms/`             | JSON file defining the default Keycloak realm setup           |
| `Dockerfile`          | Builds the customized Keycloak container                      |
| `docker-compose.yml`  | Sets up the full service stack locally                        |
| `helm/`               | Kubernetes deployment using Helm charts                       |

## Local Deployment Guide

### Prerequisites

- [Docker](/docs/02-tools-and-technologies/03-docker/01-the-basics.md)

### Build & Run

To build and run the service locally, run the following command.

```bash
docker compose up -d --build
```

You can then access the deployment at http://localhost.

Note that *you may need to wait a couple of minutes* after running the command before the images are set up and you can access the service.

You can watch the logs for the `keycloak` container until you see the log for `Installed features:...`. Once you see that, everything should be ready and working.
