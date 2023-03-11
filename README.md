# Tarot Card Generation

A web app to generate a narrative story based on tarot cards.

It is a useful tool for brainstorming new story ideas.

This project is an implementation of the paper "Tarot-based narrative generation".

## Requirements

- node 16.14.2
- npm 8.5.0

## Install

```bash
npm install
```

## Run

```bash
npm start
```

## Docker

### Docker buiild

```shell
docker build . -t moredrowsy/tarot-story-generation:latest -t moredrowsy/tarot-story-generation:0.1.0
```

### Docker run

```shell
docker run -p 3000:80 -d moredrowsy/tarot-story-generation:latest
```

Visit site by `http://localhost:3000`

### Docker list image

```shell
docker image ls
```

### Docker list container

```shell
docker ps
```

### Docker stop

```shell
docker stop <container-id>
```

### Push container to repository

Make sure to login before push by `docker login`

```shell
docker push <image-name>:tag
```

Example

```shell
docker push moredrowsy/tarot-story-generation:0.1.0
```

## Reference

```ref
A. Sullivan, M. P. Eladhari, and M. Cook, “Tarot-based narrative generation,” in Proceedings of the 13th International Conference on the Foundations of Digital Games, 2018.
```
