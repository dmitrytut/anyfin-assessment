# Anyfin assessment

## Description

NodeJS GraphQL server which allows you to look up a country by name 
and returns the full name, population and a list of its official currencies 
including current exchange rate to `SEK`. 

Requests should require a valid JWT obtained from a separate `/login` endpoint 
and should be rate limited to `30 requests per minute`.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Note that `NODE_TLS_REJECT_UNAUTHORIZED` is set to `0` for the `development` mode 
(it will disable certificate validation for TLS connections).

## Usage

By default, server is running on `http://localhost:3000`

1. Get JWT token from `http://localhost:3000/login` (GET method)
2. Pass obtained token with every request in a `Authorization` header. `Authorization: Bearer {TOKEN}`
3. GraphQL playground is running on `http://localhost:3000/graphql`

**IMPORTANT** 

Please note, that if the default api key (see [Environment variables](#environment-variables)) for `fixer.io` is used
you can only gain `EUR` based rates. As I understand this is Fixer api limitation for free plans.

## Typescript definitions generation

To generate typescript definitions from a GraphQL schemas run:

```bash
$ npm run graphql:codegen
```

## Environment variables

The following environment variables can be overridden.

| Name  | Description  | Default value
|---|---|---|
|`JWT_SECRET`|JWT secret.|`secret`|
|`JWT_EXPIRATION_TIME`|JWT expiration time in `seconds`.|`3600`|
|`API_KEY`|Api key for `fixer.io`|`4c4d5a3740a88624af6bb83df99375a3`|
