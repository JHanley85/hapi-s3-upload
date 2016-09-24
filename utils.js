'use strict';

const Crypto = require('crypto');

const getDateString = function () {

  const now = new Date();
  const day = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();
  const month = now.getMonth() < 9 ? `0${now.getMonth() + 1}` : now.getMonth() + 1;
  return `${day}-${month}-${now.getFullYear()}`;
};

const getRandomString = function () {

  return Crypto.randomBytes(8).toString('hex');
};

const getFileName = function (fileName) {

  const index = fileName.indexOf('.');
  const file = fileName.substring(0, index);
  const extension = fileName.substring(index);
  return getDateString() + '/' + file + '-' + getRandomString() + extension;
};

module.exports = {
  getDateString,
  getRandomString,
  getFileName
};
