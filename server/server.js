const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { sequelize } = require('./models'); // turi būti models/index.js
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', authRoutes);

sequelize.sync().then(() => {
  console.log('Prisijungta prie DB');
  app.listen(PORT, () => {
    console.log(`Serveris veikia http://localhost:${PORT}`);
  });
});
