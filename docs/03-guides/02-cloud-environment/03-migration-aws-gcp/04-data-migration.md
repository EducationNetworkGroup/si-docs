---
sidebar_position: 4
---

# Data Migration & Cutover

This section covers the migration of data services from AWS to GCP and the step-by-step playbook for the final cutover.  
The focus areas are **object storage**, **relational databases**, and **Keycloak**, followed by the cutover and rollback strategy.

---

## 📦 Object Storage Migration (S3 → Cloud Storage)

- **Buckets**: Each S3 bucket is recreated in GCS with the same naming convention.  
- **Transfer Options**:  
  - **Storage Transfer Service** for large datasets.  
  - **`gcloud storage cp`** for small or one-off transfers.  
- **Metadata**: ACLs, encryption, and versioning reapplied in GCS.  
- **Validation**: Random file samples checked for integrity and accessibility.  

✅ **Deliverable**: All required assets migrated to Cloud Storage, with equivalent access and encryption policies.

---

## 🗄 Database Migration (RDS → Cloud SQL)

- **Provisioning**: Cloud SQL Postgres instance created in `australia-southeast1`.  
- **Export/Import**:  
  - `pg_dump` from RDS.  
  - Import into Cloud SQL using `pg_restore` or `gcloud sql import`.  
- **Validation**: Compare row counts, roles, extensions, and sequences.  
- **Integration**: Application configs updated to use Cloud SQL connectors.  

✅ **Deliverable**: Cloud SQL seeded with production data and verified.

---

## 🔑 Keycloak Database Migration

Keycloak’s persistence layer relies on Postgres. Migrating its schema is critical.

- **Schema**: Pre-provisioned in Cloud SQL to avoid mismatch.  
- **Backup**: Export RDS Keycloak schema separately as an additional safeguard.  
- **Restore**: Import into Cloud SQL, validate key tables (`user_entity`, `realm`, `client`, `role`).  
- **Testing**: Run Keycloak in staging against Cloud SQL, confirm:  
  - Realms exist.  
  - Users and credentials are intact.  
  - Clients retain redirect URIs.  

✅ **Deliverable**: Keycloak fully functional on Cloud SQL, verified via admin console and test logins.

---

## 🧭 Cutover Playbook

### Pre-Cutover (T-48h)
- Lower DNS TTLs in Route 53 to 60s.  
- Validate Cloud SQL + Keycloak staging.  
- Confirm S3 → GCS sync is up to date.  

### Final Sync (T-0h)
- Freeze writes or announce downtime window.  
- Run last RDS → Cloud SQL sync.  
- Run last S3 → GCS delta sync.  

### Cutover Execution
1. Update registrar NS records → Cloud DNS.  
2. Switch apps (including Keycloak) to use Cloud SQL and GCS.  
3. Restart Docker Compose on GCE VM to pull latest images.  
4. Validate Keycloak login, app DB queries, and file uploads.  

### Post-Cutover Validation
- Monitor p95 latency, error rate, and auth flows in Cloud Monitoring.  
- Verify Cloud Logging for app/Keycloak logs.  

---

## 🛑 Rollback Plan

- **DNS**: Switch NS back to Route 53 if issues occur.  
- **Database**: Restore from RDS snapshot if Cloud SQL corrupt.  
- **Storage**: Continue serving from S3 if GCS sync incomplete.  
- **App**: Redeploy previous Keycloak + app versions from AWS.  

Rollback window is viable while TTL = 60s and AWS infra is still intact.

---

## ✅ Deliverables

- All S3 buckets migrated to GCS.  
- Cloud SQL provisioned, populated, and validated.  
- Keycloak connected and verified against Cloud SQL.  
- Cutover and rollback procedure documented and tested.  

---
