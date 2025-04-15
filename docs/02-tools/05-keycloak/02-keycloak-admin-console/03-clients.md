---
sidebar_position: 1
---

# Clients
Clients are applications within your organization. Often, a client will want a user to be authenticated, which is where KeyCloak comes in as an identity and access management solution. 

## Creating a Client
Navigate to the *Client* option on the side bar, underneath *Manage*. Here you should see a list of clients. Ignore these for now and select the *Create client* button above the list. To create a client, we first have to define some general settings and configurations.
#### General Settings
| Field | Description |
| ----- | ----------- |
| `Client type` | Specifies the authentication protocol the client uses. KeyCloak provides both OpenID Connect and SAML options. This guide assumes the use of OpenID Connect. |
| `Client ID` | The name of the client, registered with the identity provider and used for internal reference. |
| `Name` | The display name of the client, useful for clarity. | 
| `Description` | A description of the client, useful for clarity. | 
| `Always display in UI` | A toggle for displaying the client in the users account page. If toggled off, the client will only appear if the user has an active session with the client. | 

#### Capability config
| Field | Description |
| ----- | ----------- |
| `Client authentication` | A toggle that defines the client as `Public` (off) or `Confidential` (on). |
| `Authorization` | Enables the use of KeyCloak's Authorization Services (*Role Based Access Control*, *permission evaluation*, etc). |
| `Authentication flow` |  Defines the [OIDC Auth Flow](https://www.keycloak.org/docs/latest/server_admin/index.html#con-oidc-auth-flows_server_administration_guide) of the client. |

#### Login Settings
| Field | Description |
| ----- | ----------- |
| `Root URL` | The base URL of the app. Only use if KeyCloak has configured any relative URLs. This value will be prepended to them. |
| `Home URL` | The default URL used to redirect or link back to the client. **NOT** the URL that KeyCloak sends authentication responses to. |
| `Valid redirect URIs` | Valid URI pattern(s) a browser can redirect to after a successful login. If different logins direct to different pages, a wildcard (*) can be used. |
| `Valid post logout redirect URIs` | Valid URI pattern(s) a browser can redirect to after a successful logout. Same wildcard rules apply. | 
| `Web origins` | The URL of the application. Or, where KeyCloak is expecting a user to come from. |