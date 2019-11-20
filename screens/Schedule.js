import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import apiService from '../services/apiService';
import { Block } from 'galio-framework';
import Button from '../components/Button';
import theme from '../constants/WaterFestTheme';

import { Performance } from '../components/Performance';

export default props => {
  const [ performances, setPerformances ] = useState([]);
  const [ stages, setStages ] = useState([]);
  const [ artists, setArtists ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ activeStage, setActiveStage ] = useState(null);
  const [ activePerformances, setActivePerformances ] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setPerformances(await apiService.getData('performances'));
      setArtists(await apiService.getData('artists'));
      
      const stages = await apiService.getData('stages');
      setStages(stages);
      setActiveStage(stages.length > 0 ? stages[0].id : null);
      setLoading(false);
    }
    getData();
  }, []);

  useEffect(() => {
    const filtered = performances.filter(performance => performance.stageId === activeStage);
    const active = filtered.map(performance => {
      const artist = artists.find(x => x.id === performance.artistId);
      const stage = stages.find(x => x.id === performance.stageId);
      return ({
        artist,
        stage,
        ...performance
      });
    });
    setActivePerformances(active);
  }, [activeStage])
  
  return (
    <Block flex>
      <ActivityIndicator animating={ loading } />
      <Block row style={{ marginBottom: 12 }}>
        {
          stages.map(stage => (
            <Button
              key={ `${ stage.id }` }
              size="small"
              onPress={ () => setActiveStage(stage.id) }
              style={{ backgroundColor: activeStage === stage.id ? theme.COLORS.INFO : null }}>
              <Text style={{ color: activeStage === stage.id ? '#fff' : theme.COLORS.DEFAULT }}>
                { stage.name }
              </Text>
            </Button>
          ))
        }
      </Block>
      
      {
        activePerformances.length > 0 &&
        <FlatList
          data={ activePerformances }
          keyExtractor={ (item) => `${item.id}` }
          renderItem={ ({ item }) => <Performance { ...item } /> }
        />
      }
    </Block>
  );  
}