import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'galio-framework';

export const Performance = props => (
  <Card
    title={ props.artist.name }
    location={ props.stage.name }
    caption={ props.date }
    avatar={ props.artist.image }
    style={{ margin: 12 }}
  />
);
