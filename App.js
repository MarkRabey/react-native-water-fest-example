import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  GalioProvider,
  Block,  
  Text,
  theme,
} from 'galio-framework';

import Screens from './navigation/Screens';

export default function App() {
  return (
    <GalioProvider theme={ theme }>
      <Block flex>
        <Screens />
      </Block>
    </GalioProvider>
  );
}
