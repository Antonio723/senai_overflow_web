import Header from "../../components/Header";
import { FeedContainer, GistIcon, Main, Post } from "./styles";

function Home() {
    return (
        <>
            <Header />
            <Main>
                <nav>
                    Profile
                </nav>
                <FeedContainer>
                    <Post>
                        <header>
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
                        </header>
                        <main>
                            <div>
                                <h1>Título</h1>
                                <p>Descrição da postagem bla bla bla</p>
                            </div>
                            <img src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp" />
                            <div>
                                <p>Front-end</p>
                                <p>CSS</p>
                                <p>JS</p>
                            </div>
                        </main>
                        <footer>
                            <h2>Comentários</h2>
                            <div>
                                <header>
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                                    <div>
                                        <strong>
                                            por Fulano de tal
                                        </strong>
                                        <p>
                                            em 18/08/2021 às 8:23
                                        </p>
                                    </div>
                                </header>
                                <p>Este é o comentário</p>
                            </div>
                        </footer>
                    </Post>
                </FeedContainer>
                <aside>
                    Actions
                </aside>
            </Main>
        </>
    );
}

export default Home;