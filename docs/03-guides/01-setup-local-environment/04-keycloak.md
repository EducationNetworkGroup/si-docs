---
sidebar_position: 3
---

# KeyCloak (si-auth-service)

## Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop)

## Implementation

The SI Auth Service uses Keycloak for identity management and PostgreSQL as its backend database. Docker Compose is used to run all services locally. Caddy provides HTTPS via reverse proxy, and Keycloakify is used for theming the login UI.

## Folder Structure

| File/Folder           | Description                                                   |
|-----------------------|---------------------------------------------------------------|
| `theme/`              | Source code for the custom Keycloak UI theme                  |
| `caddy/`              | Configuration for reverse proxy and HTTPS                     |
| `realms/`             | JSON file defining the default Keycloak realm setup           |
| `Dockerfile`          | Builds the customized Keycloak container                      |
| `docker-compose.yml`  | Sets up the full service stack locally                        |
| `helm/`               | Kubernetes deployment using Helm charts (optional)            |


## Running the Auth Service Locally

Navigate to the SI Auth Service directory:

```bash
cd si-auth-service-main
```

Run Docker Compose:

```bash
docker compose build --pull --no-cache
```

Run:

```bash
docker compose up -d
```

Once it's running, go to your web browser and type in:

```txt
localhost:8443
```



