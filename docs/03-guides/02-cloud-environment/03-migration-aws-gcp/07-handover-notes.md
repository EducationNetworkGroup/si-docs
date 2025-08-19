---
sidebar_position: 7
---

# Handover Notes

This section provides the essential information for the next team taking ownership of the GCP environment.  
It summarises **access management, secrets, monitoring, and known limitations** so operations can continue smoothly after the migration.

---

## 👥 Access Management

- **IAM Principles**:  
  - Use Google Cloud **service accounts** for applications.  
  - Grant least-privilege IAM roles to users.  
  - Avoid long-lived keys; prefer Workload Identity Federation.  

- **User Access**:  
  - Developers and admins added via Google Groups.  
  - Role separation:  
    - *Viewer*: read-only access.  
    - *Editor*: development + staging changes.  
    - *Admin*: production changes and secrets.  

---

## 🔑 Secrets & Credentials

- All sensitive values (DB passwords, Keycloak admin credentials, API tokens) are stored in **Secret Manager**.  
- Rotation policy: rotate critical secrets (Keycloak admin, DB password) **every 90 days**.  
- Secrets should **never be checked into GitHub**.  

---

## 📊 Dashboards & Monitoring

- **Cloud Monitoring Dashboards**:  
  - Keycloak health and login errors.  
  - Database performance (connections, slow queries).  
  - VM utilisation (CPU, memory, disk).  
  - Billing overview.  

- **Alerts**: Configured for:  
  - Keycloak auth failures / 5xx spikes.  
  - Database saturation.  
  - Budget > 80%.  

---

## 🌐 DNS & Networking

- **Authoritative DNS**: Cloud DNS is now authoritative for the domain.  
- **Keycloak Hostname**: `auth.<domain>` points to the Compute Engine VM.  
- **Certificates**: Managed SSL via Cloud Load Balancing, or Let’s Encrypt on VM.  
- **Rollback**: Old Route 53 config retained for reference, but no longer authoritative.  

---

## 🔑 Keycloak Operations

- **Admin Console**: Available at `https://auth.<domain>/auth`.  
- **Database**: Cloud SQL Postgres backend.  
- **Scaling**: Currently single VM; can be scaled to multiple instances behind a Load Balancer.  
- **Backup**: Cloud SQL daily automated backups enabled.  

---

## ⚠️ Known Limitations

- Single VM + Docker Compose not HA — downtime possible during upgrades.  
- Cloud SQL running in zonal mode; HA upgrade is a future task.  
- DNS cutover rollback only possible while old Route 53 is retained.  
- Some AWS-only services (e.g., DynamoDB) not yet replaced — deferred scope.  

---

## 📌 Future Improvements

- Migrate Keycloak to **GKE** for scalability.  
- Enable **multi-zone Cloud SQL HA**.  
- Add **Cloud Deploy** for more advanced pipelines.  
- Expand storage lifecycle rules to optimise long-term costs.  

---

## ✅ Final Deliverables

- IAM roles and service accounts defined.  
- Secrets centralised in Secret Manager with rotation policy.  
- Monitoring dashboards and alerts documented.  
- Clear limitations and roadmap for next team.  

---
