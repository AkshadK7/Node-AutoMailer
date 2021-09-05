const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
//import routes
const authRoutes = require('./routes/auth');

const app = express();

app.use(bodyParser.json());
app.use(cors());
//routes middleware
app.use('/api', authRoutes);
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
});