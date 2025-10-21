---
sidebar_position: 6
description: Using different Docker files for local vs production builds.
---

# Dockerfile vs local.Dockerfile

Throughout the project, you will see places where multiple Dockerfiles are defined. For instance, within [Mapping-System-2022S2/src/frontend/](https://github.com/EducationNetworkGroup/Mapping-System-2022S2/tree/main/src/frontend) there is a [`Dockerfile`](https://github.com/EducationNetworkGroup/Mapping-System-2022S2/blob/main/src/frontend/Dockerfile) and a [`local.Dockerfile`](https://github.com/EducationNetworkGroup/Mapping-System-2022S2/blob/main/src/frontend/local.Dockerfile). 

As you might imagine, the `Dockerfile` builds a production-ready image of this React frontend, while the `local.Dockerfile` builds a development image of that same project. They each read in different `.env` files and set things up slightly differently. 

The `local.` prefix is the convention used within the project for development images, but you can change this to anything and have as many different Dockerfiles as you like.

## How the different Dockerfiles are used

### Local

Generally, where there are multiple Dockerfiles, the local version will be used by the `docker-compose.yaml` file with code similar to this:

```yaml
mapper-frontend:
    platform: "linux/amd64"
    container_name: mapper-frontend
    build:
        context: ./src/frontend
        dockerfile: local.Dockerfile
```

### Production 

The production build will then generally be created by the `Publish.yaml` GitHub Actions Workflow, and pushed to the Github Container Registry, similar to this:

```yaml
- name: Build & Publish Image
    run: |
    TAG=$(echo $GITHUB_REF_NAME | sed 's|/|-|g')
    docker build ./src/frontend --tag ghcr.io/educationnetworkgroup/si-curriculum-mapper-frontend:${TAG}
    docker push ghcr.io/educationnetworkgroup/si-curriculum-mapper-frontend:${TAG}
```

Here, the basic `Dockerfile` is implied, so it doesn't need to be explicitly stated in the `docker build` command.

This is the image that you can find in the [`Packages`](https://github.com/orgs/EducationNetworkGroup/packages) tab within EducationNetworkGroup.