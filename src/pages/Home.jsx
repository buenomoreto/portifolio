import Biography from "../components/section/biography/Biography";
import Contact from "../components/section/contact/Contact";
import Graphic from "../components/section/graphic/Graphic";
import Presentation from "../components/section/presentation/Presentation";
import Skills from "../components/section/skills/Skills";

function Home() {
  return (
    <>
      <Presentation />
      <Biography />
      <Skills />
      <Graphic />
      <Contact />
    </>
  );
}

export default Home;
