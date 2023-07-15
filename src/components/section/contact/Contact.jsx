import styled from 'styled-components';
import FloatingText from '../../common/floatingText';
import Input from '../../common/Input';
import Textarea from '../../common/Textarea';
import Button from '../../common/Button';
import Facebook from './img/facebook.svg';
import Instagram from './img/instagram.svg';
import Linkedin from './img/linkedin.svg';

const Container = styled.section`
  background-color: #1D1D1D;
  padding: 70px 0px;

  @media (max-width: 1023px) {
    padding: 60px 0;
  }
`
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
`
const inputs = [
  {type: 'text', placeholder: 'Nome'}, 
  {type: 'text', placeholder: 'Tipo de projeto'}, 
  {type: 'email', placeholder: 'E-mail'},  
]

function Contact() {
  return (
    <Container className='section'>
      <Section className='row'>
        <div>
          <h2>
            Vamos trabalhar juntos!
          </h2>
          <p className='paragraph'>
            Entre em contato comigo por <b className='emphasis'>e-mail</b> ou por <br/> 
            minhas <b className='emphasis'>redes sociais</b>.
          </p>
          <DivIcons>
            <a 
              target="_blank" 
              rel="noreferrer"
              href="https://www.facebook.com/felipe.moreto.9"
            >
              <img src={Facebook} alt="facebook" />
            </a>
            <a 
              target="_blank" 
              href="https://www.instagram.com/felype_moretto/" 
              rel="noreferrer"
            >
              <img src={Instagram} alt="instagram" />
            </a>
            <a 
              target="_blank" 
              href="https://www.linkedin.com/in/felipe-bueno-a58912198/" 
              rel="noreferrer"
            >
              <img src={Linkedin} alt="linkedin" />
            </a>
          </DivIcons>
        </div>
        <div>
          <form>
            {
              inputs.map((input) => <Input type={input.type} placeholder={input.placeholder} />)
            }
            <Textarea placeholder="Digite sua mensagem" />
            <Button>Enviar</Button>
          </form>
        </div>
        { window.innerWidth > 768 &&  <FloatingText text="Contato"  /> }
      </Section>
    </Container>
  );
}

export default Contact;
