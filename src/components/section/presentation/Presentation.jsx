import styled from 'styled-components';
import bg from './img/background.svg';
import profile from './img/profile.png'
import profileMobile from './img/profile-mobile.png'
import { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

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


function Presentation() {
  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const root = document.documentElement;
    root.style.setProperty('--scroll-y', `${scrollY}px`);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container className='section'>
      <Section className='row'>
        <h1>
          <TypeAnimation
            sequence={[
              'Olá, sou Felipe Bueno!',
              1000,
              '...',
              1000,
              'Conheça mais sobre mim!',
              1000,
              'Contrate meus serviços!',
              1000,
              '...',
              1000,
            ]}
            speed={30}
            repeat={Infinity}
          />
        </h1>
        <p className='paragraph'>
          Desenvolvedor web com 3 anos de <br/> 
          experiência em  
          <span className='emphasis'>
            JavaScript
          </span>
          e
          <span className='emphasis'>
            Vue.js
          </span>
        </p>
        <img src={profile} alt="Profile" className='desktop' />
        <img src={profileMobile} alt="Profile" className='mobile' />
      </Section>
    </Container>
  );
}

export default Presentation;
