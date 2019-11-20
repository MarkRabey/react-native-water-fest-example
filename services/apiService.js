import { AsyncStorage } from 'react-native';
import qs from 'qs';
import { API_BASE } from 'react-native-dotenv';

const setToken = async token => await AsyncStorage.setItem('token', token);
const getToken = async () => await AsyncStorage.getItem('token');
const deleteToken = async () => await AsyncStorage.removeItem('token');

export default {
  getData: async function getData(type) {
    try {
      const url = `${ API_BASE }/rest/${ type }`;
      const request = await fetch(url);
      const data = await request.json();
      return data;
    } catch (e) {
      return e;
    }
  },
  login: async function login(email, password) {
    try {
      const res = await fetch(`${ API_BASE }/users/login`, {
        method: 'POST',
        body: qs.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      });
      const { token } = await res.json();
      await setToken(token);
      return token;
    } catch (error) {
      console.log(error);
      return { error }
    }
  },
  logout: async function logout() {
    const token = getToken();
    await fetch(`${ API_BASE }/users/logout`, {
      headers: {
        'Authorization': `Bearer ${ token }`,
      },
    });
    await deleteToken;
    return null;
  },
  setToken,
  getToken,
  deleteToken,
}