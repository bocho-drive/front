import * as S from '@/styles/index.style';
import styled, { keyframes } from 'styled-components';
import LogoIcon from '@/assets/icons/icon.png';

const Loading = () => {
  return (
    <Container>
      <Loader />
      <S.div.AbsCenterContainer>
        <S.div.Column $align="center" $justify="center" $gap={5}>
          <Logo src={LogoIcon} alt="Loading" />
          <S.h.H5>Loading</S.h.H5>
        </S.div.Column>
      </S.div.AbsCenterContainer>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto;

  color: white;
`;

const spin = keyframes`
  0% { 
    transform: translate(-50%, -50%) rotate(0deg); 
  }
  100% { 
    transform: translate(-50%, -50%) rotate(360deg); 
  }
`;

const border = keyframes`
    0% { border-top-color: #eb9e34; }
    50% { border-top-color: #34eb3a }
    80% { border-top-color: #eb3434 }
    100% { border-top-color: #eb9e34 }
`;

const Loader = styled.div`
  width: 120px;
  height: 120px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 50%;
  border: 16px solid transparent;
  animation: ${spin} 2s ease-in-out infinite, ${border} 2s linear infinite;
`;

const Logo = styled.img`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  width: 60px;
  height: 60px;
`;
