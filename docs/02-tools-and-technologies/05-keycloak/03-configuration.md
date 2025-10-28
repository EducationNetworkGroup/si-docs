---
sidebar_position: 3
description: Science Island's Keycloak configuration.
---

# Configuration

This document outlines Science Island's specific Keycloak configuration, including realm settings, security policies, and client setup. The configuration is managed through the `science-island.json` realm file.

## Realm Overview

Science Island uses a dedicated realm with the following core settings:

| Setting            | Value                | Description                                  |
| ------------------ | -------------------- | -------------------------------------------- |
| `Realm name`       | science-island       | Internal identifier for the realm.           |
| `Display name`     | Science Island Login | User-facing name displayed on login screens. |
| `Require SSL`      | External requests    | SSL required for external requests.          |
| `Keycloak version` | 26.1.4               | The version of Keycloak currently deployed.  |

---

## Login Configuration

User registration is not currently handled through Keycloak. Student registration occurs through the main Science Island website, while all other users (teachers, administrators, etc.) are preconfigured. Additionally, email settings have not been configured for the realm, so features that depend on email functionality have been disabled as they are not part of the current authentication workflow.

### Login Screen Customization

| Setting             | Value | Description                               |
| ------------------- | ----- | ----------------------------------------- |
| `User registration` | false | Keycloak user registration is disabled.   |
| `Forgot password`   | false | Password reset functionality is disabled. |
| `Remember me`       | false | Remember me functionality is disabled.    |

### Email Settings

| Setting             | Value | Description                                                 |
| ------------------- | ----- | ----------------------------------------------------------- |
| `Email as username` | true  | Email addresses are used as usernames during registration.  |
| `Login with email`  | true  | Users can log in using their email address.                 |
| `Duplicate emails`  | false | Each email address can only be associated with one account. |
| `Verify email`      | false | Email verification is not required upon registration.       |

### User Info Settings

| Setting         | Value | Description                                         |
| --------------- | ----- | --------------------------------------------------- |
| `Edit username` | false | Usernames cannot be changed after account creation. |

---

## Client Applications

Science Island uses three client applications that integrate with Keycloak for authentication. Each client represents a production application.

| Application              | Client ID                  | Name                     | Web origins                          | Valid redirect URIs                    |
| ------------------------ | -------------------------- | ------------------------ | ------------------------------------ | -------------------------------------- |
| `Science Island Website` | scienceisland.com          | Science Island Client    | `https://scienceisland.com`          | `https://scienceisland.com/*`          |
| `Teacher's Portal`       | platform.scienceisland.com | Teachers Portal Client   | `https://platform.scienceisland.com` | `https://platform.scienceisland.com/*` |
| `Curriculum Mapper`      | mapper.scienceisland.com   | Curriculum Mapper Client | `https://mapper.scienceisland.com`   | `https://mapper.scienceisland.com/*`   |

### Authentication Configuration

All Science Island clients share the following authentication settings:

| Setting                 | Value          | Description                                                   |
| ----------------------- | -------------- | ------------------------------------------------------------- |
| `Client type`           | OpenID Connect | Authentication protocol used by all clients.                  |
| `Client authentication` | Public         | Clients do not require a secret for authentication.           |
| `Standard flow`         | Enabled        | Browser-based authentication flow (authorization code flow).  |
| `Direct access grants`  | Enabled        | Allows username/password authentication via direct API calls. |

---

## Roles

Roles are not currently being utilized in Keycloak. Science Island has a separate role system independent of Keycloak, which is what is currently being used for authorization and access control.

---

## Email Configuration

Email settings are not currently configured for the Science Island realm. Once configured, email functionality will enable features such as email verification and password resets.

To set up email, refer to the [Realms](02-keycloak-admin-console/01-realms.md#email) documentation for detailed instructions on connecting to an SMTP server.

---

## Deployment

### Local Development

The three Science Island applications use the `si-auth-service` Keycloak image for local development. Since this image is configured with a production-ready realm file, each service imports its own realm file specifically for local development.

**Local Realm File Locations:**

| Application              | Repository            | Realm File Location |
| ------------------------ | --------------------- | ------------------- |
| `Science Island Website` | ScienceIslandWebsite  | Website/local_dev   |
| `The Teacher's Portal`   | Platform              | client/local_dev    |
| `The Curriculum Mapper`  | Mapping-System-2022S2 | src/keycloak        |

### Live Environment

Keycloak's database currently resides on the GCP Virtual Machine. Each time the VM restarts, the database is recreated and the `science-island.json` realm file is redeployed from scratch. This means *any user accounts created after the initial deployment are lost upon restart*.

Ideally the Keycloak database should be exist in a persistent data storage solution. With persistent storage in place, the realm file would only need to be imported during initial setup, and ongoing realm configuration changes could be made directly through the Keycloak Admin Console without risk of data loss.
