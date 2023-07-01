```javascript
const mongoose = require('mongoose');

const WaterIntakeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  intakeAmount: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('WaterIntake', WaterIntakeSchema);
```