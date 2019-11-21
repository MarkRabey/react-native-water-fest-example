import React, { useState, useEffect } from 'react';
import { Block, Card, theme, Text, Button } from 'galio-framework';
import firebase from '../firebaseConfig';
import ScreenContainer from '../components/ScreenContainer'; 

export default props => {
  const [ user, setUser ] = useState();

  const handleLogout = async () => {
    await firebase.auth().signOut();
  }

  firebase.auth().onAuthStateChanged(setUser);

  const goToLogin = () => {
    props.navigation.navigate('Login');
  }

  useEffect(() => {
    if (!user) {
      const firebaseUser = firebase.auth().currentUser;
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        goToLogin();
      }
    }
  });

  return (
    <ScreenContainer>
      <Block flex>
        { user && <Text>Signed in with { user.email }</Text> }
        
        <Button onPress={ user ? handleLogout : goToLogin }>
          <Text>{ user ? 'Logout' : 'Login' }</Text>
        </Button>
      </Block>
    </ScreenContainer>
  );
}
