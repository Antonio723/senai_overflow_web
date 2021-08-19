import { Container } from "./style";
import imageProfile from "../../assets/image_profile.jpeg";

function Profile() {
    return (
        <Container>
            <img src={imageProfile} alt="#"/>
            <header>
                <strong>Ciclano de tal</strong>
                <strong>Ra:20272599</strong>
                <strong>Ciclano@email.com</strong>
            </header>
            <div>
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="Logo linkdin"/>
                <img src="#" alt="Logo github"/>
                <img src="#" alt="Logo twiter"/>
            </div>
        </Container>
    );
}


export default Profile;