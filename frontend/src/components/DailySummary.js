```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DailySummary = () => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    getDailySummary();
  }, []);

  const getDailySummary = async () => {
    try {
      const response = await axios.get('/api/waterIntake/dailySummary');
      setSummary(response.data);
    } catch (error) {
      console.error('Error fetching daily summary:', error);
    }
  };

  return (
    <div id="dailySummary">
      {summary ? (
        <div>
          <h2>Daily Summary</h2>
          <p>Total water intake: {summary.totalIntake} glasses</p>
          <p>Recommended intake: {summary.recommendedIntake} glasses</p>
          <p>Intake over time:</p>
          <div>
            {summary.intakeOverTime.map((intake, index) => (
              <p key={index}>
                {intake.time}: {intake.amount} glasses
              </p>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DailySummary;
```