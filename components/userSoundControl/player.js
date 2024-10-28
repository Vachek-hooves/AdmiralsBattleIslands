import Sound from 'react-native-sound';

let backgroundMusic = null;
let isPlaying = false;

export const setupPlayer = () => {
  // Enable playback in silence mode
  Sound.setCategory('Playback');
  
  if (!backgroundMusic) {
    // Fix the path to use require
    backgroundMusic = new Sound(
      require('../../assets/sound/bgSound/shipsBattle.mp3'), 
      (error) => {
        if (error) {
          console.error('Failed to load sound', error);
          return;
        }
        // Set looping to true for background music
        backgroundMusic.setNumberOfLoops(-1);
        // Optional: Set volume
        backgroundMusic.setVolume(0.5);
    });
  }
};

export const playBackgroundMusic = () => {
  if (!backgroundMusic) {
    setupPlayer();
    return;
  }
  
  if (!isPlaying) {
    backgroundMusic.play((success) => {
      if (!success) {
        console.log('Playback failed due to audio decoding errors');
      }
    });
    isPlaying = true;
  }
};

export const pauseBackgroundMusic = () => {
  backgroundMusic?.pause();
  isPlaying = false;
};

export const toggleBackgroundMusic = () => {
  if (!backgroundMusic) {
    setupPlayer();
    playBackgroundMusic();
    return true;
  }

  if (isPlaying) {
    pauseBackgroundMusic();
    return false;
  } else {
    playBackgroundMusic();
    return true;
  }
};

export const cleanupPlayer = () => {
  if (backgroundMusic) {
    backgroundMusic.release();
    backgroundMusic = null;
    isPlaying = false;
  }
};
