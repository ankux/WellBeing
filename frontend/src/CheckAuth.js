import {jwtDecode} from 'jwt-decode';

export const checkAuth = () => {
    const token = localStorage.getItem('token');

    if (!token) return false;

    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decoded.exp > currentTime; // Check if token is not expired
    } catch (err) {
      console.error("Invalid token:", err);
      return false;
    }
  };

