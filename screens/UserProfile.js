import React, { useState, useEffect } from 'react';
import { Block, Card, theme, Text } from 'galio-framework';
import Button from '../components/Button';
import firebase from '../firebaseConfig';
import ScreenContainer from '../components/ScreenContainer'; 

export default props => {
  const [ user, setUser ] = useState();

  const handleLogout = async () => {
    await firebase.auth().signOut();
  }

  firebase.auth().onAuthStateChanged(setUser);

  const navigateTo = (route) => {
    props.navigation.navigate(route);
  }

  useEffect(() => {
    if (!user) {
      const firebaseUser = firebase.auth().currentUser;
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        navigateTo('Login');
      }
    }
  });

  return (
    <ScreenContainer>
      <Block flex>
        { user && <Text>Signed in with { user.email }</Text> }
        
        <Button onPress={ user ? handleLogout : () => navigateTo('Login') }>
          { user ? 'Logout' : 'Login' }
        </Button>
        
        {
          user ? null :
          <Button onPress={ user ? handleLogout : () => navigateTo('SignUp') }>
            Sign Up
          </Button>
        }
      </Block>
    </ScreenContainer>
  );
}
