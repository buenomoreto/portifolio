import styled from 'styled-components';
import PropTypes from 'prop-types';

const FloatingTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 20px; 
  transform: translateY(-50%);
  writing-mode: vertical-rl;
  text-orientation: upright;
  text-transform: uppercase;
  z-index: 9999;
  font-size: 10px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 1em;
  text-align: center;
  color: #fff;
  
`;

const Text = styled.p`
  margin: 0;
`;

function FloatingText({ text }) {
  return (
    <FloatingTextContainer>
      <Text className='paragraph'>{text}</Text>
    </FloatingTextContainer>
  );
}

FloatingText.propTypes = {
  text: PropTypes.string.isRequired,
}

export default FloatingText;
