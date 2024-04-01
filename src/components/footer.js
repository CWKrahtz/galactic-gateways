import './footer.css'
import Logo from '../images/Logo.png'
import Instagram from '../images/icons/instagram.png'
import TikTok from '../images/icons/tiktok.png'
import Facebook from '../images/icons/facebook.png'
import X from '../images/icons/twitter.png'

function Footer() {

    return (
        <div className='footer-container' id='form'>
            <div className='footer-footer-container'>
                <div className='footer-footer-left'>
                    <a href='#header'><img className='footer-footer-logo' src={Logo} alt='Logo' /></a>
                    <a href='https://github.com/CWKrahtz/galactic-gateways'><div><span className='footer-footer-container-text'>Christian Krahtz</span><span className='footer-footer-container-copy'> © 2024</span></div></a>
                </div>
                <div className='footer-footer-right'>
                    <div className='footer-footer-links-display'>
                        <div id='links' className='footer-footer-links'>Links</div>
                        <a href='#header'><div className='footer-footer-links'>Home</div></a>
                        <a href='#destination'><div className='footer-footer-links'>Destinations</div></a>
                        <a href='#mobile'><div className='footer-footer-links'>Mobile App</div></a>
                    </div>
                </div>
                <div className='footer-footer-icons'>
                    <div className='footer-footer-icons-text'>Follow Us</div>
                    <div className='footer-footer-icons-content'>
                        <a href='https://www.instagram.com/'><img className='footer-footer-icons-image' src={Instagram} alt="Instagram" /></a>
                        <a href='https://www.tiktok.com/en/'><img className='footer-footer-icons-image' src={TikTok} alt="TikTok" /></a>
                        <a href='https://www.facebook.com/'><img className='footer-footer-icons-image' src={Facebook} alt="Facebook" /></a>
                        <a href='https://twitter.com/?lang=en'><img className='footer-footer-icons-image' src={X} alt="X" /></a>
                    </div>
                </div>
            </div>
            <div className='footer-form-container'>
                <div className='footer-form-content'>
                    <div className='footer-form-heading'>SUBSCRIBE TO STAY UPDATED</div>
                    <div className='footer-form'>
                        <input className='footer-form-name' type='text' name='name' placeholder='Space Traveller Name' />
                        <input className='footer-form-email' type='text' name='email' placeholder='Contact Email Address' />
                        <button className='footer-form-button'>Join Newsletter</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;