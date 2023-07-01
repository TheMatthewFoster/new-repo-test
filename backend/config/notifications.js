```javascript
const admin = require('firebase-admin');

const serviceAccount = require('./path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://hydration-tracking-app.firebaseio.com'
});

const messaging = admin.messaging();

module.exports = messaging;
```