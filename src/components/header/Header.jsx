import styled from 'styled-components';

const Top = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;

  h1 {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.0;
    text-align: center;
    color: #FFFFFFDE;
  }

  b {
    color: #AD6CFF;
  }
`

function Header() {
  return (
    <Top>
      <h1>
        felipebueno
        <b className='emphasis'>;</b>
      </h1>
    </Top>
  );
}

export default Header;
