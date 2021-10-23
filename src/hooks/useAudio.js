import { useEffect, useState } from 'react';

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggleSound = () => setPlaying(!playing);

  useEffect(() => {
    if (audio) {
      audio.loop = true; // todo: refactor to options
      playing ? audio.play() : audio.pause();
    }
  }, [audio, playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => {
      audio.currentTime = 0;
      setPlaying(false);
      console.log('ENDED', playing)
    });
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio, playing]);

  return [playing, toggleSound];
};

export default useAudio;
