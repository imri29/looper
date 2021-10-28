import { createContext, useState } from 'react';
import * as soundModules from '../sounds';

export const AudioContext = createContext();

const AudioProvider = ({ children }) => {
  const [sounds, setSounds] = useState(
    Object.values(soundModules).map((url, i) => ({
      audio: new Audio(url),
      id: i + 1,
      isOn: false,
      isPlaying: false,
    }))
  );
  const [power, setPower] = useState(true);

  const toggleSound = id => {
    const activateAndPlaySound = sound =>
      sound.id === id
        ? { ...sound, isOn: !sound.isOn, isPlaying: power ? !sound.isPlaying : false }
        : sound;
    setSounds(sounds.map(activateAndPlaySound));
  };

  const togglePower = () => {
    setPower(!power);

    setSounds(
      sounds.map(sound => {
        if (sound.isOn) {
          return { ...sound, isPlaying: !power };
        } else {
          return sound;
        }
      })
    );
  };

  const playAudio = id => {
    if (sounds.length) {
      const track = sounds.find(track => track.id === id);
      track?.audio?.play();
      track?.audio.addEventListener('ended', e => console.log('ended', id, e));
    }
  };

  const value = {
    sounds,
    setSounds,
    power,
    toggleSound,
    togglePower,
    playAudio,
  };

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
};

export default AudioProvider;
