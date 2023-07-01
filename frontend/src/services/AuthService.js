```javascript
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/user/';

class AuthService {
  async registerUser(username, email, password) {
    try {
      const response = await axios.post(API_URL + 'register', {
        username,
        email,
        password
      });
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async loginUser(username, password) {
    try {
      const response = await axios.post(API_URL + 'login', {
        username,
        password
      });
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  logoutUser() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
```