import styled from 'styled-components';
import FloatingText from '../../common/floatingText';
import Slider from "react-slick";

const Container = styled.section`
  background-color: #181818;  
  padding: 160px 130px;

  @media (max-width: 1023px) {
    padding: 0px 0px;
  }
`
const Section = styled.div`
 
  p {
    max-width: 500px;
  }

  .mobile {
    display: none;
  }
  .desktop {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  @media (max-width: 1023px) {
    display: block;
    flex-wrap: wrap;
    padding: 40px 0px;

    .mobile {
      display: block;
      max-width: 290px;
      margin: 0 auto;
    }
    .desktop {
      display: none;
    }
    p {
      font-size: 12px;
    }
  }
`;

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

function Biography() {
  return (
    <Container className='section'>
      <Section className='row'>
        <div className='desktop'>
          <p className='paragraph'>
            Apaixonado por <b className='emphasis'>programação</b> desde cedo, encontrei minha vocação como desenvolvedor web e tenho <b className='emphasis'>habilidades</b> em criar uma variedade de sites, blogs e lojas online. Sou especialmente experiente em <b className='emphasis'>Vue.js</b> e tenho a <b className='emphasis'>habilidade</b> de construir interfaces de usuário elegantes e responsivas. Além disso, também gosto de explorar outras tecnologias, como React Native, e estou sempre buscando expandir minhas <b className='emphasis'>habilidades</b> e conhecimentos em <b className='emphasis'>programação</b>. 
          </p>
          <p className='paragraph'>
            Meus <b className='emphasis'>projetos</b> demonstram minha <b className='emphasis'>habilidade</b> em criar soluções criativas e inovadoras para desafios técnicos. Com um compromisso constante em aprimorar minhas <b className='emphasis'>habilidades</b> e permanecer atualizado com as tendências e inovações do setor, estou pronto para enfrentar novos desafios e realizar <b className='emphasis'>projetos</b> desafiadores com sucesso.
          </p>
        </div>
        <div className='mobile'>
          <Slider {...settings}>
            <p className='paragraph'>
                Apaixonado por <b className='emphasis'>programação</b> desde cedo, encontrei minha vocação como desenvolvedor web e tenho <b className='emphasis'>habilidades</b> em criar uma variedade de sites, blogs e lojas online. Sou especialmente experiente em <b className='emphasis'>Vue.js</b> e tenho a <b className='emphasis'>habilidade</b> de construir interfaces de usuário elegantes e responsivas. Além disso, também gosto de explorar outras tecnologias, como React Native, e estou sempre buscando expandir minhas <b className='emphasis'>habilidades</b> e conhecimentos em <b className='emphasis'>programação</b>. 
              </p>
              <p className='paragraph'>
                Meus <b className='emphasis'>projetos</b> demonstram minha <b className='emphasis'>habilidade</b> em criar soluções criativas e inovadoras para desafios técnicos. Com um compromisso constante em aprimorar minhas <b className='emphasis'>habilidades</b> e permanecer atualizado com as tendências e inovações do setor, estou pronto para enfrentar novos desafios e realizar <b className='emphasis'>projetos</b> desafiadores com sucesso.
              </p>
          </Slider>
        </div>
        <FloatingText text="BIOGRAFIA" />
      </Section>
    </Container>
  );
}

export default Biography;
