import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Button, Block, Text, Card, theme, Toast } from 'galio-framework';
import waterFestTheme from '../constants/WaterFestTheme';
import ScreenContainer from '../components/ScreenContainer';
import { ArtistDetailsModal } from '../components/ArtistDetailsModal';
import apiService from '../services/apiService';
const { width } = Dimensions.get('screen');

export default props => {
  const [artists, setArtists] = useState([]);
  const [stages, setStages] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const artistData = await apiService.getData('artists');
      const stageData = await apiService.getData('stages');
      const badData = await apiService.getData('kjsdhjkf');
      
      setArtists(artistData);
      setStages(stageData);
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
      <ArtistDetailsModal
        visible={ showModal }
        artist={ selectedArtist }
        onClose={() => {
          setShowModal(false);
          setSelectedArtist(null);
        }}
      />
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
