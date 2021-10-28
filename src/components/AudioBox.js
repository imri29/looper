import { useContext } from 'react';
import { Box } from './AudioBox.style';
import useAudio from '../hooks/useAudio';
import { AudioContext } from '../context/AudioProvider';

function AudioBox({ url, id, isOn }) {
  const { power, sounds, toggleSound, playAudio } = useContext(AudioContext);

  const onClick = id => {
    toggleSound(id);
  };

  return (
    <Box onClick={() => onClick(id)} playing={isOn}>
      {isOn ? 'pause' : 'play'}
    </Box>
  );
}

export default AudioBox;
