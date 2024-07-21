import "./footer.css"
import InstaIcon from "../../../assets/icons/Ig.png"
import FBIcon from "../../../assets/icons/FB.png"
import TubeIcon from "../../../assets/icons/You tube.png"
import EmailIcon from "../../../assets/icons/Group 61 (1).png"
import LocationIcon from "../../../assets/icons/Group 62.png"
import PhoneIcon from "../../../assets/icons/Group 63.png"

const Footer = () => {

    return(
        <>
         <footer class="footer">
            <div class="footer-container">
                <div class="footer-section">
                    <h2 className="footer-section-head">TrustX</h2>
                    <div class="social-icons">
                        <a href="#" class="social-icon"><img src={InstaIcon} alt="Instagram"/></a>
                        <a href="#" class="social-icon"><img src={FBIcon} alt="Facebook"/></a>
                        <a href="#" class="social-icon"><img src={TubeIcon} alt="YouTube"/></a>
                    </div>
                </div>
            <div className="footer-main">
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Use cases</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                    <div class="footer-section">
                        <h3>Contact Us</h3>
                        <ul>
                            <div className="footer-section-redirects">
                                <img src={EmailIcon} alt="EmailIcon" />
                                <li><a href="mailto:hello@website.com">hello@website.com</a></li>
                            </div>

                            <div className="footer-section-redirects">
                                <img src={LocationIcon} alt="LocationIcon" />
                                <li>838 Cantt Sialkot, ENG</li>
                            </div>

                            <div className="footer-section-redirects">
                                <img src={PhoneIcon} alt="PhoneIcon" />
                                <li>+02 5421234560</li>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )

}

export default Footer