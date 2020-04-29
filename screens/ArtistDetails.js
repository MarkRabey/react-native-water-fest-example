import React from 'react';
import { Dimensions } from 'react-native';
import { Card } from 'galio-framework';
import waterFestTheme from '../constants/WaterFestTheme';
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
