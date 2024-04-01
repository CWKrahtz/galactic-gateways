import './navbar.css';
import Logo from '../images/Logo.png';

function NavigationBar() {
    return (
        <div className="nav-outer-container">
            <div className="nav-inner-container">
                <div className="nav-left-content">
                    <img className="nav-image" src={Logo} alt="Logo" />
                    <div className="nav-text-display">
                        <div className="nav-text">
                            <a href='#header'>
                                Home
                            </a>
                        </div>
                    </div>
                    <div className="nav-text-display">
                        <a href='#destination'>
                            <div className="nav-text">Destination</div>
                        </a>
                    </div>
                </div>
                <div className="nav-right-content">
                    <a href='#mobile'>
                        <div className="nav-button">Get the App</div>
                    </a>

                </div>

            </div>
        </div>
    );
}

export default NavigationBar;