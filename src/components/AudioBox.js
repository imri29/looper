import { Box } from './AudioBox.style';
import useAudio from '../hooks/useAudio';

function AudioBox({ url, power }) {
  const [playing, toggleSound] = useAudio(url, power);

  return (
    <Box onClick={power ? toggleSound : undefined} playing={playing}>
      {playing ? 'pause' : 'play'}
    </Box>
  );
}

export default AudioBox;
