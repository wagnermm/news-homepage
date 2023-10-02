import './Header.css';
import Logo from '../Images/logo.svg';
const Header=()=> {
    return (
        <div className="header">
            <div className="logo">
                <img src={Logo} alt="logo"/>
            </div>
            <nav className="nav-bar">
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="#news">New</a></li>
                    <li><a href="#popular">Popular</a></li>
                    <li><a href="#trending">Trending</a></li>
                    <li><a href="#categories">Categories</a></li>
                </ul>
            </nav>
        </div>  
        )
    }
export default Header