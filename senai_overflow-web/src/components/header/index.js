import { Container, IconSingOut } from "./style";
import imgLogo from "../../assents/logo.jpg";

function Header(){
    return(
        <Container>
                <img src={imgLogo}></img>
                <input type="text" placeholder="Pesuisar ..."></input>
                <div>
                    <IconSingOut/>
                </div>
        </Container>
    );
}

export default Header;