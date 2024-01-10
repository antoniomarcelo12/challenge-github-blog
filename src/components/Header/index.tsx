import { HeaderContainer } from "./styles";

import headerBackgroundImage from '../../assets/header-background.svg'
import logoImage from '../../assets/logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <img className="headerbackgroundimage" src={headerBackgroundImage} alt="" />
            <img className="logoimage" src={logoImage} alt="" />
        </HeaderContainer>
    );
}