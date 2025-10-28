---
sidebar_position: 2
description: Caddy configuration in Science Island infrastructure.
---

# Configuration

## Production (`prod.Caddyfile`)

**Location**: `si-infrastructure/src/gcp/compute/prod.Caddyfile`

### Domain Routing

```caddy
# Frontend services
platform.scienceisland.com {
    reverse_proxy platform-client:3000
}

mapper.scienceisland.com {
    reverse_proxy mapper-frontend:3000
}

scienceisland.com {
    reverse_proxy website:80
}

# Auth with WebSocket support
login.scienceisland.com {
    header {
        Strict-Transport-Security "max-age=31536000; includeSubDomains"
        X-Frame-Options "SAMEORIGIN"
    }
    reverse_proxy keycloak:8080 {
        header_up Connection {>Connection}
        header_up Upgrade {>Upgrade}
    }
}

# API Gateway - path-based routing
api.scienceisland.com {
    handle /api/v1/account* { reverse_proxy platform-account:8001 }
    handle /api/v1/assignments* { reverse_proxy platform-assignment:8001 }
    handle /api/v1/groups* { reverse_proxy platform-group:8001 }
    handle /api/v1/mapper* { reverse_proxy mapper-backend:8088 }
    handle /health { respond "Health OK" 200 }
}
```

**Key Points**:
- All services on port 8001 except mapper-backend (8088)
- WebSocket headers required for Keycloak
- Path-based routing for API gateway

## Local Dev (`local.Caddyfile`)

**Location**: `si-infrastructure/src/gcp/compute/local.Caddyfile`

```caddy
:80, :443 {
    tls internal
    
    @platform { host platform.* }
    @mapper { host mapper.* }
    @keycloak { host login.* }
    @website { host scienceisland.* }
    
    handle @platform { reverse_proxy platform-client:3000 }
    handle @mapper { reverse_proxy mapper-frontend:3000 }
    handle @keycloak { reverse_proxy keycloak:8080 }
    handle @website { reverse_proxy website:80 }
}
```

**Differences**:
- `tls internal` uses self-signed certs
- Wildcard subdomain matching

## Auth Service (`si-auth-service`)

**Location**: `si-auth-service/caddy/Caddyfile`

```caddy
{
    admin off
    auto_https disable_redirects
}

http://{$SERVER_NAME}, https://{$SERVER_NAME} {
    encode gzip zstd
    reverse_proxy keycloak:8080
}
```

**Docker Integration**:
```yaml
keycloak-proxy:
  build: ./caddy
  environment:
    SERVER_NAME: ${SERVER_NAME:-localhost}
  volumes:
    - caddy-data:/data
  ports:
    - 80:80
    - 443:443
```

## Deployment

### Production
Deployed via Pulumi:
```typescript
const caddyFileContents = fs.readFileSync("./prod.Caddyfile", "utf8");
// Templated into startup script → written to /opt/app/Caddyfile
```

Changes require `pulumi up` which recreates the VM.

### Local
```bash
cd si-auth-service
docker compose up -d --build
```

## Service Discovery

Services communicate via Docker DNS:
```
caddy → http://keycloak:8080
caddy → http://platform-client:3000
```

All services must be on the same Docker network.

