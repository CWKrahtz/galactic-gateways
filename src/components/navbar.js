import './navbar.css';
import Logo from '../images/Logo.png';

function NavigationBar() {

    const handleMouseEnter = () => {
        document.getElementById('home-hover').classList.add('hover-block');
    };
    const handleMouseLeave = () => {
        document.getElementById('home-hover').classList.remove('hover-block');
    };

    const handleMouseEnterD = () => {
        document.getElementById('destination-hover').classList.add('hover-block');
    };
    const handleMouseLeaveD = () => {
        document.getElementById('destination-hover').classList.remove('hover-block');
    };

    return (
        <div className="nav-outer-container">
            <div className="nav-inner-container">
                <div className="nav-left-content">
                    <img className="nav-image" src={Logo} alt="Logo" />
                    <div className="nav-text-display" id='homeNav' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <a href='#header'>
                            <div className="nav-text">Home</div>
                        </a>
                        <div className='' id='home-hover'></div>
                    </div>
                    <div className="nav-text-display" id='destNav' onMouseEnter={handleMouseEnterD} onMouseLeave={handleMouseLeaveD}>
                        <a href='#destination'>
                            <div className="nav-text">Destination</div>
                        </a>
                        <div className='' id='destination-hover'></div>
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