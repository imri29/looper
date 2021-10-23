import { Box } from './AudioBox.style';
import useAudio from '../hooks/useAudio';

function AudioBox({ url }) {
  const [playing, toggleSound] = useAudio(url);

  return (
    <Box onClick={toggleSound} playing={playing}>
      {playing ? 'pause' : 'play'}
    </Box>
  );
}

export default AudioBox;
