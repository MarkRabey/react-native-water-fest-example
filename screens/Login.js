import React, { useState } from 'react';
import { Block, Text, Input } from 'galio-framework';
import Button from '../components/Button';
import firebase from '../firebaseConfig';
import ScreenContainer from '../components/ScreenContainer';

export default props => {
  const [ email, setEmail ] = useState('mark.rabey@georgiancollege.ca');
  const [ password, setPassword ] = useState('javascript');
  const [ errorMessage, setErrorMessage ] = useState(null);

  const handleSubmit = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      props.navigation.goBack();
    } catch (error) {
      console.log(error);
      setErrorMessage('There was an error');
    }
  }
  
  return (
    <ScreenContainer>
      <Block flex>
        { errorMessage && <Text>{ errorMessage }</Text>}
        <Input value={ email } onChangeText={ setEmail } autoCapitalize="none" />
        <Input password viewPass value={ password } onChangeText={ setPassword }  autoCapitalize="none" />
        <Button onPress={ handleSubmit }>
          Submit
        </Button>
      </Block>
      <Block flex>
        <Text>Need and account?</Text>
        <Button onPress={ () => props.navigation.navigate('SignUp') }>
          Sign Up
        </Button>
      </Block>
    </ScreenContainer>
  );
}
