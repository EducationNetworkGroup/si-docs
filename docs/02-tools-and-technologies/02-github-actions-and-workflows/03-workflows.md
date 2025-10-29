---
sidebar_position: 3
description: Science Island's GitHub Actions Workflows.
---

# Workflows

This guide provides an overview of all GitHub Actions workflows used across Science Island repositories, including how to view and monitor them.

---

## Viewing Workflows in GitHub

GitHub Actions workflows can be monitored directly in each repository's interface.

### Accessing the Actions Tab

1. Navigate to a repository on GitHub (e.g., `si-infrastructure`, `Platform`)
2. Click the *Actions* tab in the top navigation bar
3. You'll see a list of workflow runs, with the most recent at the top

### Workflow Run Information

Each workflow run displays:

| Information     | Description                                                                 |
| --------------- | --------------------------------------------------------------------------- |
| `Status`        | Success (green checkmark), failure (red X), or in progress (yellow circle). |
| `Workflow name` | The name defined in the workflow YAML file.                                 |
| `Trigger event` | What caused the workflow to run (push, pull request, manual dispatch).      |
| `Branch/tag`    | Which branch or tag triggered the workflow.                                 |
| `Duration`      | How long the workflow took to complete.                                     |

### Viewing Workflow Details

Click on any workflow run to see:

- Individual job statuses
- Step-by-step execution logs
- Artifacts produced by the workflow
- Error messages (if the workflow failed)

---

## Repository Workflows

The following table provides an overview of workflows across all Science Island repositories:

| Repository              | Workflow                | Trigger             | Purpose                                                           |
| ----------------------- | ----------------------- | ------------------- | ----------------------------------------------------------------- |
| `si-infrastructure`     | Pulumi-Up.yaml          | Push to `main`      | Apply infrastructure changes to GCP.                              |
| `si-infrastructure`     | Pulumi-Preview.yaml     | Pull requests       | Preview infrastructure changes.                                   |
| `si-infrastructure`     | Trigger-Deployment.yaml | Repository dispatch | Update deployed versions.                                         |
| `si-infrastructure`     | Pulumi-Cancel.yaml      | Manual dispatch     | Cancel Pulumi state locks.                                        |
| `si-infrastructure`     | Pulumi-Destroy.yaml     | Manual dispatch     | Teardown infrastructure.                                          |
| `Mapping-System-2022S2` | Publish.yaml            | Push to `main`      | Publish frontend and backend. *Trigger Deployment does not work.* |
| `Mapping-System-2022S2` | Test-Build.yaml         | Pull requests       | Validate builds.                                                  |
| `Platform`              | Publish-Client.yaml     | Push to `main`      | Publish frontend.                                                 |
| `Platform`              | Publish-Server.yaml     | Push to `main`      | Publish backend.                                                  |
| `Platform`              | Test-Build.yaml         | Pull requests       | Validate builds.                                                  |
| `ScienceIslandWebsite`  | Publish.yaml            | Push to `main`      | Publish website.                                                  |
| `ScienceIslandWebsite`  | Publish-Dev.yaml        | Push to `main`      | Publish dev version of website.                                   |
| `si-auth-service`       | Publish.yaml            | Push to `main`      | Publish Keycloak. *Trigger Deployment does not work.*             |
| `si-auth-service`       | Verify.yaml             | Pull requests       | Validate build and Helm.                                          |

---

### si-infrastructure

#### Infrastructure as Code Changes (`Pulumi-Up.yaml`)

**Trigger**: Push to `main` branch

Applies infrastructure changes to Google Cloud Platform using Pulumi. Runs in two phases to handle resource dependencies:

- **Phase 1**: Updates compute, storage, and IAM resources
- **Phase 2**: Updates DNS configuration

#### Infrastructure as Code Preview (`Pulumi-Preview.yaml`)

**Trigger**: Pull requests that modify infrastructure code

Generates a preview of infrastructure changes without applying them. Runs for all Pulumi projects (compute, dns, storage, iam) and posts the preview as a comment on the PR.

#### Trigger Deployment (`Trigger-Deployment.yaml`)

**Trigger**: Repository dispatch event from application repositories

Listens for deployment events from application repositories. When triggered, it updates chart versions and image tags in `Pulumi.prod.yaml` and commits the changes to trigger infrastructure updates.

>Note: This workflow currently **does not receive events** from `Mapping-System-2022S2` and `si-auth-service`. For those repositories, `Pulumi.prod.yaml` must be updated manually. The workflow functions correctly for `Platform` and `ScienceIslandWebsite` repositories.

#### Cancel Pulumi Lock (`Pulumi-Cancel.yaml`)

**Trigger**: Manual workflow dispatch

Cancels active Pulumi state locks for selected projects. Used when workflows fail and leave locks behind. Supports canceling locks for individual projects or all projects at once.

#### Teardown Infrastructure (`Pulumi-Destroy.yaml`)

**Trigger**: Manual workflow dispatch

Destroys all infrastructure resources. This is a destructive operation and should only be used when tearing down the entire environment.

---

### Mapping-System-2022S2

#### Publish Container & Chart to GHCR (`Publish.yaml`)

**Trigger**: Push to `main` branch

Builds and publishes both frontend and backend Docker images to GHCR, publishes Helm charts for both components (legacy - not used for deployment), and triggers the deployment workflow in `si-infrastructure`.

>Note: The Trigger Deployment step in this workflow **does not currently work**. After merging and tagging, you must manually update the version in `Pulumi.prod.yaml` in the `si-infrastructure` repository.

#### Test Builds are Successful (`Test-Build.yaml`)

**Trigger**: Pull requests

Validates that frontend and backend images build successfully. Used to catch build issues before merging PRs.

---

### Platform

#### Publish Client Container & Chart (`Publish-Client.yaml`)

**Trigger**: Push to `main` branch (paths: `client/**/*`, `helm/si-platform-frontend/**/*`, `.github/workflows/Publish-Client.yaml`)

Builds and publishes the frontend image to GHCR, publishes the frontend Helm chart (legacy - not used for deployment), and triggers the deployment workflow in `si-infrastructure`.

#### Publish Server Container & Chart (`Publish-Server.yaml`)

**Trigger**: Push to `main` branch (paths: `server/**/*`, `helm/si-platform-backend/**/*`, `helm/backend-service-template/**/*`, `.github/workflows/Publish-Server.yaml`)

Builds and publishes the backend image to GHCR, publishes the backend Helm chart (legacy - not used for deployment), and triggers the deployment workflow in `si-infrastructure`.

#### Test Builds are Successful (`Test-Build.yaml`)

**Trigger**: Pull requests

Validates that frontend and backend images build successfully. Used to catch build issues before merging PRs.

---

### ScienceIslandWebsite

#### Publish Container & Chart to GHCR (`Publish.yaml`)

**Trigger**: Push to `main` branch

Builds and publishes the website image to GHCR, publishes the Helm chart (legacy - not used for deployment), and triggers the deployment workflow in `si-infrastructure`.

#### Publish Dev Container to GHCR (`Publish-Dev.yaml`)

**Trigger**: Push to `main` branch

Creates a development version of the website image with the tag `dev`. This image includes `local.env` values instead of `production.env` values, making it useful for local development when connecting to a local Keycloak deployment.

---

### si-auth-service

#### Publish Container & Chart to GHCR (`Publish.yaml`)

**Trigger**: Push to `main` branch

Builds and publishes the Keycloak image to GHCR, publishes the Keycloak Helm chart (legacy - not used for deployment), and triggers the deployment workflow in `si-infrastructure`.

>Note: The Trigger Deployment step in this workflow **does not currently work**. After merging and tagging, you must manually update the version in `Pulumi.prod.yaml` in the `si-infrastructure` repository.

#### Verify PR - Build Image & Validate Helm (`Verify.yaml`)

**Trigger**: Pull requests

Builds the Keycloak image and validates the Helm chart configuration (legacy validation). Used to ensure PRs will build successfully and have valid configurations before merging.
