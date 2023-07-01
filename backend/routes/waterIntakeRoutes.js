```javascript
const express = require('express');
const router = express.Router();
const waterIntakeController = require('../controllers/waterIntakeController');

// Route to log water intake
router.post('/log', waterIntakeController.logWater);

// Route to get daily summary
router.get('/summary', waterIntakeController.getDailySummary);

// Route to set reminder
router.post('/reminder', waterIntakeController.setReminder);

module.exports = router;
```