import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
`;

export const Title = styled.h1`
  color: aliceblue;
  margin-bottom: 40px;
`

export const LooperBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 600px;
  gap: 10px;
  @media(max-width: 700px){
    max-width: 80%;
  }
`;
