import React, { useState } from 'react';
import { Block, Text, Input, Button } from 'galio-framework';
import firebase from '../firebaseConfig';
import ScreenContainer from '../components/ScreenContainer';

export default props => {
  const [ email, setEmail ] = useState('mark.rabey@georgiancollege.ca');
  const [ password, setPassword ] = useState('javascript');

  const handleSubmit = async () => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    props.navigation.goBack();
  }
  
  return (
    <ScreenContainer>
      <Block flex>
        <Input value={ email } onChangeText={ setEmail }  />
        <Input password viewPass value={ password } onChangeText={ setPassword }  />
        <Button onPress={ handleSubmit }>
          <Text>Submit</Text>
        </Button>
      </Block>
    </ScreenContainer>
  );
}
