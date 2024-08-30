import logo from "./logo.png";
import { VscBookmark } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
const navigation = () => {
    return (
        <nav className = 'navigation'>
            <img src={logo} alt="logo" /> 
            <ul>
                <li>Chatbot</li>
                <li>Catalog</li>
                <li>Language</li>
                <li>Contact Us</li>
                <li>About Us</li>
            </ul>
            <div className="icons">
                <div style={{display: 'flex', flexDirection: 'column', padding: '10px'}}><VscBookmark style={{ height: '40%', width: 'auto' , cursor:'pointer'}} />Favourites</div>
                <div style={{display: 'flex', flexDirection: 'column', padding: '10px'}}><CgProfile style={{ height: '40%', width: 'auto', cursor:'pointer'}}/>Profile</div>
            </div>
        </nav>
    );
};

export default navigation;
