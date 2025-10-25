---
sidebar_position: 3
description: How to modify Caddy configurations.
---

# Working with Caddyfiles

## Syntax Basics

```caddy
# Domain block
domain.com {
    reverse_proxy backend:8001
}

# Path-based routing
api.domain.com {
    handle /api/v1/users* {
        reverse_proxy user-service:8001
    }
}

# Named matchers
@api {
    path /api/*
    method GET POST
}
handle @api {
    reverse_proxy backend:8001
}
```

## Adding a New Service

### 1. Add to API Gateway

Edit `prod.Caddyfile`:

```caddy
api.scienceisland.com {
    # Add your new service
    handle /api/v1/notifications* {
        reverse_proxy platform-notification:8001
    }
}
```

### 2. Deploy

```bash
cd si-infrastructure/src/gcp/compute
pulumi up
```

This recreates the VM with the new config.

## Adding a New Subdomain

### 1. Update Caddyfile

```caddy
monitoring.scienceisland.com {
    reverse_proxy grafana:3000
}
```

### 2. Update DNS

Add A record: `monitoring.scienceisland.com` → `<instance-ip>`

> **Note**: To add the A record, contact Bill (CTO) who can work with the domain provider to configure the DNS settings. If this is your first time setting up a subdomain, don't hesitate to ask for guidance on the DNS configuration process.

### 3. Deploy

```bash
pulumi up
```

Caddy auto-provisions SSL certificates.

## Common Modifications

### Add Security Headers

```caddy
platform.scienceisland.com {
    header {
        X-Frame-Options "SAMEORIGIN"
        X-Content-Type-Options "nosniff"
    }
    reverse_proxy platform-client:3000
}
```

### Enable Compression

```caddy
domain.com {
    encode gzip zstd
    reverse_proxy backend:8001
}
```

### Increase Timeout

```caddy
reverse_proxy backend:8001 {
    timeout 5m
}
```

### Add CORS Headers

```caddy
handle /api/* {
    header Access-Control-Allow-Origin "*"
    
    @options method OPTIONS
    handle @options { respond 204 }
    
    reverse_proxy backend:8001
}
```

## Testing

### Validate Syntax

```bash
docker run --rm -v $(pwd)/prod.Caddyfile:/etc/caddy/Caddyfile caddy:2 caddy validate --config /etc/caddy/Caddyfile
```

### Check Logs

```bash
docker compose logs -f caddy
```

### Test Routes

```bash
curl https://api.scienceisland.com/health
curl -I https://platform.scienceisland.com
```

## Best Practices

1. **Specific paths first**: More specific `handle` blocks before general ones
   ```caddy
   handle /api/v1/users/me { ... }
   handle /api/v1/users/* { ... }
   ```

2. **Validate before deploying**: `caddy validate --config Caddyfile`

3. **Add comments**: Explain non-standard configs
   ```caddy
   # Mapper backend uses port 8088 (Go default)
   handle /api/v1/mapper* { reverse_proxy mapper-backend:8088 }
   ```

4. **Test locally**: Use `local.Caddyfile` with Docker Compose first

