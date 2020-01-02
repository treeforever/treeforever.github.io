import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 300px;
  border-radius: 5px;
  // background: #f0f4c3;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  &:after {
    content: '';
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom,#fbdee7,rgba(221,238,255,0) 20%,rgba(255,255,255,0.5));
    z-index: 11;
    transform: translate3d(0, 0, 0);
  }
`;
const driftAnimation = `
  @keyframes drift {
    from { transform: rotate(0deg); }
    from { transform: rotate(360deg); }
  }
`
const waveStyle = `
  opacity: .4;
  position: absolute;
  top: 3%;
  background: #0af;
  width: 200vw;
  height: 200vw;
  margin-left: -50vw;
  margin-top: -190vw;
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: drift 9000ms infinite linear;
  ${driftAnimation}
`
const WaveOne = styled.div`${waveStyle}`
const WaveTwo = styled.div`
  ${waveStyle}
  animation: drift 13000ms infinite linear;
  opacity: .1;
  // background: yellow;
  ${driftAnimation}
`
const WaveThree = styled.div`
  ${waveStyle}
  animation: drift 11000ms infinite linear;
  ${driftAnimation}
`

export default () => (
  <Container className='box'>
    <WaveOne className='wave -one'></WaveOne>
    <WaveTwo className='wave -two'></WaveTwo>
    <WaveThree className='wave -three'></WaveThree>
  </Container>
)

