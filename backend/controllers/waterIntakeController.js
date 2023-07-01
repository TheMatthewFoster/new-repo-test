```javascript
const WaterIntake = require('../models/WaterIntake');

// Log water intake
exports.logWater = async (req, res) => {
    const { userId, intakeAmount } = req.body;

    try {
        const waterIntake = new WaterIntake({
            userId,
            date: new Date(),
            intakeAmount
        });

        await waterIntake.save();

        res.status(201).json({
            message: 'Water intake logged successfully',
            waterIntake
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error logging water intake',
            error
        });
    }
};

// Get daily summary
exports.getDailySummary = async (req, res) => {
    const { userId } = req.params;

    try {
        const waterIntakeLogs = await WaterIntake.find({ userId });

        const totalIntake = waterIntakeLogs.reduce((total, log) => total + log.intakeAmount, 0);

        res.status(200).json({
            message: 'Daily summary fetched successfully',
            totalIntake,
            waterIntakeLogs
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching daily summary',
            error
        });
    }
};
```