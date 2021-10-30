import { useContext } from 'react';
import AudioBox from './components/AudioBox';
import { LooperBox, Container, Title } from './App.style';
import { AudioContext } from './context/AudioProvider';
import PowerButton from './components/PowerButton';
import './index.css';

function App() {
  const { sounds, togglePower, power } = useContext(AudioContext);

  return (
    <>
      <Title>Looper</Title>
      <Container>
        <PowerButton onClick={togglePower} power={power}>
          {power ? 'off' : 'on'}
        </PowerButton>
        <LooperBox>
          {sounds.current?.map(sound => {
            const { id, audio, name } = sound;
            return <AudioBox audioEl={audio} id={id} name={name} key={id} />;
          })}
        </LooperBox>
      </Container>
    </>
  );
}

export default App;
