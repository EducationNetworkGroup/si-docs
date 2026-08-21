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

User registration is still not handled through Keycloak's native registration form. Standard sign-up (students, teachers) occurs through the Science Island website and Teacher's Portal, which create the corresponding user in Keycloak via the backend. The exception is **Google SSO** (see [Identity Providers](#identity-providers) below), where Keycloak just-in-time provisions a new user on first Google login.

Email-dependent features are now configured and in use: the forgotten password flow is implemented and working. Its SMTP delivery needed patching early on, and the provider was eventually replaced outright (Gmail → [Brevo](https://www.brevo.com/)) after Swinburne's mail filter kept flagging the reset emails as spam.

### Login Screen Customization

| Setting             | Value | Description                                                                       |
| ------------------- | ----- | ----------------------------------------------------------------------------------- |
| `User registration` | false | Keycloak's built-in registration form is disabled; sign-up is handled by the apps. |
| `Forgot password`   | true  | Enabled. Password reset emails are delivered via Brevo SMTP.                       |
| `Remember me`       | false | Remember me functionality is disabled.                                             |

### Email Settings

| Setting             | Value | Description                                                 |
| ------------------- | ----- | ----------------------------------------------------------- |
| `Email as username` | true  | Email addresses are used as usernames during registration.  |
| `Login with email`  | true  | Users can log in using their email address.                 |
| `Duplicate emails`  | false | Each email address can only be associated with one account. |
| `Verify email`      | false | Email verification is not required upon registration.       |

> **Known issue:** because duplicate emails are disallowed, the school sign-up flow has been found to fail intermittently in the live environment, in part due to duplicate-email validation failures in Keycloak — flagged for further architectural review. Google SSO's account-linking (matching a Google login to an existing user by email) has since been demonstrated working without hitting this, but it isn't clear whether the underlying edge case was ever fully resolved.

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

## Identity Providers

The `science-island` realm has a **Google** identity provider configured under *Identity Providers* in the Admin Console, enabling "Sign in with Google" on the Website and Teacher's Portal login screens (the Curriculum Mapper is excluded). Users signing in with Google are provisioned in Keycloak the same way as a manual sign-up, and are then wired into the RBAC roles below.

Google Client ID/Secret pairs are managed as secrets and injected into the production realm via Pulumi and Caddy (see [si-infrastructure](../../03-guides/01-repositories/06-si-infrastructure.md)).

> **Current limitation:** the Google OAuth consent screen is still in Google's *testing* mode, which restricts sign-in to a manually curated allow-list of test accounts. Until the app passes Google's verification process, only those accounts can use Google SSO in production.

---

## Roles

Keycloak Realm Roles are now the authorization backbone of Science Island, replacing an earlier, informal app-side role handling approach. The following realm roles exist:

| Role            | Access                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `student`       | Science Island Game only.                                                                        |
| `teacher`       | Teacher's Portal and Science Island Game.                                                        |
| `admin-teacher` | Curriculum Mapper, Teacher's Portal, and Science Island Game. Grants Curriculum Mapper access on top of `teacher`. |
| `admin`         | Teacher's Portal (including creating/deleting teacher accounts) and Science Island Game. This is the realm role that implements what internal planning referred to as "School Admin" — envisioned as the entry point for a future school-licensing model, where a school admin sets up the rest of that school's teaching staff. |
| `parent`        | Teacher's Portal (limited view) and Science Island Game.                                         |

> Note: the Keycloak Admin Console shows the role above simply as `admin`, not `school-admin`, despite the "School Admin" naming used when the role was originally planned. There is no separate, higher-privilege "platform admin" role; treat `admin` as the school-level role described here unless you find evidence otherwise.

Role assignment is dynamic: reassigning a user's realm role in the Admin Console (e.g. granting `admin-teacher` to a `teacher` account) immediately changes what that user can access, without any code change required. The `admin` and `parent` roles are no longer selectable during self-service sign-up (only `teacher` is) — those roles must now be assigned by an existing admin.

### Enforcement

Realm roles are enforced by a backend authorization middleware (referred to internally as the "bouncer") that intercepts every API request and validates the caller's role before it reaches the database. Role identifiers are implemented as immutable constants rather than raw strings to avoid typo-based authorization bypasses, and permission maps are deep-copied per role to prevent higher-level permissions from leaking into lower-level roles (a bug that was found and fixed). See the [Platform repository guide](../../03-guides/01-repositories/02-the-platform.md#authorization-and-rbac) for implementation details.

> **Known issue:** role changes made in the Admin Console can take longer than expected to propagate to the live environment (a 10-minute wait was found to be insufficient during testing). Confirm a role change has taken effect before relying on it during a demo.

---

## Email Configuration

SMTP is configured for the realm, currently via [Brevo](https://www.brevo.com/) (migrated from Gmail — see [Login Configuration](#login-configuration) above). This powers the forgotten-password flow. Email verification (`Verify email`) remains disabled.

To review or change the SMTP setup, refer to the [Realms](02-keycloak-admin-console/01-realms.md#email) documentation for a general explanation of the fields involved.

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

Keycloak's PostgreSQL database is backed by a GCP Filestore volume rather than living purely inside the VM. A recurring "users disappear after a production deploy" bug was traced to Pulumi occasionally deleting and recreating this Filestore instance (and, separately, the VM itself) on `pulumi up`, which reset Keycloak to an empty database.

This has since been addressed via fixes in `si-infrastructure`: the Filestore is no longer replaced on every `apply`, and the VM name/boot image are pinned so an update doesn't trigger an unintended VM replacement. Data loss from routine deploys should no longer occur, but the underlying Compute/Filestore configuration is still relatively new and worth double-checking after any infrastructure change.

> **Residual risk:** Keycloak is still running in `start-dev` mode in production. This wasn't the cause of the data-loss bug above (Postgres was always the real datastore), but it remains a production hardening item that should be addressed once the storage configuration has proven stable.
