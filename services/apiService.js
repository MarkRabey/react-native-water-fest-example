import { AsyncStorage } from 'react-native';
import qs from 'qs';
// const API_URL = 'https://thawing-hollows-21222.herokuapp.com';
const API_URL = 'http://localhost:4300';

export default {
  getData: async function getData(type) {
    try {
      const request = await fetch(API_URL + '/rest/' + type);
      const { data } = await request.json();
      return data;
    } catch (e) {
      return e;
    }
  },
  login: async function login(email, password) {
    try {
      const res = await fetch('http://localhost:4300/users/login', {
        method: 'POST',
        body: qs.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      });
      const {token} = await res.json();
      AsyncStorage.setItem('token', token);
      return token;
    } catch (error) {
      console.log(error);
      return { error }
    }
  },
  getToken: async function getToken() {
    const token = await AsyncStorage.getItem('token');
    return token;
  },
  deleteToken: async function deleteToken() {
    await AsyncStorage.removeItem('token');
  }
}