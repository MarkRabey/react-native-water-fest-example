import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Block, Card, theme } from 'galio-framework';
import ScreenContainer from '../components/ScreenContainer';
import apiService from '../services/apiService';
const { width } = Dimensions.get('screen');

export default props => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const artistData = await apiService.getData('artists');
      setArtists(artistData);
    }

    getData();
  }, []);
  
  return (
    <ScreenContainer>
      <Block flex>
        {
          artists &&
          artists.map(artist => (
            <TouchableOpacity
              key={ `${ artist._id }` }
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
