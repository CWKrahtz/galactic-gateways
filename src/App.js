import './App.css';
import './components/header.css';
import HeaderCover from './components/header';
import NavigationBar from './components/navbar';
// import headerIMG from './images/Header_background.png';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeaderCover /> 
      {/* <div className="header-outer-content"> */}
      {/* <div className="header-content">
        <div className="header-question">Tired Of Global Warming?</div>
        <div className="header-heading">VISIT A <br />DIFFERENT PLANET</div>
        <div className="header-paragragh">Welcome to Celestial Voyages, where your dreams of interplanetary exploration come to life. Join us in venturing beyond the stars, discovering the wonders of otherworldly landscapes.</div>
        <div className="header-button-content">
          <div className="header-button-des">Destination</div>
          <div className="header-button-sign">Stay up to date</div>
        </div>
      </div> */}
      {/* </div> */}
    </div>
  );
}

export default App;
