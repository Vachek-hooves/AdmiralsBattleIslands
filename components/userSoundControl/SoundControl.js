import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import SoundIcon from './SoundIcon';
import { toggleBackgroundMusic, setupPlayer } from './player';

const SoundControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    try {
      setupPlayer();
    } catch (error) {
      console.error('Error setting up sound:', error);
    }
  }, []);

  const handleSoundToggle = () => {
    try {
      const newPlayingState = toggleBackgroundMusic();
      setIsPlaying(newPlayingState);
    } catch (error) {
      console.error('Error toggling sound:', error);
    }
  };

  return (
    <View>
      <SoundIcon isOnline={isPlaying} />
    </View>
  );
};

export default SoundControl;
