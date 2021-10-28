// import { useContext, useEffect, useState } from 'react';
// import { AudioContext } from '../context/AudioProvider';
//
// // will get the functionality from context => play, stop, add to array, etc.
//
// const useAudio = (url, id) => {
//   const [audio] = useState(new Audio(url));
//   const [playing, setPlaying] = useState(false);
//   const { tracks, setTracks, power, playAudio } = useContext(AudioContext);
//
//   const manageTracks = () => {
//     if (playing) {
//       audio.pause();
//       setTracks(
//         tracks.map(track => {
//           return track.id !== id;
//         })
//       );
//     } else {
//       setTracks([...tracks, { audio, id, on: true }]);
//     }
//   };
//
//   const toggleSound = () => {
//     setPlaying(!playing);
//     manageTracks();
//   };
//
//   useEffect(() => {
//     if (!power) {
//       setPlaying(false);
//       audio.pause();
//     }
//     playing && playAudio(id);
//   }, [id, playAudio, playing]);
//
//   return [playing, toggleSound];
// };
//
// /*const useAudio = (url, power) => {
//   const [audio] = useState(new Audio(url));
//   const [playing, setPlaying] = useState(false);
//
//   const toggleSound = () => setPlaying(!playing);
//
//   useEffect(() => {
//     if(!power) {
//       setPlaying(false);
//       audio.pause();
//     }
//       if (audio) {
//         audio.loop = true; // todo: refactor to options
//         playing ? audio.play() : audio.pause();
//       }
//
//   }, [audio, playing, power]);
//
//   useEffect(() => {
//     audio.addEventListener('ended', () => {
//       audio.currentTime = 0;
//       setPlaying(false);
//     });
//     return () => {
//       audio.removeEventListener('ended', () => setPlaying(false));
//     };
//   }, [audio, playing]);
//
//   return [playing, toggleSound];
// };*/
//
// export default useAudio;
