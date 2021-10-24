import { useState } from 'react';
import AudioBox from './components/AudioBox';
import { LooperBox, Container } from './App.style';
import * as soundModules from './sounds';
import './index.css';

function App() {
  // const [matrix, setMatrix] = useState(new Array(9).fill(<AudioBox />));
  const [power, setPower] = useState(true)
  const sounds = Object.values(soundModules);

  const togglePower = () => {
    setPower(!power)
  }


  return (
    <Container>
      <button onClick={togglePower}>{power ? 'off' : 'on'}</button>
      <LooperBox>
        {new Array(9).fill('').map((_, i) => {
          const url = sounds[i];
          return <AudioBox url={url} key={url} power={power} />;
        })}
      </LooperBox>
    </Container>
  );
}

export default App;
