---
sidebar_position: 3
description: Introduction to the Mapping-System repository.
---

# Curriculum Mapper

The Curriculum Mapper (`Mapping-System-2022S2`) is designed to link each *activity* within the Science Island game to official curriculum outcomes of different states / countries (e.g., the [F-10 Curriculum](https://www.australiancurriculum.edu.au/f-10-curriculum/f-10-curriculum-overview/) in Australia). The Curriculum Mapper lets admins manually make these associations and save them in the database. The end goal is that teacher's can plan *assignments* in the Teacher's Portal with specific *activities* that will show that students have achieved the specific outcomes required as part of the curriculum.

This [tutorial video](https://vimeo.com/760916529?turnstile=0.BKf6wOgZu3k7tc5nY3aTXVCw6YewmXz9fieNQKvmMokkI6CRmxoHr4BTUm3GUDek2mt9SZDvVTXAMjGdP81Thu6vdxwfOJhh-A2Emp1dz99UwmGDt0oLT2vx_xhQcSKbePBt4szFK89mNX6_lVYLkRaANEpOKe23WuHW3enqNdCZ8BIxjP6PV349-4K397fqyU_Xyi5QekMdPAkvrdmTfEic9MxkO_XXll919gucJfbSQUA1_a07ykM6alw6C-Sa3sFQReXXCw9oex6RzqGWSHc5c98QOEesETWBH05xUw4fQ8Zzg57etcyF2EfFRLifdc15ZC1Q3UMnXeq_Irpt1dVnCCBl5Vv6sUmPIuygHqTFBjKkr7QWTQKN94T75syi7Yu-IVEmgjRVn9h3DS6VX28Njau0JohCuwburdejg1vBrIv4WJKOeErYPdP_7mTu4jIDHaiOvXURjJUb1nwhreoPDcAnejVgAynAd-W84nmNxUs_yJLXafIs6uZYL4be4sT0bp4iw4BdvC4sa6eYr1mOj6gJjSSEIEPS2oZqEdKQu2pfwbGWEl0VpkYAWhM_thG5ESt0PRaT-kg9GFXGjTPZOOlMzrUjymHOYiJWYfyfve86yGHCPNF9vwtAV5vYlRIuWLjxy5MhAOVn-UvQoNlsQuDTA2IoAlQHb7MJtIsjSUavrmKmm9_s-3puvAnGhGh7kmVQWiVpB8FCrUBNBbxZ7S43i_fMMfbWfUz63emD9_MKUD0cOR0JSBgf60czJ3zpHRH2JFZ-Yc3lb00QG4WXws2ArDW6n_-m6bmI8gUQd9fMKcMrpIMFnwIbdkhs-JpMqQ2FwQRU3mMUGZWmnGVyj6Z5EY277IPouNYnuquW1-6XuHh-1S87qvqeh5dSZRZdzcvddSwkV7E7o-jjSDM8jX3UZ5DWEPHOboEXYS4.ZixcIoBI_OVfSTlha7_AGA.2f06c81fc921920f9ae23d1870c5b0a1a4108c3bbe6b4e7ab618b943064c11a3) shows how the application is supposed to work.

## Repository Structure

The `Mapping-System-2022S2` repository is forked in `EducationNetworkGroup` from the repository created by initial development team in 2022. Below is a basic outline of the repository.

| Directory         | Tech           | Purpose                                                       | 
|-------------------|----------------|---------------------------------------------------------------|
| .github/workflows | GitHub Actions | ci/cd Workflows.                                              |
| helm (obsolete)   | Kubernetes.    | Helm charts for Kubernetes.                                   |
| scripts           | Shell scripts  | Scripts used by the `Publish.yaml` workflow                   |
| src/backend       | Go             | Backend services                                              |
| src/database      | MySQL          | A copy of the database init file used across Science Island   |
| src/frontend      | React          | React SPA that relies on `nginx` for server side rendering    |
| src/keycloak      | JSON           | Basic Keycloak Realm File configured for local development    | 

> helm is obsolete now as the live deployment was drastically simplified in the migration from AWS to GCP in 2025. Kubernetes was removed from the project in favour of a simple VM with a [docker-compose](https://github.com/EducationNetworkGroup/si-infrastructure/blob/main/docker-compose.yml) setup.

## Live Deployment

You can access the live Curriculum Mapper frontend at [mapper.scienceisland.com](https://mapper.scienceisland.com).

The backend service for the live deployment is accessible at `https://api.scienceisland.com/api/v1/mapper*` - defined in [`si-infrastructure`](https://github.com/EducationNetworkGroup/si-infrastructure/blob/main/src/gcp/compute/prod.Caddyfile)

## Local Deployment

Run the following command to run the deployment locally.

```sh
docker compose up -d --build
```

See the `README.md` within the repository for sample credentials you can use to log into the application.