# ISS Tracker

Track the International Space Station's real time position above the earth.

## Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [React-Leaflet](https://react-leaflet.js.org)

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Description

Map is updated every 3 seconds, making an API call to `http://api.open-notify.org/iss-now.json`

A trail is left behind the Stations path.

## Usage

Clone the repo:

```bash
git clone git@github.com:therosbif/ISS_tracker.git
```

| ⚠️ WARNING: Due to Firefox's CORS policy, calls to the ISS position API are blocked by default, for optimal experience use a Chromium based browser. |
----

### Production

```bash
docker-compose up --build
```

### Development

```bash
nvm install v16.13.1 && nvm use v16.13.1

yarn

yarn start
```
