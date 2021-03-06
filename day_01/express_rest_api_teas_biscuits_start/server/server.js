const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_router');

app.use(bodyParser.json());

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

const teas = [
  { name: "Early Grey", brand: "Twinings" },
  { name: "Irish Breakfast", brand: "Barry's Tea" },
  { name: "Lemon and Ginger", brand: "Lipton" },
  { name: "Rooibos", brand: "Tick Tock" },
  { name: "Green", brand: "Clipper" }
];

const teasRouter = createRouter(teas);
app.use('/api/teas', teasRouter);

const biscuits = [
  { name: "Digestives", brand: "McVitie's" },
  { name: "Hobnobs", brand: "McVitie's" },
  { name: "Shortbreads", brand: "Walkers" },
  { name: "Jammy Dodgers", brand: "Burton's" },
  { name: "Custard Creams", brand: "Crawford's" }
];

const biscuitsRouter = createRouter(biscuits);
app.use('/api/biscuits', biscuitsRouter);



app.listen(3000, function () {
  console.log(`App running on port ${ this.address().port }`);
});
