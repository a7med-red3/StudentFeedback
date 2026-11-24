require('dotenv').config();
const express = require ('express');
const app = express ();
const port = process.env.PORT;
const pass = process.env.DB_PASSWORD;

const mongoose = require ('mongoose');
app.use (express.urlencoded ({extended: true}));
const Feed = require ('./models/mydataschema');

app.get ('/', (req, res) => {
  res.sendFile ('./views/index.html', {root: __dirname});
});


mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.skb00rv.mongodb.net/${process.env.DB_NAME}`
)
.then(() => {
  app.listen(port, () => {
    console.log('Connected Successfully');
    console.log(`http://localhost:${port}`);
  });
})
.catch(err => {
  console.log(err);
});



app.post ('/', (req, res) => {
  console.log (req.body);
  const Feeds = new Feed (req.body);

  Feeds.save ()
  res.redirect ('/');

 
});


