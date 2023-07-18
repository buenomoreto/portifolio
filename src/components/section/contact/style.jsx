import styled, { keyframes } from 'styled-components';

const Container = styled.section`
  background-color: #1D1D1D;
  padding: 70px 0px;

  @media (max-width: 1023px) {
    padding: 60px 0;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 36px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.87);
  }

  p {
    max-width: 500px;
  }
  
  @media (max-width: 1023px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;

    h2 {
      font-size: 20px;
    }
    
    p {
      font-size: 12px;
      max-width: 240px;
    }
  }
`;

const DivIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

const MessageContainer = styled.div`
  position: fixed;
  bottom: 120px;
  right: 20px;
  z-index: 9999;

  @media (max-width: 1023px) {
    bottom: 80px;
  }
`;

const Message = styled.p`
  padding: 20px;
  font-size: 14px;
  border-radius: 5px;
  background-color: #181818;
  color: #fff;
  width: 240px;
  text-align: center;
  border-bottom: 6px solid ${props => props.success == 'true' ? '#4CAF50' : '#FF5252'};
  animation: ${slideIn} 0.5s forwards;
  transform: translateX(100%);
`;

export { Container, Section, DivIcons, Message, MessageContainer };