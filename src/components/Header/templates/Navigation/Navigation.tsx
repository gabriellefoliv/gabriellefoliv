import { Li, Menu, NavContainer, NavLogo, NavLogoContainer, Overlay, Tab, Ul } from "./Navigation-style"
import close from '../../../../assets/icon-close.svg'
import hamburguer from '../../../../assets/icon-hamburger.svg'
import { useState } from "react";

function Navigation() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenuActive = () => {
        setMenuActive(!menuActive);
        window.scrollTo(0,0);
    }

    return (
        <>
            <Overlay className={menuActive ? 'active' : ''}/>
                <NavContainer>
                    <NavLogoContainer>
                        <NavLogo href="">Gabrielle Oliveira</NavLogo>
                    </NavLogoContainer>
                    <Ul className={menuActive ? 'active' : 'list'}>         
                        <Li>
                            <Tab href="#about">Sobre Mim</Tab>
                        </Li>
                        <Li>
                            <Tab href="#projects">Projetos</Tab>
                        </Li>
                        <Li>
                            <Tab href="#experience">Experiência</Tab>
                        </Li>
                        <Li>
                            <Tab href="#education">Educação</Tab>
                        </Li>
                    </Ul>
                    <Menu src={menuActive ? close : hamburguer} alt='menu' onClick={toggleMenuActive} className={menuActive ? 'close hamburguer' : 'hamburguer'}/>
                </NavContainer>
        </>
    )
}

export default Navigation