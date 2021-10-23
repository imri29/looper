import styled from 'styled-components';

const bg = '#282c34';
const activeBg = '#1DB954';

export const Box = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${({ playing }) => (playing ? activeBg : bg)};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
