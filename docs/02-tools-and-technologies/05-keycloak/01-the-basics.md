---
sidebar_position: 1
description: Introduction to Keycloak and key terminology.
---

# The Basics

This guide provides an introduction to `Keycloak`, its fundamental concepts/tools, and the role it plays in Science Islands architecture.

## What is Keycloak?

Keycloak is an open-source identity and access management solution designed to provide authentication, authorization and user management for modern applications and services. Keycloak offers features such as Single Sign-On, which allows users to log in once for access across multiple applications. Through the use of an Admin Console and REST APIs, it allows flexible configuration and management of users, roles and permissions.

Before continuing, its highly advised you install [Docker](../03-docker/01-the-basics.md) and set up a [Local Keycloak Server](https://www.Keycloak.org/getting-started/getting-started-docker) as a visual reference.

### How does work Keycloak with your applications?

Keycloak is a separate server that you manage on your network. In the case of Science Island, Keycloak is handled in the *si-auth-service* repository. Applications are configured to point to and be secured by this server. When attempting to log into an application, the browser will redirect the user to the Keycloak authentication server where they enter their credentials in exchange for a token. This token is then read by the application to determine if the user should be allowed access.

## What is Bitnami Keycloak?

`Bitnami Keycloak` is a pre-packaged, ready-to-run distribution of Keycloak. It's designed for ease of deployment across various platforms including virtual machines, cloud services and containers. Developed and maintained by Bitnami, this distribution simplifies the installation and configuration process by bundling all necessary components and dependencies.

## Terminology

| Term                | Definition                                                                                                                                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Authentication`    | The process of identifying and validating a user.                                                                                                                                                             |
| `Authorization`     | The process of granting access to a user.                                                                                                                                                                     |
| `Identity Provider` | A service that can authenticate a user. Keycloak is an identity provider.                                                                                                                                     |
| `User`              | Entities (typically people) that are able to log into the system. Typical associated attributes include username, email, etc. They can be assigned group membership and have specific roles attached to them. |
| `Roles`             | Identify a category of user (*student*, *teacher*, etc). Applications often assign access and permissions to specific roles rather than individual users.                                                     |
| `Clients`           | Entities (typically applications) that request Keycloak to authenticate a user.                                                                                                                               |
| `Realms`            | A realm manages a set of users, roles and groups, and handles user authentication and authorization to clients. Realms are isolated from each other and can only manage the users they control.               |
| `OpenID Connect`    | Authentication protocol that allows clients to verify the identity of users based on an ID Token. Commonly used for Single-Sign On.                                                                           |
