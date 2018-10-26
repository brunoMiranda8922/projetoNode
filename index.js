var express = require('express');
var consign = require('consign');

const app = express();

consign()
  .include('db.js')
  .then('./models')
  .then('./lib/middleware.js')
  .then('./routes')
  .then('./lib/boot.js')
  .into(app);