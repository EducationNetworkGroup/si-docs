---
sidebar_position: 3
description: Understanding Users.
---

# Users

Users are exactly what you think they are: users of your organization's applications. Users are dependent on a realm, so creating a user in one realm won't create a matching user in another.

To see all the users in your current realm, select the *User* option on the sidebar, under the *Manage* section. On this page, you should be able to view / search all users within the realm.

## Creating a User

From the *User* page, you should be able to find the *Add User* button. This will take you to a page that prompts you for the following information:

| Field                   | Description                                                                                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Username`              | Defines the username associated with the user. Used for internal referencing.                                                                                 |
| `Email`                 | Associates an email with the user.                                                                                                                            |
| `First/Last Name`       | Identifying information about the user. Handy for Teachers to identify students.                                                                              |
| `Required user actions` | A series of actions required by the user when they first login. Includes examples such as *Update Password* or *Verify Email*.                                |
| `Email verified`        | A toggle that dictates if a user's email is automatically considered verified. Keycloak can be configured to restrict access to users with unverified emails. |
| `Groups`                | Defines the groups the user is in.                                                                                                                            |

## Sessions

When a user successfully authenticates with Keycloak, a session is created to track their authenticated state. Sessions are particularly useful during development for verifying that authentication is working correctly.

### Viewing User Sessions

Sessions can be accessed in two ways: navigate to the *Users* page, select a user, and click the *Sessions* tab to view that user's sessions, or access the *Sessions* option in the sidebar under *Manage* to see all active sessions across the realm.

In both areas, you can see session information including:

| Field         | Description                                                          |
| ------------- | -------------------------------------------------------------------- |
| `Started`     | When the session was created.                                        |
| `Last Access` | The most recent time the user interacted with the application.       |
| `IP Address`  | The IP address from which the user authenticated.                    |
| `Clients`     | Which client applications the user has accessed during this session. |
