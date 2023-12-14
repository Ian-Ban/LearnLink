const express = require('express');
const initializeDatabase = require('./database');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' folder

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

app.use('/auth', authRoutes);
app.use('/users', userRoutes);

const PORT = 3000;

initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
