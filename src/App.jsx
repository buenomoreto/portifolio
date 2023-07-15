import Home from './pages/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import GlobalStyles from './assets/styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Header />
        <Home />
        <Footer/> 
      </div>
    </>
  );
}

export default App;
