import { useEffect, useState } from 'react';

const useAudio = (url, power) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggleSound = () => setPlaying(!playing);

  useEffect(() => {
    if(!power) {
      setPlaying(false);
      audio.pause();
    }
      if (audio) {
        audio.loop = true; // todo: refactor to options
        playing ? audio.play() : audio.pause();
      }

  }, [audio, playing, power]);

  useEffect(() => {
    audio.addEventListener('ended', () => {
      audio.currentTime = 0;
      setPlaying(false);
    });
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio, playing]);

  return [playing, toggleSound];
};

export default useAudio;
