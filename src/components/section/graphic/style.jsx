import styled from 'styled-components';

const Container = styled.section`
  background-color: #181818;  
  padding: 160px 0px;
  
  @media (max-width: 1023px) {
    padding: 40px 0;

    .desktop {
      display: none;
    }
  }
`
const Section = styled.div`
  display: flex;
  justify-content: center;

  p {
    max-width: 600px;
  }

`;
const GraphicsFlex = styled.div`
  width: 356px;
  height: 370px;

  @media (max-width: 1023px) {
    width: 320px;
    height: 280px;
  }
`;

const GraphicsContainer = styled.div`
  background: linear-gradient(180deg, rgba(162, 89, 255, 0.1) 0%, rgba(24, 24, 24, 0.1) 100%);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  gap: 1px;
`;

const GraphicsItems = styled.div`
  position: relative;
  width: 50px;
  height: ${({ height }) => height ? `${height}%` : 'auto'};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin-bottom: 10px;
  overflow: hidden;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1em;
    text-align: center;
    color: #fff;
    writing-mode: vertical-rl;
    text-orientation: upright;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle, rgba(162, 89, 255) 0, transparent 100%);
    background-position: 0 0;
    background-size: 200% 200%;
    animation: waterEffect 3s infinite linear;
  }

  @keyframes waterEffect {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0 0;
    }
  }

`;

export { 
  Container, 
  Section, 
  GraphicsFlex, 
  GraphicsContainer, 
  GraphicsItems
};