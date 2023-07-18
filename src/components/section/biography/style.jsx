import styled from 'styled-components';

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

export { Container, Section};