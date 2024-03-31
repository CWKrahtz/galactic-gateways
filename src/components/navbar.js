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
                            <a href='/'>
                                Home
                            </a>
                        </div>
                    </div>
                    <div className="nav-text-display">
                        <div className="nav-text">Destination</div>
                    </div>
                </div>
                <div className="nav-right-content">
                    <div className="nav-button">Get the App</div>
                </div>

            </div>
        </div>
    );
}

export default NavigationBar;