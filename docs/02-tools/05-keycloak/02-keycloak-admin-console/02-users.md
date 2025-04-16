---
sidebar_position: 2
description: Understanding Users.
---

# Users
Users are exactly what you think they are: users of your organizations applications. Users are dependent on a realm, so creating a user in one realm won't create a matching user in another.

To see all the users in your current realm, select the *User* option on the sidebar, under the *Manage* section. On this page, you should be able to view/search all users within the realm.

## Creating a User
From the *User* page, you should be able to find the *Add User* button. This will take you to a page that prompts you for the following information:
| Field     | Description |
| --------- | ----------- |
| `Username`  | Defines the username associated with the user. Used for internal referencing. |
| `Email`     | Associates an email with the user. |
| `First/Last Name` | Identifying information about the user. Handy for Teachers to identify students. |
| `Required user actions` | A series of actions required by the user when they first login. Includes examples such as *Update Password* or *Verify Email*. |
| `Email verified` | A toggle that dictates if a users email is automatically considered verified. KeyCloak can be configured to restrict access to users with unverified emails. |
| `Groups` | Defines the groups the user is in. |
