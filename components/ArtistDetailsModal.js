import React from 'react';
import { View, Text, Modal } from 'react-native';
import { Block } from 'galio-framework';
import Button from './Button';

export const ArtistDetailsModal = props => {
  
  return (
    <Modal visible={ props.visible }>
      <Block flex>
        <Text>TEXT</Text>

        <Button onPress={ props.onClose }>
          Close
        </Button>
      </Block>
    </Modal>
  );
}
