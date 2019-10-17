import React from 'react';
import { ScrollView, Text, Dimensions, StyleSheet } from 'react-native';
import { Block, theme } from 'galio-framework';
import waterFestTheme from '../constants/WaterFestTheme';
import Button from '../components/Button';
import ScreenContainer from '../components/ScreenContainer';

const { width } = Dimensions.get('screen');

export default props => (
  <ScreenContainer>
    <Block flex>
      <Text>Details</Text>
      <Button onPress={() => props.navigation.navigate('Artists') }>
        List
      </Button>
    </Block>
  </ScreenContainer>
);
