---
sidebar_position: 2
---

# Service Mapping: AWS → GCP

This page provides a reference table mapping AWS services in use to their Google Cloud Platform equivalents.  
It explains what we’re replacing, what we’re keeping, and notes on migration considerations.

---

## 🔄 Core Service Mapping

| AWS Service | GCP Equivalent | Migration Notes |
|-------------|----------------|-----------------|
| **EC2** | Compute Engine | Using a single VM with Docker Compose for development. Option to scale out with GKE in the future. |
| **EKS** | GKE (optional) | Not used initially — replaced by VM + Compose for simplicity. |
| **ALB / NLB** | Cloud Load Balancing | For production cutover; not needed for dev single-VM setup. |
| **S3** | Cloud Storage | Migrated via `gcloud storage cp` or Storage Transfer Service. Verify object metadata (ACLs, encryption). |
| **ECR** | Artifact Registry | Container images retagged and pushed to `australia-southeast1-docker.pkg.dev/...`. |
| **RDS (Postgres)** | Cloud SQL (Postgres) | Dump/import with `pg_dump`. Watch for extensions, users, and connection pooling. |
| **Lambda** | Cloud Functions / Cloud Run Jobs | Future option for serverless jobs; not used in current architecture. |
| **CloudWatch Logs** | Cloud Logging | Logs exported automatically from Compute Engine via Ops Agent. |
| **CloudWatch Metrics** | Cloud Monitoring | Custom dashboards and p95 latency SLOs. |
| **CloudTrail** | Cloud Audit Logs | Enabled at the org/project level. |
| **Parameter Store / Secrets Manager** | Secret Manager | Secrets accessed at runtime via `gcloud secrets versions access`. |
| **Route 53** | Cloud DNS | DNS zones imported; final cutover via NS update. |
| **IAM Roles** | Service Accounts | Scoped per-service with least privilege. |
| **CodeBuild / CodePipeline** | Cloud Build / Cloud Deploy | Build + push to Artifact Registry, deploy to VM. |

---

## 📋 Migration Priorities

- ✅ **In-scope now**: EC2 → GCE, S3 → GCS, RDS → Cloud SQL, ECR → Artifact Registry, IAM → Service Accounts.  
- ⚠️ **Deferred / optional**: EKS → GKE, Lambda → Cloud Functions.  
- 🚫 **Not needed**: Services like CloudFront (replaced by GCP Load Balancing with CDN).  

---

## ✅ Deliverable

This table acts as the canonical reference during and after migration.  
When onboarding new engineers, point them here to understand the **“what maps to what”** story at a glance.
