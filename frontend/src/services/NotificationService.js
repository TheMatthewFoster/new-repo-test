```javascript
import { Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';

class NotificationService {
  static configure(onRegister, onNotification, onOpenNotification) {
    PushNotification.configure({
      onRegister: function (token) {
        onRegister(token);
      },
      onNotification: function (notification) {
        if (!notification?.foreground) {
          onOpenNotification(notification);
        } else {
          onNotification(notification);
        }
      },
      popInitialNotification: true,
    });
  }

  static scheduleNotification(time, repeatType) {
    PushNotification.localNotificationSchedule({
      message: "Time to drink water!",
      date: new Date(Date.now() + time * 60 * 1000),
      repeatType: repeatType,
      allowWhileIdle: true,
    });
  }

  static cancelAllLocalNotifications() {
    if (Platform.OS === 'ios') {
      PushNotification.removeAllDeliveredNotifications();
    } else {
      PushNotification.cancelAllLocalNotifications();
    }
  }
}

export default NotificationService;
```