---
sidebar_position: 5
---

# Networking & Operations

This section covers networking, DNS, and operational monitoring for the AWS → GCP migration.  
It ensures **Keycloak** and related services are reachable, secure, and observable.

---

## 🌐 Cloud DNS

We are migrating DNS management from **Route 53** to **Cloud DNS**.

- **Managed Zone**: A public zone mirrors existing Route 53 records.  
- **Record Import**: All A, CNAME, MX, and TXT records copied and validated.  
- **TTL Strategy**: Critical records reduced to 60s before cutover for quick rollback.  
- **Cutover**: Final migration involves updating registrar NS records to point to Cloud DNS.  

✅ **Deliverable**: Cloud DNS zone fully mirrors Route 53 and is ready for cutover.

---

## 🔑 Keycloak Hostname & Certificates

Keycloak must be exposed securely at a stable hostname, e.g. `auth.example.com`.

- **DNS**: A record points to the Compute Engine VM or Load Balancer IP.  
- **TLS**:  
  - Option 1: Google-managed SSL certificate with Cloud Load Balancer.  
  - Option 2: Let’s Encrypt certificate via Certbot on the VM.  
- **Redirect URIs**: All OIDC clients updated to use `https://auth.example.com/auth`.  

✅ **Deliverable**: Keycloak available over HTTPS with valid TLS certificate.

---

## 🛡 Firewall & Security

- **Inbound Rules**: Only ports 80/443 allowed to the VM.  
- **Admin Access**: SSH restricted to internal IPs or bastion host.  
- **Secrets**: Managed via Secret Manager, never exposed in configs.  
- **Scaling**: Future-ready for Cloud Load Balancing and multi-VM replicas.  

---

## 📜 Logging (Cloud Logging)

- **Sources**: Compute Engine VM, Keycloak logs, application logs.  
- **Collection**: Ops Agent installed on VM forwards logs to Cloud Logging.  
- **Retention**: Logs stored for compliance; filters configured for auth-related events.  

✅ **Deliverable**: Centralized log collection for applications and Keycloak.

---

## 📊 Monitoring (Cloud Monitoring)

- **Dashboards**:  
  - Keycloak health (response times, error codes).  
  - Database metrics (connections, slow queries).  
  - VM metrics (CPU, memory, disk).  

- **SLOs**:  
  - p95 request latency ≤ 800 ms at peak load.  
  - Keycloak uptime ≥ 99.9%.  

✅ **Deliverable**: Monitoring dashboards for real-time visibility.

---

## 🚨 Alerts

Configured in Cloud Monitoring for:

- **Keycloak**: 5xx errors > threshold, failed logins spike.  
- **Database**: High connection usage, replication lag.  
- **VM**: CPU or memory > 80% sustained.  
- **Budget**: Monthly spend exceeds 80% of allocation.  

Alerts routed to email/Slack for immediate response.

---

## ✅ Final Outputs

- Cloud DNS zone in place with cutover plan.  
- Keycloak accessible via `auth.example.com` with TLS.  
- Firewalls restricted to only necessary ports.  
- Logging and monitoring integrated into Cloud Operations suite.  
- Alerts defined for latency, auth failures, and budget thresholds.  

---
