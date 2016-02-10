/* @flow */

'use strict';

import Express from 'express';
import BodyParser from 'body-parser';
import Mongoose from 'mongoose';
import IP from 'ip';
import Chalk from 'chalk';

let api = require('./api');
let app = Express();

// Connect to the database
Mongoose.connect('mongodb://localhost:27017');

app.use(BodyParser.urlencoded({extended: true}));
app.use(BodyParser.json());

app.use('/api', api);

let server = app.listen(1998, IP.address(), () => {
  let port = server.address().port;
  let address = server.address().address;

  console.log(Chalk.magenta.bold(`==> Listening on ${address}:${port} <==`));
});
