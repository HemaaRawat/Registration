# Server

## Pre-requisites

- Install bun

```bash
npm install -g bun
```

- Install [Docker](https://docs.docker.com/get-docker/) and start docker engine/desktop

## Installation

- install deps

```bash
bun install
```

- Start mongodb server

```bash
docker compose up -d
```

- Configure env

```bash
cp config.env.sample config.env
```

- Start server

```bash
bun start
```
