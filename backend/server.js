```javascript
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const waterIntakeRoutes = require('./routes/waterIntakeRoutes');
const userRoutes = require('./routes/userRoutes');
const dbConfig = require('./config/database');
const authConfig = require('./config/auth');
const notificationConfig = require('./config/notifications');

const app = express();

// Connect to MongoDB
mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to the database'))
  .catch(err => console.error('Could not connect to the database', err));

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Authentication middleware setup
app.use(authConfig.setup());

// Notification services setup
notificationConfig.setup();

// Routes
app.use('/api/waterIntake', waterIntakeRoutes);
app.use('/api/user', userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
```