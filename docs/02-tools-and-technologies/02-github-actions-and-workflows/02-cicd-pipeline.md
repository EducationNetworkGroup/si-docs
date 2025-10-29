---
sidebar_position: 2
description: Understanding Science Island's CI/CD Pipeline.
---

# CI/CD Pipeline

This guide explains Science Island's continuous integration and continuous deployment (CI/CD) pipeline, including the intended workflow for developers and how the automated deployment system operates.

>Note: Science Island migrated from AWS with Kubernetes to a simplified GCP VM-based deployment in 2025. Helm charts are still published to GHCR (legacy from the Kubernetes era) but are no longer used for deployment. Services now run on virtual machines using Docker Compose instead of Kubernetes orchestration.

---

## Intended Workflow

When working on Science Island projects, follow this workflow to ensure smooth deployments:

1. **Create a branch** - Make a new branch from `main` to do your work in.
2. **Submit a Pull Request (PR)** - When your work is complete, create a PR to merge your changes back into `main`.
3. **Resolve build issues** - Some repositories have workflows that validate PR builds. Ensure all build checks pass before merging.
4. **Merge the PR** - Once approved and passing all checks, merge your PR into the `main` branch.
5. **Create a new tag** - After merging, create a new tag for the repository. See [Creating a Git Tag](#creating-a-git-tag) below.
6. **Manual updates (temporary workaround)** - For repositories where the Trigger Deployment step doesn't currently work (see [Repositories Requiring Manual Updates](#repositories-requiring-manual-updates)), manually update the version tag in `Pulumi.prod.yaml`. When you commit and push this change, it will automatically trigger the `Pulumi-Up.yaml` workflow, allowing you to *skip Step 7*.
7. **Push empty commit (temporary workaround)** - `Trigger-Deployment.yaml` doesn't currently trigger `Pulumi-Up.yaml` automatically. See [Creating an Empty Commit](#creating-an-empty-commit) below.

### Creating a Git Tag

Tags are essential for triggering deployments. Without an updated tag, the deployment will fail even if the code is merged. To create and push a new tag:

```bash
# Create a new tag (use semantic versioning: v1.2.3)
git tag v1.2.3

# Push all tags to the remote repository
git push --tags
```

### Repositories Requiring Manual Updates

The `Mapping-System-2022S2` and `si-auth-service` repositories have Trigger Deployment steps that *do not currently work*. After merging and tagging in these repositories, you must manually update `Pulumi.prod.yaml` in the `si-infrastructure` repository:

```yaml
  gcp-compute:deployed-versions.si-auth-service: 1.1.2
  gcp-compute:deployed-versions.si-auth-service.image: v0.0.6                 #<---- Update to your new git tag for si-auth-service
  gcp-compute:deployed-versions.si-curriculum-mapper-backend: 1.0.0
  gcp-compute:deployed-versions.si-curriculum-mapper-backend.image: v0.0.1    #<---- Update to your new git tag for Mapping-System-2022S2
  gcp-compute:deployed-versions.si-curriculum-mapper-frontend: 1.0.0
  gcp-compute:deployed-versions.si-curriculum-mapper-frontend.image: v0.0.1   #<---- Update to your new git tag for Mapping-System-2022S2
```

For all other repositories (e.g., `ScienceIslandWebsite`, `Platform`), the Trigger Deployment step functions correctly and will automatically trigger `Trigger-Deployment.yaml`.

### Creating an Empty Commit

An empty commit can be used to trigger workflows without making actual code changes. This is currently needed to manually trigger the `Pulumi-Up.yaml` workflow in the `si-infrastructure` repository:

```bash
# Create an empty commit with a message
git commit --allow-empty -m "Trigger deployment"

# Push the commit to the remote repository
git push origin main
```

---

## How the Pipeline Works

Science Island's CI/CD pipeline automates the entire deployment process from code commit to production deployment. The pipeline follows this sequence:

| Step | Component                | Description                                                                               |
| ---- | ------------------------ | ----------------------------------------------------------------------------------------- |
| `1`  | Publish workflows        | Builds and publishes Docker images and Helm charts to GHCR from application repositories. |
| `2`  | Trigger Deployment event | Sends deployment event from application repositories to `si-infrastructure`.              |
| `3`  | Update deployed versions | Updates `Pulumi.prod.yaml` with new chart versions and image tags in `si-infrastructure`. |
| `4`  | Infrastructure updates   | Applies changes to GCP resources and redeploys services on virtual machines.              |

### 1. Publish Workflows

When code is pushed to the `main` branch of an application repository (e.g., `ScienceIslandWebsite`, `Platform`), a publish workflow automatically:

- Builds a Docker container image
- Publishes the image to GitHub Container Registry (GHCR)
- Publishes a Helm chart to GHCR (legacy - not used for deployment)
- Triggers a deployment event

Each application repository has its own publish workflow (e.g., `Publish-Server.yaml`, `Publish-Client.yaml`, `Publish.yaml`).

>Note: While Helm charts are still published, they are no longer used in the deployment process. Services are deployed using Docker Compose on virtual machines.

### 2. Trigger Deployment

At the end of each publish workflow, a `Trigger Deployment` event is created and sent to the `si-infrastructure` repository with the following information:

| Field     | Description                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------ |
| `chart`   | The name of the service/application (e.g., `si-platform-frontend`). Legacy naming from Kubernetes era. |
| `version` | The version number (e.g., `1.2.3`).                                                                    |
| `image`   | The image tag to deploy (e.g., `main`).                                                                |

>Note: The term "chart" is legacy terminology from when Kubernetes/Helm was used. It now simply refers to the service name for tracking deployment versions.

### 3. Update Deployed Versions

The `Trigger-Deployment.yaml` workflow in `si-infrastructure` listens for the Trigger Deployment event. When triggered, it:

- Pulls the latest changes from the `si-infrastructure` repository
- Updates the service versions and image tags in `Pulumi.prod.yaml` (located in the root of `si-infrastructure`)
- Commits and pushes these changes to the `main` branch

>Note: The configuration file tracks "chart" versions as a legacy naming convention. These values control which Docker image versions are deployed via Docker Compose. For repositories where the Trigger Deployment step doesn't work (`Mapping-System-2022S2`, `si-auth-service`), this file must be updated manually.

### 4. Infrastructure Updates

The `Pulumi-Up.yaml` workflow in `si-infrastructure` listens for commits to the `main` branch. When it detects changes to the Pulumi configuration file, it:

- Updates GCP resources (compute, storage, IAM)
- Updates DNS configuration
- Re-deploys any service with an updated version or image tag on the virtual machines using Docker Compose

The Pulumi workflow runs in two phases to ensure dependencies are created in the correct order:

| Phase     | Projects              | Description                                              |
| --------- | --------------------- | -------------------------------------------------------- |
| `Phase 1` | compute, storage, iam | Creates and updates core infrastructure resources.       |
| `Phase 2` | dns                   | Updates DNS configuration. Depends on Phase 1 resources. |

---

## Cancel Pulumi Lock

When working with Pulumi for infrastructure as code, state files can become locked if a workflow is interrupted or fails unexpectedly. The `Pulumi-Cancel.yaml` workflow provides a manual way to release these locks.

### When to Use

Use this workflow when:

- A Pulumi workflow fails mid-execution and leaves a lock
- You need to cancel a long-running Pulumi operation
- Multiple workflows conflict and create a deadlock

### How to Run

The `Pulumi-Cancel.yaml` workflow is triggered manually via workflow dispatch:

1. Navigate to the Actions tab in the `si-infrastructure` repository
2. Select the "Cancel Pulumi Lock" workflow
3. Click "Run workflow"
4. Choose which project to cancel the lock for

| Option    | Description                           |
| --------- | ------------------------------------- |
| `compute` | Compute resources (VMs, deployments). |
| `storage` | Storage buckets and volumes.          |
| `iam`     | Service accounts and permissions.     |
| `dns`     | DNS records and routing.              |
| `all`     | Cancel locks for all projects.        |

The workflow will connect to the Pulumi state backend and cancel any active locks for the selected project(s).
