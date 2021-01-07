const express = require('express');
const morgan = require('morgan');
const app = express();
const router = require('./router');
// App setup
app.use(morgan('combined'));
app.use(express.json()); //Used to parse JSON bodies
// app.use(express.urlencoded()); //Parse URL-encoded bodies

// Routes
router(app);

// Server setup
const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
  console.log('Server running..');
});