import { useCallback, createContext, useEffect, useState } from 'react';
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
    const activateAndPlaySound = sound => {
      if (sound.id === id) {
        if (power) {
          toggleIndividualSound(sound);
          return { ...sound, isOn: !sound.isOn, isPlaying: !sound.isPlaying };
        } else {
          return { ...sound, isOn: !sound.isOn, isPlaying: false };
        }
      } else {
        return sound;
      }
    };
    setSounds(sounds.map(activateAndPlaySound));
  };

  const toggleIndividualSound = sound =>
    sound.isPlaying ? sound.audio.play() : sound.audio.pause();

  const togglePower = () => {
    setPower(!power);
    setSounds(sounds.map(sound => (sound.isOn ? { ...sound, isPlaying: !power } : sound)));
    toggleAllAudio();
  };

  /*  TODO

   *  toggle delay between sounds
   *
   * */

  const toggleAllAudio = useCallback(() => {
    sounds.forEach(sound => {
      const { audio } = sound;
      if (sound.isPlaying) {
        audio.play();
        // audio.loop = true;
        audio.onended = () => console.log('ENDED')
      } else {
        audio.pause();
      }
    });
  }, [sounds]);

  useEffect(() => {
    toggleAllAudio();
  }, [toggleAllAudio, sounds]);

  const value = {
    sounds,
    setSounds,
    power,
    toggleSound,
    togglePower,
    toggleAllAudio,
  };

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
};

export default AudioProvider;
