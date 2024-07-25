const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).json({ message: 'You must be logged in to access this resource' });
  };
  
  router.get('/api/itineraries', isAuthenticated, async (req, res) => {
    // Your route handler
  });
