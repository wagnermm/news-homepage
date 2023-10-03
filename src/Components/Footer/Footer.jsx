import './Footer.css';
import Pcs from '../Images/image-retro-pcs.jpg';
import Laptops from '../Images/image-top-laptops.jpg';
import Gaming from '../Images/image-gaming-growth.jpg';

const Footer=()=> {
    return(
        <div>
            <div className='footer'>
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="footer-image">
                            <img src={Pcs} alt="computers"/>
                        </div>
                        <div className="footer-info">
                            <h1>01</h1>
                            <h2>Reviving Retro PCs</h2>
                            <p>What happens when old PCs are given modern upgrades?</p>
                        </div>
                    </div>
                    <div className="footer-content">
                        <div className="footer-image">
                            <img src={Laptops} alt="laptops"/>
                        </div>
                        <div className="footer-info">
                            <h1>02</h1>
                            <h2>Top 10 Laptops of 2022</h2>
                            <p>Our best picks for various needs and budgets.</p>
                        </div>
                    </div>
                    <div className="footer-content">
                        <div className="footer-image">
                            <img src={Gaming} alt="gaming"/>
                        </div>
                        <div className="footer-info">
                            <h1>03</h1>
                            <h2>The Growth of Gaming</h2>
                            <p>How the pandemic has sparked fresh opportunities.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="blank">Frontend Mentor</a>. 
                Coded by <a href="https://www.frontendmentor.io/home" target="blank">Wagner Miranda</a>.
            </div>
        </div>
        )
    }
    export default Footer;