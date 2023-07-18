import { Container, Section } from './style';
import profile from './img/profile.png'
import profileMobile from './img/profile-mobile.png'
import { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';


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
    <Container className='container'>
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
