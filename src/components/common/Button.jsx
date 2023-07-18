import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonElement = styled.button`
  width: 550px;
  height: 45px;
  border: 1px solid #AD6CFF;
  background: #1D1D1D;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: #FFFFFFDE;    
  transition: 1s;
  
  &:hover {
    box-shadow: inset 100em 0 0 0  #AD6CFF;
  }

  @media (max-width: 1023px) {
    width: 345px;
  }
`;

const Button = ({ children, takeAction }) => {
  return <ButtonElement onClick={takeAction}>{children}</ButtonElement>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  takeAction: PropTypes.func.isRequired
};

export default Button;
