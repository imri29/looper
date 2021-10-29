import { createContext, useState, useRef } from 'react';
import * as soundModules from '../sounds';

export const AudioContext = createContext();

const AudioProvider = ({ children }) => {
  const sounds = useRef(
    Object.values(soundModules).map((url, i) => ({
      audio: new Audio(url),
      id: i + 1,
    }))
  );
  const [power, setPower] = useState(true);
  const [activeTracks, setActiveTracks] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleQueue = id => {
    if (activeTracks.includes(id)) {
      setActiveTracks(
        activeTracks.filter(trackId => {
          return trackId !== id;
        })
      );
    } else {
      setActiveTracks([...activeTracks, id]);
    }
  };

  const togglePower = () => {
    setPower(!power);
  };

  const value = {
    sounds,
    power,
    togglePower,
    handleQueue,
    activeTracks,
    isPlaying,
    setIsPlaying,
  };

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
};

export default AudioProvider;
