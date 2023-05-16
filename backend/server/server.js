const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { randomUUID } = require('crypto')
const session = require('express-session')
const cookieParser = require('cookie-parser')


const routes = require('./routes/route')

const app = express();
const port = 8990;

app.use(cookieParser())

const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  resave: false,
  cookie: {
    maxAge: oneDay
  }
}))

app.use((req, res, next) => {

  console.log('\n', req.cookies.userIdUUID)
  if (req.cookies.userIdUUID) return next();

  let id = randomUUID();
  res.cookie('userIdUUID', id, {
    httpOnly: true
  });
  next()
})

app.use(cors())
app.use(express.urlencoded())
app.use(express.json())
app.set('case sensitive routing ', true)

routes(app);

app.listen(port, () => {
  console.log(`Server running on ${port}...`);
})

module.exports = app;