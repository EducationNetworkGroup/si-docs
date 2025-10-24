---
sidebar_position: 3
description: Complete guide to Science Island's infrastructure-as-code repository
---

# Infrastructure Guide

## What is si-infrastructure?

The `si-infrastructure` repository uses **Pulumi** (Infrastructure-as-Code) to manage all Science Island cloud resources on **Google Cloud Platform**. All services run on a single GCP Compute Engine VM using Docker Compose.

**Key Info:**
- **Repository:** `si-infrastructure`
- **Tool:** Pulumi (TypeScript)
- **Cloud:** Google Cloud Platform
- **Services:** Platform, Website, Keycloak, Curriculum Mapper

## Repository Structure

```
si-infrastructure/
├── src/gcp/
│   ├── compute/    # VM + Docker services
│   ├── dns/        # Domain routing
│   ├── iam/        # Service accounts
│   └── storage/    # Cloud Storage buckets
├── Pulumi.prod.yaml  # Encrypted config
└── scripts/          # Utility scripts
```

## Quick Setup

### Prerequisites

```bash
# Required tools
- Pulumi CLI
- Node.js v18+
- Yarn
- GCP SDK (gcloud)
- Git

# Required access
- PULUMI_CONFIG_PASSPHRASE (ask Team Lead)
- GitHub repo access
- GCP project access (science-island-465603)
```

### Installation

```bash
# 1. Clone and install
git clone https://github.com/EducationNetworkGroup/si-infrastructure.git
cd si-infrastructure
yarn install

# 2. Authenticate GCP
gcloud auth application-default login
gcloud config set project science-island-465603

# 3. Configure Pulumi
export PULUMI_CONFIG_PASSPHRASE="<from-team-lead>"
pulumi login 'gs://si-iac-state'

# 4. Test access
cd src/gcp/compute
pulumi stack select organization/prod
pulumi preview
```

## GCP Modules

### Compute Module (`src/gcp/compute/`)

**What it does:** Runs all services on a VM via Docker Compose

**Key resources:**
- Compute Engine VM (Ubuntu, e2-standard-2)
- Filestore (NFS persistent storage)
- VPC + Firewall (HTTP/HTTPS/SSH)
- Docker Compose with 7+ services

**Common tasks:**

```bash
# Deploy version update
cd src/gcp/compute
# Edit Pulumi.prod.yaml: deployed-versions.si-platform-backend.image: v1.2.3
pulumi up

# SSH into VM
./ssh-into-instance.sh
sudo docker compose ps
sudo docker compose logs -f <service-name>

# Restart service
sudo docker compose restart si-platform-backend
```

### DNS Module (`src/gcp/dns/`)

**What it does:** Routes domains to VM

**Managed records:**
- login.scienceisland.com
- platform.scienceisland.com
- mapper.scienceisland.com

**Common tasks:**

```bash
cd src/gcp/dns
pulumi up

# Verify DNS
dig platform.scienceisland.com
```

### IAM Module (`src/gcp/iam/`)

**What it does:** Service accounts for CI/CD

```bash
cd src/gcp/iam
pulumi up
```

### Storage Module (`src/gcp/storage/`)

**What it does:** Cloud Storage buckets for state & backups

```bash
cd src/gcp/storage
pulumi up
```

## Common Workflows

### Deploy Service Update

```bash
cd src/gcp/compute
# Edit Pulumi.prod.yaml: change image version
pulumi preview
pulumi up
```

### Add DNS Record

```bash
cd src/gcp/dns
# Edit index.ts: add new RecordSet
pulumi up
```

### Deploy from Scratch

```bash
# Phase 1 (parallel)
cd src/gcp/iam && pulumi up &
cd src/gcp/storage && pulumi up &
cd src/gcp/compute && pulumi up  # Takes ~10 min

# Phase 2 (after compute)
cd src/gcp/dns && pulumi up
```

### Rotate Credentials

```bash
cd src/gcp/compute
NEW_PW=$(openssl rand -base64 24)
pulumi config set --secret postgres-password "$NEW_PW"
pulumi up
```

### Rollback Deployment

```bash
cd src/gcp/compute
pulumi stack history
pulumi stack export --version <previous-version> > state.json
pulumi stack import --file state.json
pulumi up
```

## Troubleshooting

### Pulumi Issues

**Passphrase error:**
```bash
echo $PULUMI_CONFIG_PASSPHRASE  # Should output passphrase
export PULUMI_CONFIG_PASSPHRASE="<correct-passphrase>"
```

**Stack not found:**
```bash
pulumi login 'gs://si-iac-state'
pulumi stack select organization/prod
```

### GCP Issues

**Permission denied:**
```bash
gcloud auth application-default login
gcloud config set project science-island-465603
```

**Can't SSH into VM:**
```bash
gcloud compute ssh si-compute-1 \
  --project=science-island-465603 \
  --zone=australia-southeast1-b
```

### Service Issues

**Service not starting:**
```bash
# SSH into VM
cd /opt/app
sudo docker compose logs <service-name>
sudo docker compose restart <service-name>
```

**Database connection refused:**
```bash
sudo docker compose ps | grep postgres
sudo docker compose logs postgres
sudo docker compose restart postgres
```

**Filestore not mounted:**
```bash
df -h | grep /opt/app/data
# Get IP from: pulumi stack output filestoreIp
sudo mount -o nolock <filestore-ip>:/vol1 /opt/app/data/
```

### DNS Issues

**DNS not resolving:**
```bash
# Verify DNS module deployed
cd src/gcp/dns
pulumi stack output

# Check records
gcloud dns record-sets list --zone=scienceisland-com

# Clear cache
dig platform.scienceisland.com
```

## Emergency Procedures

**Restart crashed service:**
```bash
./ssh-into-instance.sh
sudo docker compose restart <service-name>
```

**Rebuild VM:**
```bash
cd src/gcp/compute
pulumi stack export > backup.json
pulumi destroy --target <vm-resource>
pulumi up
```
