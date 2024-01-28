import { HeaderContainer } from "./Header-style";
import AboutMe from "./templates/AboutMe/AboutMe";
import Navigation from "./templates/Navigation/Navigation";
// import BackgroundUpImg from "../../assets/BackgroundUp.png";

function Header() {
    return(
        <HeaderContainer>
            {/* <BgImg src={BackgroundUpImg}/> */}
            <Navigation/>
            <AboutMe/>
        </HeaderContainer>
    )
}

export default Header