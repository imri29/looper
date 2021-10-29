import { useContext, useState, useEffect } from 'react';
import { Box } from './AudioBox.style';
import { AudioContext } from '../context/AudioProvider';

function AudioBox({ id, audioEl }) {
  const { handleQueue, activeTracks, isPlaying, setIsPlaying, power } = useContext(AudioContext);
  const isBoxActive = activeTracks.some(trackId => trackId === id);
  // const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    audioEl.onended = () => setIsPlaying(false);
  }, [audioEl, setIsPlaying]);

  useEffect(() => {
    setTimeout(async () => {
      if (!isPlaying && isBoxActive) {

        setIsPlaying(true);
        audioEl.currentTime = 0;

        await audioEl.play();
      }
    }, 1);
  }, [audioEl, isBoxActive, isPlaying, setIsPlaying]);

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
      {isBoxActive ? 'pause' : 'play'}
      {/*{waiting ? 'waiting' : ''}*/}
    </Box>
  );
}

export default AudioBox;
