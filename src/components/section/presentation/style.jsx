
import styled from 'styled-components';
import bg from './img/background.svg';

const Container = styled.section`
  background-color: #181818;   
`
const Section = styled.div`
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: calc(50% - 0.5 * var(--scroll-y));

  h1 {
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
    margin-bottom: 10px;
  }

  p {
    span {
      margin: 0 3px;
    }
  }

  span {
    font-weight: 700;
  }

  img {
    position: absolute;
    top: 50%; right: 50%;
    transform: translate(50%,-50%);
  }

  .mobile {
    display: none;
  }

  @media(max-width: 1023px) {
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    min-height: 475px;

    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
    h1 {
      font-size: 24px;
    }
  }
`;

export {
  Container,
  Section
}