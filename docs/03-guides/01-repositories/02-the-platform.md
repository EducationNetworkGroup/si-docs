---
sidebar_position: 2
description: Introductory information for the Platform repository.
---

# Teacher's Portal (Platform)

The `Teacher's Portal` is the application which allows for Teachers and Parents to create `Assignments` with multiple `Activities`, give those assignments to a	`Group` of Students, and then monitor the progress made by the Students. The Teacher's Portal has dashboards to view progress, and the ability to generate Excel and PDF reports showing progress (though this functionality is currently broken).

The [Capstone Presentation](https://vimeo.com/651765631?autoplay=1&muted=1&stream_id=Y2xpcHN8MjE5Nzk3MDd8aWQ6ZGVzY3xbXQ%3D%3D&turnstile=0.boi2zZybnkDcfCycVdubHUvcKUW6Lq-HrQY0-Zvqor0FeFKsgW208Tcn8Gbua73skhfe0YyeAWzkbo7Jqcf5UHow22mFyGHGxaWNJQkgGwm32D1WTPfdEa-2TAyk3pLsI8voc1fmJJ6tz8yzP9_nqSae3MoHoCHPcvIOLGQEauXfFVkhmd2vlZiFCA3jFklp7fZfLu6rOIEKyh8vYRR4jd3sDZwqv8joT9AoO6ICYMjZbXzkgYRhS2UWNJOLYmQpNVjlkRHZ38SMRc3wvDYbsHwZcj0RwspU5DkdXIWGx7ArOYD3tE4azY7DDwlfZbXv3Ccw354nsBnbGDo4yyX4MTKehUI2KCh2f3T_HCcfNSPMu_NarRvetOlWhVqQz-ua7w4rnQNEbfVQFRbk1I4Pk8K6KYiof-hBZle3zthp42jxLLAwp9uV2gPPHBaUmjHwAC8Q1tdxfMVQUlVDP3J60hmF38CcgqfB9E-uK3aFU0xXNsDbRb-eRWaAtVK6SuPTKVYerFLVRiduKAilCWt51ddSgBH_fJCbn-Ak56w4UDj1nxxPGEO2c4HAAOe47WQy_u3ulIA-GfWMWzjnKiAHh3CgYDQs79CUr9MdE06rxSZJGJcTL-M5yp8znPYIJpbxKtshueGwdfmcZbbjHC8_JTLvAk_SE-2AaRn6vEpCWW_oP3XT2IXSNAOsMoNe88-w1tgc21jaF9pNwUaXHP3EaxMGWf-7G2KNmzapfgwkkXywnbvNl2JG_8X0QT6SFOsIGTnFF5mNS5DDnrTr5OVq4lmJciJl8yLCZjVmC8PMR4HMg3sLvyieaLjoCNDTJFBT8cn-O45wQuIvNKEczCpj-n5vxMGB5c8sZCNwlj692K8R27ZaRLCZaYQSkC2CucJgX-8vX9pAz0uemZW2vCnyiChHHPBjO0yd2Hp6ACnQxYY.n6ZOl1-Grt3U9XryHuR4aQ.6e45c3c96e21838c0507c47cbf1d3b8b19b6355de41f453e91f6dbd483d2b0e9) from the original development team in 2021 gives a more complete picture of the motivations and functionality of the application.

# Platform Repository

The `Platform` repository contains the fronted and backend services for the Teacher's Portal, as well as the database that is used by all applications within Science Island. 

## Live Deployment

You can access the live Teacher's Portal frontend at [platform.scienceisland.com](https://platform.scienceisland.com).

## Local Deployment

Run the following command to run the deployment locally.

```sh
docker compose up -d --build
```

See the `README.md` within the repository for sample credentials you can use to log into the application.

## Navigating the Repository

### Folder Structure

| File/Folder                  | Description                                                                                     |
| ---------------------------- | ----------------------------------------------------------------------------------------------- |
| `.github/`                   | GitHub Actions workflows for CI/CD pipelines.                                                   |
| `client/`                    | Teacher Portal's frontend code.                                                                 |
| `database/`                  | Scripts to initialise a database instance for the Teacher Portal.                               |
| `helm/` (obsolete)           | Helm charts for deploying the Teacher Portal and related services to Kubernetes.                |
| `scripts/`                    | Helper scripts for CI/CD.                                                                      |
| `server/`                    | Teacher Portal's backend code.                                                                  |
| `docker-compose.yml`         | Docker Compose configuration for running the Teacher Portal locally in containers.              |
| `openapi.yml`                | Teacher Portal's API specifications. Uses the OpenAPI specification standard.                   |

> Helm is obsolete now as the live deployment was drastically simplified in the migration from AWS to GCP in 2025. Kubernetes was removed from the project in favour of a simple VM setup.

### Frontend / `client`

The frontend of the Teacher's Portal is made with React v17.0.2 (October 2022). React has seen at least two major versions since then, but updating the project's version would be a significant task given the number of breaking changes and incompatible dependencies that would be introduced. 

There are tests set up for the React project that don't appear to have been utilized since the initial development work in 2021, as no subsequent team has completed any significant refactors of the frontend. If your team is completing work on updating, fixing, or completing the Teacher's Portal, these will probably be important to investigate.

The `AuthHandler` defined in `App.tsx` is where the current link between Keycloak validation and the user's in the existing database is made. Because the database uses integers for the user ids and Keycloak uses uuids, the users are instead signed-in via their email address here, as this is consistent between both. The password validation is handled by Keycloak, and has therefore been disabled in the Teacher's Portal frontend.

Beyond that, components, pages, and routing are all where you would expect them to be. The project is a bit messy, but you should be able to figure out what things do with a bit of time.

### Backend / `server`

The Teacher's Portal uses a microservices architecture for it's backend, with nine distinct [Go](https://go.dev/) services defined within `server`. 

The endpoints for the services are listed below.

| Service       | Endpoint/s                                                                                                 |
|---------------|------------------------------------------------------------------------------------------------------------|
| account       | `/api/v1/account*`, `/api/v1/register*`, `/api/v1/auth*`, `/api/v1/user*`, `/api/v1/users*`, `/api/v1/me*` |
| assignment    | `/api/v1/assignments*`                                                                                     |
| email         | `/api/v1/email*`                                                                                           |
| group         | `/api/v1/groups*`                                                                                          |
| metrics       | `/api/v1/metrics*`                                                                                         |
| questactivity | `/api/v1/activities*`                                                                                      |
| report        | `/api/v1/report*`                                                                                          |
| result        | `/api/v1/result*`                                                                                          |
| scrapper      | n/a                                                                                                        |

The services are setup by the `/server/services/{service_name}/main.go` files - but these files are pretty boilerplate.

For the functions that each service provides, you'll need to look in the `/server/services/database` folder. The .go files here all import from the `/server/services/database/sql` folder, so you'll need to look at the combination of those to understand / update any functionality. The `server/types` folder is pretty important as well for understanding the structure of each object.

It's probably worth at least one person on your team getting familiar with Go, since there's a bit of an initial learning curve. 

### Database / `database`

The `Platform` repo is home to the database schema used by all applications within Science Island. You should definitely look into moving the database files into their own repository, since they are used by the `Main Website / Game` and `Curriculum Mapper` as well.

The ERD file is made with [drawio](https://www.drawio.com/doc/faq/google-drive-diagrams), and can be opened and edited through their desktop application or web browser. This file should be kept up-to-date to make life easier on everyone trying to understand the database.

The `password-has-generator` is a simple script that allows you to generate hashed passwords with the bcrypt algorithm. This can be used if you want to extend the dummy-data with new users, since the passwords will need to be hashed before they are stored.

There is a comprehensive breakdown of the database in the `database` section of these docs.
