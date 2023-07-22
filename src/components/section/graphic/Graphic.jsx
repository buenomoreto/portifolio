import FloatingText from '../../common/floatingText';
import {
  Container, 
  Section, 
  GraphicsFlex, 
  GraphicsContainer, 
  GraphicsItems
} from './style';

const technology = ['VUE JS', 'REACT', 'CSS', 'HTML', 'JAVASCRIPT', 'NODEJS', 'TYPESCRIPT'];
const heights = [95, 85, 100, 100, 95, 90, 80];

function Graphic() {
  return (
    <Container className='container'>
      <Section className='row'>
        <GraphicsFlex>
          <GraphicsContainer>
            {technology.map((item, index) => (
              <GraphicsItems key={index} height={heights[index % heights.length]}>
                <span>{item}</span>
              </GraphicsItems>
            ))}
          </GraphicsContainer>
        </GraphicsFlex>
        <div className="desktop">
          <FloatingText text="GRÁFICO"  />
        </div>
      </Section>
    </Container>
  );
}

export default Graphic;
