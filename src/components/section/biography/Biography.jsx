import { 
  Container, 
  Section 
} from './style';
import FloatingText from '../../common/FloatingText';
import Slider from "react-slick";
import ScrollAnimation from 'react-animate-on-scroll';

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
    <Container className='container'>
      <Section className='row'>
        <ScrollAnimation animateIn='bounceInLeft' offset={0} animatePreScroll={false}>
          <div className='desktop'>
            <p className='paragraph'>
              Apaixonado por <strong className='emphasis'>programação</strong> desde cedo, encontrei minha vocação como desenvolvedor web e tenho <strong className='emphasis'>habilidades</strong> em criar uma variedade de sites, blogs e lojas online. Sou especialmente experiente em <strong className='emphasis'>Vue.js</strong> e tenho a <strong className='emphasis'>habilidade</strong> de construir interfaces de usuário elegantes e responsivas. Além disso, também gosto de explorar outras tecnologias, como <strong className='emphasis'>React Native</strong>, e estou sempre buscando expandir minhas <strong className='emphasis'>habilidades</strong> e conhecimentos em <strong className='emphasis'>programação</strong>. 
            </p>
            <p className='paragraph'>
              Meus <strong className='emphasis'>projetos</strong> demonstram minha <strong className='emphasis'>habilidade</strong> em criar soluções criativas e inovadoras para desafios técnicos. Com um compromisso constante em aprimorar minhas <strong className='emphasis'>habilidades</strong> e permanecer atualizado com as tendências e inovações do setor, estou pronto para enfrentar novos desafios e realizar <strong className='emphasis'>projetos</strong> desafiadores com sucesso.
            </p>
          </div>
          <div className='mobile'>
            <Slider {...settings}>
              <p className='paragraph'>
                  Apaixonado por <strong className='emphasis'>programação</strong> desde cedo, encontrei minha vocação como desenvolvedor web e tenho <strong className='emphasis'>habilidades</strong> em criar uma variedade de sites, blogs e lojas online. Sou especialmente experiente em <strong className='emphasis'>Vue.js</strong> e tenho a <strong className='emphasis'>habilidade</strong> de construir interfaces de usuário elegantes e responsivas. Além disso, também gosto de explorar outras tecnologias, como <strong className='emphasis'>React Native</strong>, e estou sempre buscando expandir minhas <strong className='emphasis'>habilidades</strong> e conhecimentos em <strong className='emphasis'>programação</strong>. 
                </p>
                <p className='paragraph'>
                  Meus <strong className='emphasis'>projetos</strong> demonstram minha <strong className='emphasis'>habilidade</strong> em criar soluções criativas e inovadoras para desafios técnicos. Com um compromisso constante em aprimorar minhas <strong className='emphasis'>habilidades</strong> e permanecer atualizado com as tendências e inovações do setor, estou pronto para enfrentar novos desafios e realizar <strong className='emphasis'>projetos</strong> desafiadores com sucesso.
                </p>
            </Slider>
          </div>
        </ScrollAnimation>
        <FloatingText text="BIOGRAFIA" />
      </Section>
    </Container>
  );
}

export default Biography;
