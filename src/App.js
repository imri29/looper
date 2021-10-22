import { useState } from 'react';
import AudioBox from './components/AudioBox';
import { LooperBox, Container } from './App.style';
import './index.css'

function App() {
  const [matrix, setMatrix] = useState(new Array(9).fill(<AudioBox />));

  return (
    <Container>
      <LooperBox>{matrix}</LooperBox>
    </Container>
  );
}

export default App;
