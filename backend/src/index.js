const express = require('express');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const itinerariesRouter = require('./routes/itineraries');
app.use('/api/itineraries', itinerariesRouter);

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Database connection
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

// Middleware
app.use(express.json());
app.use(passport.initialize());

// Google OAuth configuration
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // Here you would find or create a user in your database
    return cb(null, profile);
  }
));

// Routes
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

// Sample route for creating an itinerary
app.post('/itineraries', async (req, res) => {
  try {
    // Here you would create an itinerary in your database
    res.status(201).json({ message: 'Itinerary created' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
