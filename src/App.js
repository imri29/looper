import { useContext } from 'react';
import AudioBox from './components/AudioBox';
import { LooperBox, Container } from './App.style';
import './index.css';
import { AudioContext } from './context/AudioProvider';

function App() {
  const { sounds, togglePower, power } = useContext(AudioContext);

  return (
    <Container>
      <button onClick={togglePower}>{power ? 'off' : 'on'}</button>
      <LooperBox>
        {sounds.current?.map((_, i) => {
          const { id, audio } = sounds.current[i];
          return <AudioBox audioEl={audio} id={id} key={id} />;
        })}
      </LooperBox>
    </Container>
  );
}

export default App;
