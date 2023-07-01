```javascript
import React from 'react';
import { Button } from 'react-native';
import { logWater } from '../services/waterIntakeService';

const LogWaterButton = () => {
  const handlePress = async () => {
    try {
      await logWater();
      alert('Water intake logged successfully!');
    } catch (error) {
      alert('Failed to log water intake. Please try again.');
    }
  };

  return (
    <Button
      id="logWaterButton"
      title="Log a glass of water"
      onPress={handlePress}
    />
  );
};

export default LogWaterButton;
```