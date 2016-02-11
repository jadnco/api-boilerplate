# API Boilerplate

This repository serves as a simple starting point for creating RESTful APIs with Node, Express and MongoDB.

## Getting Started

The API uses MongoDB, so make sure it's installed.

Run a new instance of MongoDB:
```sh
sudo mongod
```

Install all dependencies with npm:
```sh
npm install
```

Start running the server:
```sh
npm start
```

The API listens onto a *dynamic* IP address for development. This address will be given after running the above command.

## Development

Flow is being used to allow for statically typed JavaScript.

After creating new methods, run the following command and deal with any output properly:

```sh
npm run check
```

Mocha is being used as the testing framework and Chai as the assertion library.

To run unit tests:

```sh
npm test
```

## Production

Since ES6+ is not understood natively, a transpiled build needs to be created before pushing to a live production server. To create this build, run the following command:

```sh
npm run build
```

This command will generate a new `build` directory with files in ES5.

## API Documentation

- [User](docs/User.md)
