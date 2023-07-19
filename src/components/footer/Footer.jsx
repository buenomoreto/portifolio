import styled from 'styled-components';
import Arrow from './img/arrow-top.svg';

const StyledFooter = styled.footer`
  background: #181818;
  width: 100%;
  height: 100px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: #FFFFFF99;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  b {
    font-weight: bold;
    color: #AD6CFF;
  }

  .scrollToTopButton {
    width: 45px;
    height: 45px;
    background: #AD6CFF;
    color: #fff;
    position: absolute;
    position: absolute;
    top: 0%; right: 50%;
    transform: translate(50%,-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const currentYear = new Date().getFullYear();

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <StyledFooter>
      <div className="scrollToTopButton" onClick={handleScrollToTop}>
        <img src={Arrow} alt="Top web site" />
      </div>
      <span>FELIPE BUENO <strong className='emphasis'>©{currentYear}</strong></span>
      </StyledFooter>
  );
}

export default Footer;
