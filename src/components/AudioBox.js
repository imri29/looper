import { useContext, useEffect } from 'react';
import { Box } from './AudioBox.style';
import { AudioContext } from '../context/AudioProvider';

function AudioBox({ id, audioEl }) {
  const { handleQueue, activeTracks, isPlaying, setIsPlaying, power } = useContext(AudioContext);
  const isBoxActive = activeTracks.some(trackId => trackId === id);

  useEffect(() => {
    if (!power) {
      audioEl.pause();
      setIsPlaying(false);
    }
    audioEl.onended = () => setIsPlaying(false);
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
  }, [audioEl, isBoxActive, isPlaying, setIsPlaying, power]);

  const onClick = id => {
    if (isBoxActive) {
      audioEl.pause();
      audioEl.currentTime = 0;
      setIsPlaying(false);
    }
    handleQueue(id);
  };

  return (
    <Box onClick={() => onClick(id)} playing={isBoxActive}>
      <span>{isBoxActive ? 'pause' : 'play'}</span>
    </Box>
  );
}

export default AudioBox;
