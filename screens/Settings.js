import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { Block, Button, Input } from 'galio-framework';
import apiService from '../services/apiService';

export default props => {
  const [token, setToken] = useState(null);
  const [ email, setEmail ] = useState('mark.rabey@georgiancollege.ca');
  const [ password, setPassword ] = useState('password');

  const handleSubmit = async () => {
    const token = await apiService.login(email, password);
    setToken(token);
  }

  const handleLogout = async () => {
    try {
      const res = await apiService.logout();
      setToken(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    apiService.getToken().then(setToken);
  }, [])

  return (
    <Block flex>
      <Text h1>Login</Text>
      <Input
        placeholder="email address"
        onChangeText={ setEmail }
        value={ email }
      />
      <Input
        placeholder="password"
        onChangeText={ setPassword }
        value={ password }
      />
      <Button onPress={ handleSubmit }>
        <Text>Submit</Text>
      </Button>
      {
        token &&
        <Text>
          Token: { token }
        </Text>
      }
      {
        token &&
        <Button onPress={ handleLogout }>
          Logout
        </Button>
      }
    </Block>
  );
}
