---
sidebar_position: 1
description: Understanding Realms.
---

# Realms

A realm in Keycloak is equivalent to a tenant. Each realm allows an administrator to create isolated groups of applications and users. Each realm has a dedicated Admin Console for use by admins defined inside a respective realm.

Initially, Keycloak includes a single realm, called `master`. Admins in this realm have permissions to manage all other realms within the server instance. As a rule of thumb, you don't want to use the master realm to manage users and applications in your organization. Instead, admins should be defined in their respective realms.

## Creating a Realm

Accessing the *Manage realms* page from the side bar, you should be presented with a list of your current realms. Selecting the *Create realm* button, a menu will appear with fields for realm creation.

| Field           | Description                                                   |
| --------------- | ------------------------------------------------------------- |
| `Realm name`    | Defines the name of the realm. Used for internal referencing. |
| `Enabled`       | A toggle that dictates if the realm is enabled or disabled.   |
| `Resource file` | Optionally, a [Realm file](04-realm-files.md) can be imported here to automatically configure realms settings. Realm files are important for live deployment. Typically, you'll configure a realm in the Admin Console and export the realm file for later use. |

## Realm Settings

Accessible via the *Realm Settings* option in the sidebar.

### SSL Configuration

In the *General* tab. Each realm has an associated SSL Mode which dictates the SSL/HTTP requirements browsers and applications have to meet to interact with the realm. There are 3 options for SSL Mode, selectable in the *Require SSL* dropdown box.

| Option              | Description                                                                   |
| ------------------- | ----------------------------------------------------------------------------- |
| `External requests` | Users can interact with Keycloak so long as they have a private IPv4 address. |
| `None`              | The realm does not require SSL.                                               |
| `All requests`      | The realm requires SSL for all IP addresses.                                  |

### Email

Keycloak may need to send emails to verify users, change passwords, or notify an admin about a server event. This is where SMTP (Simple Mail Transfer Protocol) comes in. SMTP is the industry-standard protocol used for sending emails. By connecting Keycloak to a valid SMTP server (like Gmail, Outlook, or a company mail server), you can enable automated, secure email delivery for your realm.

#### Template

| Field                   | Description                                                                                              |
| ----------------------- | -------------------------------------------------------------------------------------------------------- |
| `From`                  | The email address Keycloak will use as the sender of outgoing emails (e.g. *noreply@scienceisland.com*). |
| `From display name`     | The display name shown for emails sent by Keycloak (e.g. *Science Island Support*).                      |
| `Reply to`              | If a user replies to an email, this is the address that receives the response.                           |
| `Reply to display name` | The display name for the reply-to email.                                                                 |
| `Envelope from`         | The email address used for handling bounced emails (errors like "email not found").                      |

#### Connection & Authentication

| Field                 | Description                                                                                                                  |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `Host`                | The SMTP server address used to send emails (e.g. *smtp.gmail.com* or *smtp.scienceisland.com*).                             |
| `Port`                | The port number used for connecting to the SMTP server. Modern setups often use `465` or (more commonly) `587`.              |
| `Encryption`          | Encryption method for secure communication. `SSL` is required for `Port 465`, and `StartTLS` is required for `Port 587`.     |
| `Authentication`      | A toggle enabling or disabling Keycloak authenticating with the SMTP server. Most SMTP providers require this to be enabled. |
| `Username`            | The SMTP username used for authenticating.                                                                                   |
| `Authentication Type` | Selects what authentication type is used for the SMTP server. Types include `Password` or various `Tokens`.                  |

### Login Page

Keycloak allows several customization options for the login page, which can make it convenient for users who have issues attempting to authenticate with the server.

#### Login Screen Customization

| Field               | Description                                                                                                |
| ------------------- | ---------------------------------------------------------------------------------------------------------- |
| `User registration` | Allows a person to register a user to the system. If disabled, new users can only be created by admins.    |
| `Forgot password`   | Allows the user to recover their account without a password. Requires `Email` configuration above.         |
| `Remember me`       | Allows the user to remain logged in between browser restarts. Does not protect against session expiration. |

#### Email Settings

| Field               | Description                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------- |
| `Email as username` | Treats the email address as the username upon user creation.                                       |
| `Login with email`  | Allows users to login with their email.                                                            |
| `Duplicate emails`  | Allow multiple users to have the same email address. Not recommended.                              |
| `Verify email`      | Requests the user to verify their email after initial login. Requires `Email` configuration above. |

#### User Info Settings

| Field           | Description                                                                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Edit username` | Allows the user to edits their username after account creation. Some systems may require usernames to be static, so be aware before enabling this option. |
