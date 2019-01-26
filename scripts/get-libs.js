'use strict';

const Fs = require('fs');
const Path = require('path');
const Axios = require('axios');

async function download(url) {

  const path = Path.resolve(__dirname, '../app/libs', url.substring(url.lastIndexOf('/') + 1));

  const response = await Axios({
    method: 'GET',
    url,
    responseType: 'stream',
  });

  // pipe the result stream into a file on disc
  response.data.pipe(Fs.createWriteStream(path));

  // return a promise and resolve when download finishes
  return new Promise((resolve, reject) => {
    response.data.on('end', () => {
      resolve();
    });

    response.data.on('error', () => {
      reject();
    });
  });
}

download('http://visom.goosor.com/back-lib/build/back-lib.js');
