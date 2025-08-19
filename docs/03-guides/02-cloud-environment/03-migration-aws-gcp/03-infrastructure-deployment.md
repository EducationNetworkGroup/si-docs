---
sidebar_position: 3
---

# Infrastructure & Deployment

This section covers the setup of core infrastructure on GCP and how we build and deploy applications — with **Keycloak** as the central example.

---

## 🌐 DNS Setup

We are moving DNS management from **Route 53** (AWS) to **Cloud DNS** (GCP).

- **Managed Zone**: A Cloud DNS zone mirrors the existing Route 53 setup.  
- **Records**: All A, CNAME, MX, and TXT records copied and validated.  
- **Cutover**: Route 53 remains authoritative until migration day.  
- **Keycloak Hostname**: `auth.<domain>` is reserved, with TLS enabled.  
- **Low TTLs**: Records reduced to 60s to allow quick rollback.  

---

## 🗄 Database Setup

We are migrating from **RDS Postgres** to **Cloud SQL Postgres**.

- **Provisioning**: Regional instance in `australia-southeast1`.  
- **Security**: Only accessible via service accounts; secrets managed in **Secret Manager**.  
- **Migration Path**: RDS → `pg_dump` → import into Cloud SQL.  
- **Validation**: Schema, roles, sequences, and row counts checked.  
- **Integration**: Applications (including Keycloak) connect via Cloud SQL connectors.  

---

## 🔑 Keycloak Server Setup

Keycloak is the central service for authentication and identity in this project.

- **Deployment Target**: Compute Engine VM with Docker Compose for dev/test; production uses containerized deployment.  
- **Database Integration**: Keycloak connects to Cloud SQL with a dedicated schema and user.  
- **Networking**: Publicly available via `auth.<domain>` with HTTPS termination.  
- **Secrets**: Stored in **Secret Manager**, injected at runtime.  
- **Scaling**: Designed for future expansion with Cloud Load Balancing and multiple replicas.  

---

## 🏗 CI/CD Builds

- **Source**: Code hosted in GitHub.  
- **Builds**: Cloud Build runs on commits to `main` or `release/*`.  
- **Artifacts**: Images tagged and pushed to **Artifact Registry**.  

**Keycloak build:**  
- Custom Dockerfile bundles realm configuration and provider plugins.  
- Image stored in Artifact Registry under  
  `australia-southeast1-docker.pkg.dev/<project>/<repo>/keycloak:<tag>`.  

---

## 🚀 Deployment Flow

- **Target**: Compute Engine VM (`australia-southeast1-b`).  
- **Process**:  
  1. Cloud Build completes.  
  2. Deployment job triggers.  
  3. VM pulls new image from Artifact Registry.  
  4. Docker Compose restarts Keycloak and supporting containers.  

- **Rollback**: Redeploy a previous image tag. Cached layers speed up recovery.  

---

## 🛡 Security Considerations

- Service accounts have least-privilege roles.  
- Artifact Registry access scoped only to deployer.  
- Secrets managed in **Secret Manager**, never stored in repo.  
- VM firewall limited to 80/443; SSH access restricted.  

---

## ✅ Deliverables

- Cloud DNS zone mirroring Route 53 with Keycloak hostname reserved.  
- Cloud SQL Postgres provisioned and validated.  
- Keycloak server architecture ready on GCP.  
- Reproducible builds with Cloud Build.  
- Automated deployments with rollback capability.  

---
