import React from 'react';
import { withNavigation } from 'react-navigation';
import {
  StyleSheet, 
  Platform, 
  Dimensions,
} from 'react-native';
import {
  Button,
  Block, 
  NavBar,
  theme,
} from 'galio-framework';

import waterFestTheme from '../constants/WaterFestTheme';
import { iPhoneX } from '../utils/screen';

const { height, width } = Dimensions.get('window');


const BackButton = ({ goBack }) => (
  <Button
    onlyIcon
    icon="arrowleft"
    iconFamily="antdesign"
    iconSize={ 24 }
    iconColor={ waterFestTheme.COLORS.WHITE }
    color="transparent"
    onPress={ () => goBack() }></Button>
);

const Header = props => {
  return (
    <Block>
      <NavBar
        style={ styles.navbar }
        title={ props.title }
        titleStyle={ styles.title }
        left={ props.back ? <BackButton goBack={ props.navigation.goBack } /> : null }
        leftStyle={{ fontSize: 36 }}
        leftIconColor={ waterFestTheme.COLORS.WHITE }
      />
    </Block>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: waterFestTheme.COLORS.PRIMARY,
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 1.5,
    paddingTop: iPhoneX ? theme.SIZES.BASE * 4 : theme.SIZES.BASE,
    zIndex: 5,
  },
  title: {
    color: waterFestTheme.COLORS.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default withNavigation(Header);