import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputContainer = styled.div`
  width: 550px;
  height: 45px;
  margin-bottom: 10px;
  
  @media (max-width: 1023px) {
    width: 345px;
  }
`;

const InputField = styled.input`
  width: 100%;
  height: 100%;
  background: #181818;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0em;
  color: #FFFFFF99;
  text-indent: 20px;
  border: 1px solid transparent;

  &:hover, &:focus {
    border-color: #AD6CFF;
  }

`;

const Input = ({ type, placeholder }) => {
  return (
    <InputContainer>
      <InputField type={type} placeholder={placeholder} />
    </InputContainer>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default Input;
