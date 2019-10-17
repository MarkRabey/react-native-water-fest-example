import React from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Block, theme } from 'galio-framework';
const { width } = Dimensions.get('screen');

export default ({ children, ...props }) => (
  <Block flex center middle style={ styles.container }>
    <ScrollView
      showsVerticalScrollIndicator={ false }
      contentContainerStyle={ styles.content }>
        { children }
      </ScrollView>
  </Block>
);

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  content: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});
