// app.js
const express = require('express');
const initializeDatabase = require('./database');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.send("Welcome to LearnLink");
});

app.use('/auth', authRoutes);
app.use('/users', userRoutes);

const PORT = 3000;



initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
