import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

const Container = styled.div`
  margin:auto;
  display:block;
  display: flex;
  justify-content:center;
  margin-top:10em;
`
const DotWrapper = styled.div`
  
  display: flex;
  align-items: flex-end;
`;
const Dot = styled.div`
  background-color: pink;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;
class LoadingDots extends Component {
  render() {
    return (
      <Container>
        <DotWrapper>
            <Dot delay="0s" />
            <Dot delay=".1s" />
            <Dot delay=".2s" />
        </DotWrapper>
      </Container>
    )
  }
}
export default LoadingDots