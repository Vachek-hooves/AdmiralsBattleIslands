import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SoundIcon = ({isOnline}) => {
  return (
    <Image
      source={require('../../assets/icons/melody.png')}
      style={{
        width: 45,
        height: 45,
        tintColor: isOnline ? '#4ECDC4' : '#95A5A6',
      }}
    />
  );
};

export default SoundIcon;
