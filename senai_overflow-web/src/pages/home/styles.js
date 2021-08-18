import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const GistIcon = styled(FaGithub)`
    font-size: 40px;
    
    cursor: pointer;
    transition: .2s;

    :hover{
        color: var(--primary);
    }
`;

export const Main = styled.main`
    margin-top: 60px;

    display: grid;
    grid-template-columns: 20% 60% 20%;
`;

export const FeedContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    gap: 10px;
    padding: 10px;

    border: 1px dashed gray;
`;

export const Post = styled.article`
    width: 80%;
    min-height: 100px;
    padding: 10px;

    box-shadow: 0px 10px 10px rgba(0,0,0,0.25);

    > header {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;

        > img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
        }

        > div {
            gap: 5px;    
            font-size: 18px;

            > p {
                font-size: 14px;
                color: var(--textGray);
            }
        }
    }
`;