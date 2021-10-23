import { useState } from 'react';
import AudioBox from './components/AudioBox';
import { LooperBox, Container } from './App.style';
import * as soundMoules from './sounds';
import './index.css';

function App() {
  // const [matrix, setMatrix] = useState(new Array(9).fill(<AudioBox />));
  const sounds = Object.values(soundMoules);

  return (
    <Container>
      <LooperBox>
        {new Array(9).fill('').map((_, i) => {
          const url = sounds[i];
          return <AudioBox url={url} key={url} />;
        })}
      </LooperBox>
    </Container>
  );
}

export default App;
