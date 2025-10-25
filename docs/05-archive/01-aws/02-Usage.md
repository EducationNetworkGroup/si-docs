---
sidebar_position: 2
description: Understand the key AWS services used within Science Island.
---

# AWS Usage

## S3

There are 2 S3 buckets currently:

- **Si-iac-state**: This is where the Pulumi state backend stores the state of Science Island infrastructure.
- **Si-questions-bucket**: This is where they store books, games, images, quizzes, and songs for the website.

---

## IAM

- There are 5 user groups:
  - **AdminGroupStudent**: Contains the admin.
  - **BreakGlassGroup**
  - **JamesReadOnly**: Contains James with only read-only access.
  - **ServiceWorkerGroup**: Contains service workers with administrator access.
  - **StudentViewGroup**: Contains students with read-only access.

---

## EKS

- Contains a cluster named `prod-cluster` with Kubernetes version 1.31.
- Utilizes Amazon Elastic File System (EFS) with the Container Storage Interface (CSI) driver for persistent storage.
- EKS is deployed in a custom VPC (`prod-vpc`).
- The cluster is associated with 2 security groups:
  - One allows inbound HTTPS traffic over TCP.
  - The other permits all inbound traffic across all protocols and ports.

---

## Route 53

- **Hosted Zones**:
  - `scienceisland.com`, type: public.
  - `login.scienceisland.com`, type: public.
  - `mapper.scienceisland.com`, type: public.
  - `platform.scienceisland.com`, type: public.

---

## AWS Load Balancer Controller

- There are 4 application load balancers and 1 network load balancer.
- All are deployed on `prod-vpc`.
- All load balancers are available in 3 availability zones:
  - `ap-southeast-2a`
  - `ap-southeast-2b`
  - `ap-southeast-2c`

---

## Amazon API Gateways

- External-facing API management and integration service for routing and handling requests to backend services.

---

## External DNS

- Automatically synchronizes DNS records in Route 53 based on Kubernetes resources.