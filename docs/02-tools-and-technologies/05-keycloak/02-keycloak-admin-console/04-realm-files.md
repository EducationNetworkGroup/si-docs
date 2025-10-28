---
sidebar_position: 4
description: Understanding Realm Files.
---

# Realm Files

This document provides an overview of the structure of a `<realm-name>.json`  file, which is a file containing configuration settings for a single realm.

The recommended way to utilize this document is to find an instance of what you want to understand in the example file, then navigate to the corresponding section to see how it is implemented. The example file aims to cover some of the main configurations of critical Keycloak elements.

---

## Example File

``` json
{
{
  "realm": "myrealm",
  "enabled": true,
  "displayName": "My Wonderful Realm",
  "registrationAllowed": true,
  "resetPasswordAllowed": true,
  "editUsernameAllowed": false,
  "emailTheme": "base",
  "loginTheme": "Keycloak",

  "roles": {
    "realm": [
        {
        "name": "teacher",
        "description": "Teacher role"
        },
        {
        "name": "student",
        "description": "Student role"
        }
    ],
    "client": {
      "my-client": [
        {
          "name": "read-data"
        },
        {
          "name": "write-data"
        }
      ]
    }
  },

  "groups": [
    {
      "name": "group1",
      "path": "/group1",
      "realmRoles": ["user"]
    }
  ],

  "clients": [
    {
      "clientId": "my-client",
      "secret": "super-secret",
      "protocol": "openid-connect",
      "enabled": true,
      "publicClient": false,
      "redirectUris": ["https://myapp.com/*"],
      "webOrigins": ["+"],
      "directAccessGrantsEnabled": false,
      "serviceAccountsEnabled": true,
      "standardFlowEnabled": true,
      "clientAuthenticatorType": "client-secret"
    }
  ]
}

```

---

## Realm Level Settings

Think of a realm like an isolated project, which defines its own users, clients, roles etc. At the top of the Realm file, we define broad settings that apply to all components within the realm. They can be configured manually under the "Realm Settings" menu in the Admin Console.

``` json
{
  "realm": "myrealm",
  "enabled": true,
  "displayName": "My Custom Realm",
  "registrationAllowed": true,
  "resetPasswordAllowed": true,
  "loginTheme": "Keycloak",
  ...
}
```

| Key                    | Description                                                 |
| ---------------------- | ----------------------------------------------------------- |
| `realm`                | The name of our realm. Used for internal reference.         |
| `enabled`              | Defines if our realm is enabled or disabled.                |
| `displayName`          | The display name of our realm, used for display in browser. |
| `registrationAllowed`  | Allows a user to register a login if enabled.               |
| `resetPasswordAllowed` | Allows a user with a login to request a password reset.     |
| `loginTheme`           | Sets the 'theme' of the login page.                         |

---

## Roles

Roles are used to define access rights and permissions, controlling what a user is allowed to do once they are authenticated.

### Realm Roles

Realm roles can be assigned to any user or group inside the realm.

``` json
"roles": {
  "realm": [
    {
      "name": "teacher",
      "description": "Teacher role"
    },
    {
      "name": "student",
      "description": "Student role"
    }
  ],
  ...
}
```

| Key           | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| `name`        | The name of the role, used for internal reference.            |
| `description` | The description of the role, useful for communicating intent. |

### Client Roles

Client roles are dedicated to a specific client, and are useful for 'fine-grained' authorization inside a single application.

``` json
"client": {
    "my-client": [
      {
        "name": "read-data"
      },
      {
        "name": "write-data"
      }
    ]
  }
```

| Key         | Description                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------ |
| `my-client` | The name of our client as defined when the client is created. Replace this with a suitable name. |
| `name`      | The name of the role, used for internal reference.                                               |

---

## Groups

Groups are collections of users, and can be assigned roles to broadly apply rules across all members users.

``` json
"groups": [
  {
    "name": "group1",
    "path": "/group1",
    "realmRoles": ["user"]
  }
]
```

| Key          | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| `name`       | The name of the group, used for internal reference.          |
| `path`       | Contains the path to the group, used for internal reference. |
| `realmRoles` | Contains one or more realm roles as defined above.           |

---

## Clients

Client are applications or services that interact with Keycloak for authentication and authorization (e.g. Science Island's Teacher's Portal or Curriculum Mapper).

``` json
"clients": [
  {
    "clientId": "my-client",
    "secret": "super-secret",
    "protocol": "openid-connect",
    "enabled": true,
    "publicClient": false,
    "redirectUris": ["https://myapp.com/*"],
    "webOrigins": ["+"],
    "directAccessGrantsEnabled": false,
    "serviceAccountsEnabled": true,
    "standardFlowEnabled": true,
    "clientAuthenticatorType": "client-secret"
  }
]
```

| Key                                                                         | Description                                                                                                                                         |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `clientId`                                                                  | The name of the client, used for internal reference.                                                                                                |
| `secret`                                                                    | A password used by the client to authenticate itself to the Keycloak Server.                                                                        |
| `protocol`                                                                  | Sets client type to either `OpenID Connect` or `SAML`. OpenID Connect is what Science Island is using, and allows the client to verify the identity of the End-User based on authorization settings. |
| `enabled`                                                                   | Defines if the client is enabled or disabled.                                                                                                       |
| `publicClient`                                                              | Indicates if client is `Public` or `Confidential`. Public clients (commonly SPAs or mobile apps) don't require a `secret`, where as confidential clients (server-side apps) do. |
| `redirctUris`                                                               | Uniform Resource Identifier. A list of redirect URIs which Keycloak can send send users after an authenticated login.                               |
| `webOrigins`                                                                | The URL Keycloak is expecting to receive an authentication request from. The "+" denotes that a request is allowed from anywhere (not recommended). |
| `directAccessGrantsEnabled`, `serviceAccountsEnabled`, `standardFlowEnabled`| Types of OIDC authentication flows used by the client.                                                                                              |
| `clientAuthenticatorType`                                                   | The type of authenticator used for authentication of this client against the Keycloak Server.                                                       |

---
