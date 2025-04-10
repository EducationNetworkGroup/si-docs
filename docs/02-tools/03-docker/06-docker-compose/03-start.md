---
sidebar_position: 3
---

# Using Docker Compose

Navigate to the directory containing the `docker-compose.yml` file before running the following commands.

## Quick Start

Quickly build and run the images in detached mode. This is the easiest option for the majority of use cases.

```sh
docker compose up -d --build
```

## Start without Cache

To clear the cache and guarantee that you're building your project with the latest version of the images.

```sh
docker compose build --pull --no-cache
docker compose up -d
```

| Flag | Description |
|----- | ----------- |
| `--pull` | Forces Docker to pull the latest base images from the registry before building, ensuring you are using the most up-to-date dependencies. |
| `--no-cache` | Prevents Docker from using cached layers, forcing a full rebuild of the image. This ensures that all dependencies and build steps are executed from scratch. |

## Interact with Individual Images

Once running, the way you interact with images is the same as if you set them up individually. For instance, you can still you the following command to check the images.

```sh
docker ps
```

## Stop Images

To stop all the images that the `docker-compose.yml` set up, you can run the following command. Make sure you are still in the directory containing the docker-compose.yml file for this to work.

```sh
docker compose down
```

These optional flags can be helpful to include to free up space on your environment.

| Flag | Description |
|----- | ----------- |
| `-v` | Removes named volumes created by docker compose. You almost always want to include this flag. For instance, if you create a postgres db image with a volume for its stored data, then including `-v` will wipe that data when the container is stopped.. |
| `--rmi all` | Removes all images used by any services in the compose file. |
| `--rmi local` | Removes only the images built locally, and not the pulled images. |
