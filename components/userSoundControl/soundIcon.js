import {Image} from 'react-native';
import React from 'react';

const SoundIcon = ({isOnline}) => {
  return (
    <Image
      source={require('../../assets/icons/melody.png')}
      style={{
        width: 35,
        height: 35,
        tintColor: isOnline ? '#4ECDC4' : '#95A5A6',
        opacity: 0.9,
      }}
    />
  );
};

export default SoundIcon;
