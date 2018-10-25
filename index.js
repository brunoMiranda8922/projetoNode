var express = require('express');
var consign = require('consign');

const app = express();

consign()
  .include('./models')
  .then('./lib/middleware.js')
  .then('./routes')
  .then('./lib/boot.js')
  .into(app);