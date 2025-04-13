---
sidebar_position: 2
---

# Teacher Portal (Platform)

## Folder Structure

| File/Folder                  | Description                                                                                     |
| ---------------------------- | ----------------------------------------------------------------------------------------------- |
| `.github/`                   | GitHub Actions workflows for CI/CD pipelines.                                                   |
| `client/`                    | Teacher Portal's frontend code.                                                                 |
| `database/`                  | Scripts to initialise a database instance for the Teacher Portal.                               |
| `helm/`                      | Helm charts for deploying the Teacher Portal and related services to Kubernetes.                |
| `prototypes/`                | A previous team's UI prototypes for the Teacher Portal.                                         |
| `resources/`                 | A previous team's sprint reports and related documentation.                                     |
| `server/`                    | Teacher Portal's backend code.                                                                  |
| `.gitignore`                 | Specifies files that are ignored and untracked by Git.                                          |
| `CHANGELOG.md`               | A previous teams's commit history. Contains information on feature additions and bug fixes.     |
| `docker-compose.yml`         | Docker Compose configuration for running the Teacher Portal locally in containers.              |
| `openapi.yml`                | Teacher Portal's API specifications. Uses the OpenAPI specification standard.                   |
| `README.md`                  | Documentation for setting up and running the Teacher Portal locally or on a server. A lot of this documentation is now outdated. |

---

## Running the Teacher Portal Locally

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop)

### Instructions

1. Install and set up Docker Desktop.

2. Open Docker Desktop.

3. In a terminal, navigate to the repository's directory:

```shell
cd [folder directory]\Platform
```

4. Run Docker Compose:

```shell
docker compose build --pull --no-cache
```

5. Run:

```shell
docker compose up -d
```

> `-d` detached mode is optional

6. Once the containers are up and running, go to your web browser and type in:

```txt
locahost:3000
```

7. You should now be looking at the Teacher Portal's Home page.

## Accessing the Local Database

1. Using your MySQL client of choice (I would recommend [DBeaver](https://dbeaver.io/) or [Beekeeper Studio](https://www.beekeeperstudio.io/) depending on your needs), connect to the local database using the following details:

	- **Server Host/Hostname:** localhost
	- **Port:** Value of the *ports* key in the science_island_db service in the route folder's docker-compose.yml file
	- **Username:** Value of the *MYSQL_USER* key in the science_island_db service in the route folder's docker-compose.yml file
	- **Password:** Value of the *MYSQL_PASSWORD* key in the science_island_db service in the route folder's docker-compose.yml file
