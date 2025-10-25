---
sidebar_position: 1
description: Introduction to Caddy and its role in Science Island.
---

# Overview

[Caddy](https://caddyserver.com/) is a web server with automatic HTTPS that serves as the reverse proxy for Science Island. It routes all incoming HTTP/HTTPS traffic to the appropriate backend services.

## What is Caddy?

Caddy is a reverse proxy with:
- **Automatic HTTPS**: Auto-obtains and renews SSL certificates from Let's Encrypt
- **Simple Configuration**: Human-readable Caddyfile format
- **Built-in Security**: HTTPS by default with security headers

## Why Use Caddy?

1. **Automatic SSL Management**: No manual certificate renewal across multiple domains
2. **Single Entry Point**: Routes to Platform, Mapper, Keycloak, Website, and API services
3. **Simple Syntax**: Easier to maintain than nginx/Apache
4. **WebSocket Support**: Required for Keycloak admin console

## Architecture

```
Internet → Caddy (HTTPS) → Internal Services (HTTP)
                    ├─→ platform-client:3000
                    ├─→ mapper-frontend:3000
                    ├─→ keycloak:8080
                    ├─→ website:80
                    └─→ platform-backend services:8001
```

## Where It's Used

**Production** (`si-infrastructure/src/gcp/compute/prod.Caddyfile`):
- Main reverse proxy on GCP
- Routes based on domain names and paths

**Auth Service** (`si-auth-service/caddy/Caddyfile`):
- Proxies requests to Keycloak
- Handles SSL termination

## Key Features

| Feature | Purpose |
|---------|---------|
| Automatic HTTPS | SSL certificates for all domains |
| Host-based Routing | Different subdomains → different services |
| Path-based Routing | API routes → appropriate backends |
| Compression | gzip/zstd for responses |
| Security Headers | HSTS, X-Frame-Options, etc. |

## Resources

- [Official Docs](https://caddyserver.com/docs/)
- [Reverse Proxy Guide](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy)

