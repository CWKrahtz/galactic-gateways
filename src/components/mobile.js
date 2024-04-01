import './mobile.css';
import Phone from '../images/Apple iPhone 15 Pro White Titanium 1.png'
import Astro from '../images/astro.png'

function Mobile() {

    return (
        <div className='mobile-container'>
            <div className='mobile-header'>THE STARS IN YOUR POCKET... Coming soon</div>
            <div className='mobile-text'>We are very excited to launch our very own Celestial Voyages mobile application coming soon to the App Store & Google Play Store.</div>
            <img className='mobile-image-frame' src={Phone} alt='Mobile Screen' />
            <img className='mobile-image-astro' src={Astro} alt='Astro Man' />
        </div>
    )
}

export default Mobile;