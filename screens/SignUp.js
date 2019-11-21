import React, { useState } from 'react';
import { Block, Text, Input } from 'galio-framework';
import Button from '../components/Button';
import firebase from '../firebaseConfig';
import ScreenContainer from '../components/ScreenContainer';

export default props => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      props.navigation.navigate('UserProfile');
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <ScreenContainer>
      <Block flex>
        <Text>Enter you email and password below</Text>
        <Input value={ email } onChangeText={ setEmail } placeholder="Email" autoCapitalize="none"  />
        <Input password viewPass value={ password } onChangeText={ setPassword } placeholder="Password" autoCapitalize="none"  />
        <Button onPress={ handleSubmit }>
          Sign Up
        </Button>
      </Block>
    </ScreenContainer>
  );
}
