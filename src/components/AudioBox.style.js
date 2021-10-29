import styled from 'styled-components/macro';

const bg = '#282c34';
const activeBg = '#1DB954';

export const Box = styled.button`
  width: 150px;
  height: 150px;
  background-color: ${({ playing }) => (playing ? activeBg : bg)};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 5px;
  transition: all 0.1s;
  text-transform: none;
  border: none;
  &:hover {
    transform: scale(1.03);
  }
  span {
    transform: none;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  }
  @media (max-width: 700px) {
    width: 30%;
    height: 70px;
    span {
      font-size: 12px;
    }
  }
  @media (max-width: 420px) {
    width: 70%
  }
`;
