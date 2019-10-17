import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Button, Block, Text, Card, theme, Toast } from 'galio-framework';
import waterFestTheme from '../constants/WaterFestTheme';
import ScreenContainer from '../components/ScreenContainer';
const { width } = Dimensions.get('screen');

export default props => {
  const [artists, setArtists] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (artists.length === 0) {
      fetch('https://thawing-hollows-21222.herokuapp.com/artists')
        .then(res => res.json())
        .then(({data}) => {
          setArtists(data);
        })
    }
  });

  return (
    <ScreenContainer>
      <Block flex>
        {
          artists.map(artist => (
            <TouchableOpacity
              key={ `${ artist.id }` }
              onPress={() => { props.navigation.navigate('ArtistDetails', { artist })}}>
              <Card
                title={ artist.name }
                avatar={ artist.image }
                style={{ marginBottom: 12 }}
              />
            </TouchableOpacity>
          ))
        }
      </Block>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  artists: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});
