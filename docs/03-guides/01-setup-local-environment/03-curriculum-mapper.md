---
sidebar_position: 3
---

# Curriculum Mapper (Mapping-System)

## Folder Structure

| File/Folder                  | Description                                                                                     |
| ---------------------------- | ----------------------------------------------------------------------------------------------- |
| `.github/workflows`          | GitHub Actions workflows for CI/CD pipelines.                                                   |
| `.idea/`                     | Contains project and module configuration files used by the IDEs to manage settings.            |
| `.vscode/`                   | No debugging configurations have been set up yet.                                               |
| `data samples/`              | Intended to hold input files required to demonstrate the prototype using representative data.   |
| `docs/`                      | A previous team's documentation folder consisting of their sprint plans.                        |
| `helm/`                      | Seperate Helm charts for the backend and frontend with a set of Kubernetes templates.           |
| `prototypes/`                | Low and high-fidelity design assets.                                                            |
| `src/`                       | Source code.                                                                                    |
| `tests/`                     | User and system test files.                                                                     |
| `ui/`                        | Graphical assets for the prototypes.                                                            |
| `.DS_Store`                  | Default folder created by macOS.                                                                |
| `.gitignore`                 | Files and directories ignored and untracked by Git.                                             |
| `2022-S2-SC-BoxJelly.pem`    |The file contains an RSA private key, which is used for secure encryption and decryption and should be kept confidential.|
| `README.md`                  | Documentation for setting up and running the Curriculum Mapper locally or on a server.          |
| `deploy.yml`                 |GitHub Actions workflow that automates the deployment of a Mapping System to an EC2 instance using Docker Compose, triggered by a push to the main branch.|

---

## Running the Curriculum Mapper Locally

### Prerequisites

- Node.js
- Go
- Redis
- MySQL

### Instructions

1. In a terminal, navigate to the /src directory in the repository:

```shell
cd src
```

2. To run the front-end container, enter the following command:

```shell
docker-compose up -d --build frontend
```

3. To run the backend, change the directory to /src/backend then run the following commands:

```shell
docker build -t backend
```

```shell
docker run -d -p 8088:8088 backend
```
