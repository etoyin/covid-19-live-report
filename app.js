const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const PostRouter = require('./routes/posts')
const bodyParser = require('body-parser');
const Post = require('./models/Posts')
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.use('/posts', PostRouter);

app.get('/', async (req,res) => {
  try {
    const get = await Post.find();
    res.json(get);
  } catch (err) {
    res.json({message: err});
  }
})

mongoose.connect(
  process.env.DB_CONNECTION, 
  { useNewUrlParser: true }, 
  () => {
    console.log('Connected to DB');
});

app.listen(3000);