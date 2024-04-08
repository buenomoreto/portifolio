import { Container, Section } from './style';
import profile from './img/profile.png'
import profileMobile from './img/profile-mobile.png'
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from 'react-animate-on-scroll';
function Presentation() {
  return (
    <Container className='container'>
      <ScrollAnimation animateIn='bounceInDown' offset={0} animatePreScroll={false}>
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
            Desenvolvedor web com 4 anos de <br/> 
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
      </ScrollAnimation>

    </Container>
  );
}

export default Presentation;
