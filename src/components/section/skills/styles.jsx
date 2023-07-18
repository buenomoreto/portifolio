import styled from 'styled-components';

const Container = styled.section`
  background-color: #1D1D1D;
  padding: 55px 130px;

  @media (max-width: 1023px) {
    padding: 0px 0;
    min-height: 420px;
  }
`;

const Section = styled.div`
  p {
    max-width: 600px;
  }
  h2 {
    font-size: 36px;
    font-weight: 700;
    text-align: left;
    color: rgba(255, 255, 255, 0.87);
    margin-bottom: 30px;
  }
  b {
    color: #AD6CFF;
  }

  @media (max-width: 1023px) {
    p {
      font-size: 12px;
      max-width: 280px;
    }
    h2 {
      font-size: 20px;
      margin-bottom: 10px;
    }
    .slick-dots {
      bottom: 25px;
      left: 10%;
    }
  }
`;

const DivSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    display: block;
  }
  .bg {
    display: none;
  }
  @media (max-width: 1023px) {
    min-height: 420px;
    justify-content: center;
    
    .bg {
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background: url(${props => props.backgroundimage}) no-repeat;
      background-position: center;
      background-size: contain;
      opacity: 10%;
      display: block;
    }

    img {
      display: none;
    }
    div {
      z-index: 5;
    }
  }
`;

export {
  Container,
  Section,
  DivSlider
}