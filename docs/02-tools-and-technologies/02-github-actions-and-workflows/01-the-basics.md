---
sidebar_position: 1
description: Introduction to GitHub Actions and GHCR.
---

# The Basics

This guide provides an introduction to GitHub Actions and GitHub Container Registry (GHCR), their fundamental concepts, and the role they play in Science Island's deployment pipeline.

---

## What is GitHub Actions?

GitHub Actions is a continuous integration and continuous deployment (CI/CD) platform integrated directly into GitHub. It allows you to automate workflows triggered by events in your repository, such as pushing code, creating pull requests, or publishing releases. Workflows are defined using YAML files stored in the `.github/workflows` directory of your repository.

## What is GHCR?

GitHub Container Registry (GHCR) is a container registry service provided by GitHub for storing and managing Docker container images. It integrates seamlessly with GitHub Actions, allowing automated building and publishing of container images as part of your CI/CD pipeline. GHCR provides package versioning, access control, and visibility settings for your container images.

## How do they work with Science Island?

Science Island uses GitHub Actions to automate the entire deployment process, from building application images to deploying them on Google Cloud Platform (GCP). When code is pushed to a repository, workflows automatically build Docker images, publish them to GHCR, and trigger deployment updates in the `si-infrastructure` repository. This automation ensures consistent deployments and reduces manual intervention.

## Terminology

| Term                  | Definition                                                                                                                                                                                                  |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Workflow`            | An automated process defined in a YAML file that runs one or more jobs in response to events.                                                                                                               |
| `Job`                 | A set of steps that execute on the same runner. Jobs can run in parallel or sequentially depending on dependencies.                                                                                         |
| `Step`                | An individual task within a job, such as running a command or using an action.                                                                                                                              |
| `Action`              | A reusable unit of code that performs a specific task. Actions can be created by GitHub, the community, or custom-built.                                                                                    |
| `Runner`              | A server that runs workflows. GitHub provides hosted runners, or you can host your own.                                                                                                                     |
| `Event`               | A specific activity that triggers a workflow, such as a push, pull request, or custom repository dispatch event.                                                                                            |
| `Container Image`     | A lightweight, standalone package that contains everything needed to run a piece of software, including code, runtime, and dependencies.                                                                    |
| `Container Registry`  | A storage and distribution system for container images. GHCR is GitHub's container registry service.                                                                                                        |
| `Image Tag`           | A label applied to a container image to identify different versions or variants of the image.                                                                                                               |
| `Repository Dispatch` | A custom event that can be triggered via the GitHub API to start a workflow in a different repository.                                                                                                      |
| `Pulumi`              | Infrastructure as code tool that allows defining cloud resources using programming languages.                                                                                                               |
| `Virtual Machine`     | A compute instance in Google Cloud Platform that runs Science Island services.                                                                                                                              |
| `Docker Compose`      | A tool for defining and running multi-container Docker applications using a YAML file. See [Docker Compose](/docs/02-tools-and-technologies/03-docker/07-docker-compose/01-the-basics.md) for more details. |

---

## Science Island Repositories

Science Island's CI/CD pipeline spans multiple repositories:

| Repository             | Purpose                                                                                               |
| ---------------------- | ----------------------------------------------------------------------------------------------------- |
| `si-infrastructure`    | Contains infrastructure-as-code (Pulumi) and orchestrates deployments across all services.            |
| `Individual app repos` | Each application repository (e.g., `ScienceIslandWebsite`, `Platform`) has its own publish workflows. |

## Workflow Structure

GitHub Actions workflows in Science Island follow a consistent structure:

| Component | Description                                                                             |
| --------- | --------------------------------------------------------------------------------------- |
| `name`    | A descriptive name for the workflow.                                                    |
| `on`      | Defines the events that trigger the workflow (push, pull request, repository dispatch). |
| `jobs`    | Contains one or more jobs that execute as part of the workflow.                         |
| `steps`   | Individual tasks within a job, such as checking out code or building images.            |
| `env`     | Environment variables used throughout the workflow.                                     |

---

## Key Concepts

### Container Image Publishing

When code is pushed to a Science Island application repository, a publish workflow automatically:

1. Builds a Docker image containing the application code
2. Tags the image with version information
3. Pushes the image to GHCR
4. Triggers a deployment event

### Cross-Repository Communication

Science Island uses repository dispatch events to enable workflows in one repository to trigger workflows in another. This allows application repositories to notify the `si-infrastructure` repository when new images are published, initiating the deployment process.

The dispatch event includes:

- Chart name (e.g., `si-platform-frontend`)
- Chart version (e.g., `1.2.3`)
- Image tag (e.g., `main`)

### Infrastructure as Code with Pulumi

The `si-infrastructure` repository uses Pulumi to define and manage cloud resources. When new container images are published, the infrastructure workflows automatically update configuration files to reference the new versions, then apply these changes to GCP.

Pulumi projects are organized by resource type:

- **compute** - Virtual machines and application deployments
- **storage** - Cloud storage buckets and persistent volumes
- **iam** - Service accounts and access permissions
- **dns** - DNS records and routing configuration
