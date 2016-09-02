'use strict';

const express = require('express');
const app = express();
const path = require('path');
const webpack = ('webpack');
const config = require('./webpack.config.js');
// const compiler = webpack(config);
const bodyParser = require('body-parser');
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, 'dist/')));
  app.get('*', (req, res) => {
    res.sendFile(
      fs.readFileSync(
        path.join(__dirname, '../dist/index.html')
      )
    );
  });

const onStart = (err) => {
  if (err) {
    throw new Error(err);
  }
  console.info(
    `==> 🌎 Listening on port ${port}. ` +
    `Open up http://localhost:${port}/ in your browser.`
  );
};

app.listen(process.env.PORT || 3000, onStart);