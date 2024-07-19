# ISS Tracker

Track the International Space Station's real time position above the earth.

Deployed on GitHub Pages at [https://jackgdll.github.io/ISS_tracker/](https://jackgdll.github.io/ISS_tracker/)

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

Map is updated every 3 seconds, making an API call to `https://api.wheretheiss.at/v1/satellites/25544`

A trail is left behind the Stations path.

## Usage

Clone the repo:

```bash
git clone git@github.com:therosbif/ISS_tracker.git
```

### Docker

```bash
docker-compose up --build
```

### Local

```bash
nvm install v16.13.1 && nvm use v16.13.1

yarn

yarn start
```
