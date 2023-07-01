```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../config/auth');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/logout', auth, userController.logoutUser);

module.exports = router;
```