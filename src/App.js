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
        {sounds?.map((_, i) => {
          const { id, isOn } = sounds[i];
          return <AudioBox id={id} key={id} power={power} isOn={isOn} />;
        })}
      </LooperBox>
    </Container>
  );
}

export default App;
