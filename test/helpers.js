var supertest = require('supertest');
var chai = require('chai');
var app = require('../index');

global.app = app;
global.request = supertest(app);
global.expect = chai.expect;