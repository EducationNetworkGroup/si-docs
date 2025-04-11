---
sidebar_position: 1
---

# Science Island Website

## Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop)
- [Node.js](https://nodejs.org/)
- [MySQL](https://dev.mysql.com/downloads/installer/)

## Folder Structure

| File/Folder                  | Description                                                                                     |
| ---------------------------- | ----------------------------------------------------------------------------------------------- |
| `.github/`                   | Contains GitHub Actions workflows for CI/CD pipelines.                                         |
| `db-data/`                   | Contains database files for local MySQL setup.                                                 |
| `helm/`                      | Helm charts for deploying the website and related services to Kubernetes.                      |
| `html/`                      | Additional HTML files for the Unity WebGL build.                                               |
| `keycloak-deployment/`       | Configuration files for Keycloak deployment (if used for authentication).                      |
| `readmeImages/`              | Images used in the README documentation.                                                       |
| `resources/`                 | Additional resources or configuration files for the project (Contains previous team's sprint reports|
| `scripts/`                   | Utility scripts for deployment, testing, or setup.                                             |
| `Unity/`                     | Contains Unity project files, including assets and build configurations for the Science Island game. |
| `Website/`                   | Main website folder containing the frontend and backend code.
| `docker-compose.yml`         | Docker Compose configuration for running the project locally in containers.                    |
| `Dockerfile`                 | Dockerfile for building the project container image.                                           |
| `README.md`                  | Documentation for setting up and running the project locally or on a server.                   |
| `ToStartDocker.txt`          | Instructions for starting the project using Docker.                                            |
| `ScienceIslandKeyPair.pem`   | Key pair for secure access to AWS or other services.                                           |
| `appspec.yml`                | AWS CodeDeploy configuration for deploying the project to an EC2 instance.                     |

---  

## Local Development Without using XAMPP

Navigate to the Science Island Website Directory
 
```shell
cd ScienceIslandWebsite
```

Run Docker Compose

```shell
$ docker compose build --pull --no-cache
```

Run

```shell
$ docker compose up -d
```

> `-d` detached mode is optional

Once it's running, go to your web browser and type in

```txt
locahost:8000
```

and the Science Island Website and Game should be running locally.

## Accessing Science Island Database usiing phpMyAdmin

1. Start Apache and MySQL
2. Navigate to
```txt
http://localhost/dashboard/
```
3.Click on phpMyAdmin
4.Click on databases tab
5.Create a database name science_island with a collation type "utf_general_ci"
6.Navigate to import tab, selecct the "science_island.sql" (ScienceIslandWebsite/Website/database/scienceisland.sql) database script, ensure the character is set to utf-8 then hit import
7.A new science_island database will appear on the left

