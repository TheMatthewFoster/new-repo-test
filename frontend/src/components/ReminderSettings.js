```javascript
import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import NotificationService from '../services/NotificationService';

const ReminderSettings = () => {
  const [reminderFrequency, setReminderFrequency] = useState('');

  const handleSetReminder = () => {
    NotificationService.setReminder(reminderFrequency);
  };

  return (
    <View>
      <Text>Set your reminder frequency (in hours):</Text>
      <TextInput
        value={reminderFrequency}
        onChangeText={setReminderFrequency}
        keyboardType="numeric"
      />
      <Button title="Set Reminder" onPress={handleSetReminder} />
    </View>
  );
};

export default ReminderSettings;
```