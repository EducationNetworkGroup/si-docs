---
sidebar_position: 1
description: Local deployment for the ScienceIslandWebsite repository.
---

# Science Island Website (ScienceIslandWebsite)

The `Science Island Website` (also known as the `Main Website` or `Sales Website`) is the customer-facing application that advertises the Science Island product to potential users. This website also hosts the `Science Island Game`, which can be accessed with valid login credentials.

## Deployments

### Live Deployment

You can access the live Science Island Website at [scienceisland.com](https://scienceisland.com).

### Local Deployment

Run the following command to run the deployment locally.

```sh
docker compose up -d --build
```

See the `README.md` within the repository for sample credentials you can use to log into the application.

## Navigating the Repository

### Folder Structure

| File/Folder                  | Description                                                                                     |
| ---------------------------- | ----------------------------------------------------------------------------------------------- |
| `.github/`                   | Contains GitHub Actions workflows for CI/CD pipelines.                                         |
| `Unity/`                     | Contains Unity project files, including assets and build configurations for the Science Island game. |
| `Website/`                   | Main website folder containing the frontend and backend code.                                  |
| `helm/` (obsolete)           | Helm charts for deploying the website and related services to Kubernetes.                      |
| `html/`                      | Additional HTML files for the Unity WebGL build.                                               |
| `scripts/`                   | Utility scripts for deployment, testing, or setup.                                             |
| `Dockerfile`                 | Dockerfile for building the project container image.                                           |
| `docker-compose.yml`         | Docker Compose configuration for running the project locally in containers.                    |
| `local.env`                  | KeyCloak configuration settings for Local Deployment                                           |
| `production.env`             | KeyCloak configuration settings for Live Deployment                                            |

> Helm is obsolete now as the live deployment was drastically simplified in the migration from AWS to GCP in 2025. Kubernetes was removed from the project in favour of a simple VM setup.

### The Game / `Unity`

The unity project for the `Science Island Game` can be found inside this folder under `unity/`. The game is considered complete, so changes to these files is unlikely. However exploration of the C# code may be required when attempting to understand interactions between the game, the UI and the database.

> Note: The UI for the game is made using AngularJS in the `Website` folder and is not built into the Unity Project itself.

### The Website / `Website`

This folder contains the assets and files related to the functionality of the `Main Website`, the launching of the `Sience Island Game` and the control of the games UI. The most important folders to understand are:

#### Database / `database`

This folder contains a clone of the database schema used for the entire project. The schema found in this file will be used during Local Deployment. For Live Deployment, the schema found in the `Platform` repo will be used. Its highly encouraged to ensure that the schema found in this folder stays up-to-date with the one found in the `Platform` repo.

#### Site / `site`

This folder contains everything else important to the `Main Website / Game`. The site and game UI uses AngularJS (not to be confused with Angular, which is the successor to AngularJS after work was discontinued on it in 2022). A summary of the files and folders is included below.

| File/Folder                  | Description                                                                                     |
| ---------------------------- | ----------------------------------------------------------------------------------------------- |
| `Build/`                     | Contains the build for the `Science Island Game`. In the event any changes are made to the game in `/Unity/unity`, a new build should replace the one found here. |
| `assets/`                    | Assets used in the `Main Website` and in the UI for the game.                                   |
| `includes/`                  | PHP/JS files used by the game to handle UI and make calls to the database.                      |
| `plugins/`                   | Supporting files that handle some of the more complex UI elements in the game.                  |
| `press/`                     | Press assets for use in currently unaccessible/no longer needed website pages.                  |
| `vendor/`                    | Supporting files and packages for HTTP, PHP and AWS functionalities. Some of these files are no longer relevant to the project. |
| `webpages/`                  | The webpages for the `Main Website`.                                                            |
| Loose Files                   | The loose files found in `/Website/site/` are a mix of parent pages (`app.js`, `index.html`, `main.php`), login infrastructure files (`keycloak-config.php`, `check-db.php`) and database helper files (all `return-x.php` files, `user-assignments.php`, `assignment.php`)                                       |

## Game Concepts

| Concept                      | Description                                                                                     |
| ---------------------------- | ----------------------------------------------------------------------------------------------- |
| `Realms`                     | The `Science Island Game` consists of a single open-world game space divided into `Realms`. When a player enters a `Realm`, UI elements denoting the realm name will display on the top of the screen. On the bottom of the screen, buttons for `Assignments`, `Quests` and `Rides` will appear. |
| `Quests`                     | Also referred to as `Questions`, a `Quest` is a collections of `Activities` related to a single topic (e.g. Fire Safety or Light Refraction). Each `Realm` has unique `Quests`. |
| `Activities`                 | An `Activity` is a peice of content that a player can complete to earn `Tokens`. `Activities` take on several forms: `Video`, `Book`, `Game`, `Song` and `Quiz`. |
| `Tokens`                     | `Tokens` are awarded to players upon the completion of an `Activity`, and can be used to purchase upgrades to Science Island, slowly restoring it to its former glory. |
| `Assignments`                | A custom collection of `Activities` assigned by Teacher's via the `Teacher's Portal`. |
| `Rides`                      | Unlockable attractions in Science Island that can be purchased using `Tokens`. |
