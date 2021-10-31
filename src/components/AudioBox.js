import { useContext, useEffect } from 'react';
import { Box } from './AudioBox.style';
import { AudioContext } from '../context/AudioProvider';

function AudioBox({ id, audioEl, name }) {
  const { handleQueue, activeTracks, isPlaying, setIsPlaying, power } = useContext(AudioContext);
  const isBoxActive = activeTracks.some(trackId => trackId === id);

  useEffect(() => {
    if (!power) {
      audioEl.pause();
      setIsPlaying(false);
    }
    audioEl.ontimeupdate = function () {
      const buffer = 0.2;
      if (this.currentTime > this.duration - buffer) {
        this.currentTime = 0;
        setIsPlaying(false);
      }
    };
  }, [audioEl, setIsPlaying, power]);

  useEffect(() => {
    if (power) {
      setTimeout(async () => {
        if (!isPlaying && isBoxActive) {
          setIsPlaying(true);
          audioEl.currentTime = 0;
          await audioEl.play();
        }
      }, 1);
    }
  }, [audioEl, isBoxActive, isPlaying, power]);

  const onClick = id => {
    if (isBoxActive) {
      audioEl.pause();
      audioEl.currentTime = 0;
    }
    handleQueue(id);
  };

  return (
    <Box onClick={() => onClick(id)} playing={isBoxActive}>
      <span>{name}</span>
    </Box>
  );
}

export default AudioBox;
