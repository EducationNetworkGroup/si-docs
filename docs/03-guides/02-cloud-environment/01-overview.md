---
sidebar_position: 1
---

# Cloud Environment Overview

The Science Island production environment runs on **Google Cloud Platform (GCP)**.

---

## Architecture Summary

The entire platform is hosted on a **single Compute Engine Virtual Machine** in GCP.  
This VM runs a **containerised deployment** using **Docker Compose**, which manages all application services.

A **Caddy reverse proxy** handles routing and TLS termination for all domains.  
**Let’s Encrypt** certificates are automatically provisioned and renewed, ensuring secure HTTPS without manual setup.

Authentication across all applications is managed centrally with **Keycloak**.

---

## Core Components

| Component | Description | Deployment |
|----------|-------------|------------|
| **Caddy** | Reverse proxy and TLS certificate provider (Let’s Encrypt). | Docker container |
| **Keycloak** | Centralised authentication & identity management. | Docker container (`login.scienceisland.com`) |
| **Postgres (Keycloak DB)** | Stores Keycloak users, realm config, and identity metadata. | Docker container + persistent volume on VM disk |
| **Platform (Frontend + Backend)** | Main teacher-facing system. | Docker containers (`platform.scienceisland.com`) |
| **Curriculum Mapper (Frontend + Backend)** | Curriculum planning and mapping tools. | Docker containers (`mapper.scienceisland.com`) |
| **Main Website** | Public informational landing site. | Docker container (`scienceisland.com`) |

---

## Supporting Services

These additional services run alongside the core applications:

| Service | Purpose | Deployment Details |
|--------|---------|--------------------|
| **Redis** | Caching layer used by Platform backend services to improve performance. | Docker container: internal-only, not exposed to the public internet. |

---

## Domain & Routing

All external traffic is routed through a **static external IP** assigned to the VM and managed by Caddy.

| Domain | Service |
|--------|---------|
| `scienceisland.com` | Website |
| `login.scienceisland.com` | Keycloak |
| `platform.scienceisland.com` | Teacher Portal |
| `mapper.scienceisland.com` | Curriculum Mapper |

DNS is managed by **GCP Cloud DNS**, with all subdomains mapped to the VM’s static IP.

---

## Runtime Summary

- Single VM deployment keeps the system simple and cost-efficient.
- **Docker Compose** maintains consistent configuration across services.
- **Caddy** auto-manages HTTPS certificates.
- **Keycloak** provides shared login across all modules.
