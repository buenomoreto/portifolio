import { 
  Container, 
  Section 
} from './style';
import FloatingText from '../../common/floatingText';
import Slider from "react-slick";


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
