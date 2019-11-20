import React from 'react';
import { ScrollView, Text, Dimensions, StyleSheet } from 'react-native';
import { Block, theme, Card } from 'galio-framework';
import waterFestTheme from '../constants/WaterFestTheme';
import Button from '../components/Button';
import ScreenContainer from '../components/ScreenContainer';

const { width } = Dimensions.get('screen');

export default ({ navigation }) => {
  const artist = navigation.getParam('artist');
  return (
    <ScreenContainer>
      <Card
        image={ artist.image }
        caption={ artist.bio }
        shadowColor={ waterFestTheme.COLORS.DEFAULT }
      />
    </ScreenContainer>
  );
}
