import Logo from '../Logo/Logo.jsx';
import Button from '../Button/Button.jsx';
import './Header.css';
import { IoSunnyOutline,IoHeartOutline,IoMoonOutline } from "react-icons/io5";

export default function Header (){
    return (
        <>
        <div className="header body-container">
            <Logo/>
            <div className='buttons'>
                <Button icon={IoMoonOutline}>Dark Mode</Button>
                <Button icon={IoHeartOutline}>Favourites</Button>
            </div>
        </div>
        

        </>

    );
}