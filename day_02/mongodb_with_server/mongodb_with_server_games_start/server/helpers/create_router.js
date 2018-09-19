const express = require('express');

const createRouter = function (collection) {



  const router = express.Router();

  return router;

};

const gamesRouter = function (collection) {

  router.get('/', (req, res) => {
    console.log('response', res.send);
    res.send('Hello World!');
  });

  return router;
};

module.exports = createRouter;
