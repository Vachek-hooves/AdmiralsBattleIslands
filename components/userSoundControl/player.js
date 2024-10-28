import Sound from 'react-native-sound';

let backgroundMusic = null;
let isPlaying = false;

export const setupPlayer = () => {
  if (backgroundMusic) return; // Prevent multiple initializations

  Sound.setCategory('Playback');
  
  backgroundMusic = new Sound(
    require('../../assets/sound/bgSound/shipsBattle.mp3'), 
    (error) => {
      if (error) {
        console.error('Failed to load sound', error);
        return;
      }
      backgroundMusic.setNumberOfLoops(-1);
      backgroundMusic.setVolume(0.5);
      // Auto-play after setup
      playBackgroundMusic();
    }
  );
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
  if (backgroundMusic && isPlaying) {
    backgroundMusic.pause();
    isPlaying = false;
  }
};

export const toggleBackgroundMusic = () => {
  if (!backgroundMusic) {
    setupPlayer();
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
