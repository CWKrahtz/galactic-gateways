import './App.css';
import HeaderCover from './components/header';
import NavigationBar from './components/navbar';
import Cards from './components/cards';
import Mobile from './components/mobile';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeaderCover /> 
      <Cards />
      <Mobile />
      <Footer />
    </div>
  );
}

export default App;
