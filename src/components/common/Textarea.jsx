import styled from 'styled-components';

const TextareaContainer = styled.div`
  width: 550px;
  margin-bottom: 10px;
  
  @media (max-width: 1023px) {
    width: 345px;
  }
`;

const TextareaField = styled.textarea`
  width: 100%;
  height: 150px;
  background: #181818;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0em;
  color: #FFFFFF99;
  text-indent: 20px;
  padding-top: 20px;
  border: 1px solid transparent;

  &:hover, &:focus {
    border-color: #AD6CFF;
  }
`;

const Textarea = ({ placeholder }) => {
  return (
    <TextareaContainer>
      <TextareaField placeholder={placeholder} />
    </TextareaContainer>
  );
};

export default Textarea;
