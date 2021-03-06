import Header from "../../components/Header";
import Coments from "../../components/Coments";
import { FeedContainer, GistIcon, Main, Post } from "./styles";
import Profile from "../../components/profile/";

function Home() {
    return (
        <>
            <Header />
            <Main>
                <Profile>
                    Profile
                </Profile>
                <FeedContainer>
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </FeedContainer>
                <aside>
                    Actions
                </aside>
            </Main>
        </>
    );
}



function PostCard() {
    return (
        <Post>
            <Header>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                <div>
                    <strong>
                        por Fulano de tal
                    </strong>
                    <p>
                        em 18/08/2021 às 8:23
                    </p>
                </div>
                <GistIcon />
            </Header>
            <main>
                <div>
                    <h1>Título</h1>
                    <p>Descrição da postagem bla bla bla</p>
                </div>
                <img src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp" />
                <section>
                    <p>Front-end</p>
                    <p>CSS</p>
                    <p>JS</p>
                </section>
            </main>
            <footer>
                <h2>Comentários</h2>
                <Coments />
            </footer>
        </Post>
    )
}

export default Home;