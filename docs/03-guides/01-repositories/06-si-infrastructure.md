---
sidebar_position: 6
description: Infrastructure-as-Code repository for Science Island cloud resources.
---

# Infrastructure (si-infrastructure)

## Overview

The `si-infrastructure` repository uses **Pulumi** to manage all cloud infrastructure for Science Island on **Google Cloud Platform (GCP)**. It enables version-controlled, reproducible infrastructure deployments using TypeScript.

**Purpose:** Provision and manage cloud resources (compute, storage, networking, DNS, IAM) for all Science Island services.

:::note Legacy AWS Infrastructure

Science Island is currently migrating from AWS to GCP. Some AWS resources may still exist in the project but are no longer actively used for production services. 

**For most development work, you only need to focus on the GCP infrastructure documented here.**

:::

---

## Prerequisites

- [Pulumi CLI](https://www.pulumi.com/docs/get-started/) - Infrastructure-as-Code tool
- [Node.js & Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) - Package management
- [GCP SDK](https://cloud.google.com/sdk/docs/install) - GCP authentication
- **PULUMI_CONFIG_PASSPHRASE** - Contact your Team Lead for this secret

---

## Folder Structure

| Path | Description |
|------|-------------|
| `src/gcp/compute/` | GCP VM running Docker Compose for Platform, Website, Keycloak, Mapper |
| `src/gcp/dns/` | Cloud DNS zones and records (login, platform, mapper) |
| `src/gcp/iam/` | Service accounts and IAM roles for deployments |
| `src/gcp/storage/` | Cloud Storage buckets for state and backups |
| `scripts/` | Utility scripts (access tokens, JWT) |
| `Pulumi.prod.yaml` | Production stack configuration |

---

## Quick Start

### 1. Install Dependencies

```bash
yarn
```

### 2. Authenticate with GCP

```bash
gcloud auth application-default login
gcloud config set project science-island-465603
```

### 3. Login to Pulumi Backend

```bash
pulumi login 'gs://si-iac-state'
```

### 4. Select Stack

```bash
cd src/gcp/compute  # or any module
pulumi stack select organization/prod
```

---

## Key Concepts

### Multi-Project Architecture

Each cloud service (compute, DNS, storage, etc.) is a **separate Pulumi project** with its own state. This allows:
- Independent deployments
- Focused change management
- Reduced blast radius for errors

### Deployment Order

**GCP modules have dependencies:**
1. **Phase 1** (parallel): IAM, Storage, Compute
2. **Phase 2**: DNS (depends on Compute IP)

### Common Commands

```bash
# Preview changes before applying
pulumi preview

# Deploy infrastructure
pulumi up

# View stack outputs (e.g., VM IP, DNS records)
pulumi stack output

# Destroy resources (use with caution!)
pulumi destroy
```

---

## Working with Infrastructure

### Making Changes

1. Create a feature branch
2. Navigate to the relevant module (e.g., `src/gcp/compute/`)
3. Run `pulumi preview` to see planned changes
4. Create a PR for team review
5. After approval, merge triggers automatic deployment via GitHub Actions

### Viewing Current State

```bash
cd src/gcp/compute
pulumi stack output --show-secrets
```

### Troubleshooting

**GCP VM Issues:**
```bash
cd src/gcp/compute
./ssh-into-instance.sh
sudo docker compose ps
sudo docker compose logs <service-name>
```

---

## What's Deployed?

- **Compute Engine VM**: Hosts all services via Docker Compose
- **Cloud DNS**: Routes traffic to login.scienceisland.org, platform.scienceisland.org
- **Filestore**: Persistent storage for services
- **Service Accounts**: CI/CD deployment credentials
- **Cloud Storage Buckets**: State management and backups

