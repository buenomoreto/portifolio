import {
  Container,
  Section,
  DivSlider
} from './styles';
import Slider from "react-slick";
import FloatingText from '../../common/floatingText';
import { technology } from './technology';
import PropTypes from 'prop-types';


const SliderComponent = ({ technology }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <Slider {...settings}>
      {technology.map((item, index) => (
        <div key={index}>
          <DivSlider backgroundimage={item.image}>
            <div className='bg'  />
            <div>
              <h2>{item.title}</h2>
              <p className='paragraph' dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>
            <img src={item.image} alt={item.title} />
          </DivSlider>
        </div>
      ))}
    </Slider>
  );
};

SliderComponent.propTypes = {
  technology: PropTypes.array.isRequired,
};

function Skills() {
  return (
    <Container className='container'>
      <Section className='row'>
        <SliderComponent technology={technology} />
        <FloatingText text="HABILIDADES" />
      </Section>
    </Container>
  );
}

export default Skills;
