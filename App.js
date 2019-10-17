import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  GalioProvider,
  Block,
} from 'galio-framework';

import myTheme from './constants/WaterFestTheme';

import Screens from './navigation/Screens';

export default function App() {
  return (
    <GalioProvider theme={ myTheme }>
      <Block flex>
        <Screens />
      </Block>
    </GalioProvider>
  );
}
