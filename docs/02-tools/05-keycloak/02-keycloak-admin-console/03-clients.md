---
sidebar_position: 1
---

# Clients
Clients are applications within your organization. Often, a client will want a user to be authenticated, which is where KeyCloak comes in as an identity and access management solution. In the case of Science Island, there are presently three applications (hence three Clients): *The Game and Website*, *The Teachers Portal* and the *The Curriculum Mapper*.

## Creating a Client
Navigate to the *Client* option on the side bar, underneath *Manage*. Here you should see a list of clients. Ignore these for now and select the *Create client* button above the list. To create a client, we first have to define some general settings and configurations.

#### General Settings
These settings are primarily used to identify the client, both by internal systems and administrators.
| Field | Description |
| ----- | ----------- |
| `Client type` | Specifies the authentication protocol the client uses. KeyCloak provides both OpenID Connect and SAML options. This guide assumes the use of OpenID Connect. |
| `Client ID` | The name of the client, registered with the identity provider and used for internal reference. |
| `Name` | The display name of the client, useful for clarity. | 
| `Description` | A description of the client, useful for clarity. | 
| `Always display in UI` | A toggle for displaying the client in the users account page. If toggled off, the client will only appear if the user has an active session with the client. | 

#### Capability config
These settings define the authentication protocols of the client, and if the client needs to include specific authorization rules. These settings will only appear if the `Client type` was set to *OpenID Connect*.
| Field | Description |
| ----- | ----------- |
| `Client authentication` | A toggle that defines the client as `Public` (off) or `Confidential` (on). |
| `Authorization` | Enables the use of KeyCloak's Authorization Services (*Role Based Access Control*, *permission evaluation*, etc). |
| `Authentication flow` |  Defines the [OIDC Auth Flow](https://www.keycloak.org/docs/latest/server_admin/index.html#con-oidc-auth-flows_server_administration_guide) of the client. |

#### Login Settings
These settings are used to link the actual application to the client currently being created. It defines where users will be coming from when they need to use KeyCloak's authentication, and where users will go once they've been authenticated.
| Field | Description |
| ----- | ----------- |
| `Root URL` | The base URL of the app. Only use if KeyCloak has configured any relative URLs. This value will be prepended to them. |
| `Home URL` | The default URL used to redirect or link back to the client. **NOT** the URL that KeyCloak sends authentication responses to. |
| `Valid redirect URIs` | Valid URI pattern(s) a browser can redirect to after a successful login. If different logins direct to different pages, a wildcard (*) can be used. |
| `Valid post logout redirect URIs` | Valid URI pattern(s) a browser can redirect to after a successful logout. Same wildcard rules apply. | 
| `Web origins` | The URL of the application. Or, where KeyCloak is expecting a user to come from. |