const express = require('express');

const createRouter = function (data) {

  const router = express.Router();

  router.get('/',  (req, res) => {
    res.json(data);
  });

  router.get('/:id', (req, res) => {
    const index = req.params.id;
    res.json(data[index]);
  });

  router.post('/', (req, res) => {
    data.push(req.body);
    res.json(data);
  });

  router.delete('/:id', (req, res) => {
    const index = req.params.id;
    data.splice(index, 1);
    res.json(data);
  });

  router.put('/:id', (req, res) => {
    const index = req.params.id;
    const newData = req.body;
    data[index] = newData;
    res.json(data);
  });

  return router;

}

module.exports = createRouter;
