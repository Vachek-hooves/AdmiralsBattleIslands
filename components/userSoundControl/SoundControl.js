import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import IconMusic from './IconMusic';
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
    <TouchableOpacity onPress={handleSoundToggle}>
      <SoundIcon isOnline={isPlaying} />
    </TouchableOpacity>
  );
};

export default SoundControl;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});
