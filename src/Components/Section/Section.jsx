import './Section.css';
import Banner from '../Images/image-web-3-desktop.jpg';

const Section=()=> {
    return (
        <div className="container">
            <div className="template">
                <div className="banner">
                    <img src={Banner} alt="banner" />
                </div>
                <div className="template-info">
                    <div class="featured">
                        <h1>The Bright Future of Web 3.0?</h1>
                    </div>
                    <div className="readMore">
                        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                        But is it really fulfilling its promise?</p>
                        <button class="btn">Read more</button>
                    </div>
                </div>
            </div>
            <div className="news">
                <h2>New</h2>
                <div className="box-news">
                    <h3>Hydrogen VS Electric Cars</h3>
                    <h4>Will hydrogen-fueled cars ever catch up to EVs?</h4>
                </div>
                <div className="box-news">
                    <h3>The Downsides of AI Artistry</h3>
                    <h4>What are the possible adverse effects of on-demand AI image generation?</h4>
                </div>
                <div className="box-news-last">
                    <h3>Is VC Funding Drying Up?</h3>
                    <h4>Private funding by VC firms is down 50% YOY. We take a look at what that means.</h4>
                </div>
            </div>
        </div>
        )
    }
    export default Section