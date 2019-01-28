'use strict';

const Controller = require('egg').Controller;
const Demo = require('../libs/back-lib.js');
class HomeController extends Controller {
  async index() {
    this.ctx.body = new Demo().hi('egg');
  }

  async info(ctx) {
    ctx.body = {info: new Demo().hi('egg')};
  }
}

module.exports = HomeController;
