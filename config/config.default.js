'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1548510789616_3824';

  // add your config here
  config.middleware = [];

  exports.static = {
    prefix: '/public/',
    dir: [
      path.join(appInfo.baseDir, 'web'), // 前端文件
      path.join(appInfo.baseDir, 'user'), // 用户文件
    ],
  };
  return config;
};
