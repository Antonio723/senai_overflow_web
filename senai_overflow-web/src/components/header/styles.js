import styled from "styled-components";
import { FaSignOutAlt } from "react-icons/fa";

export const Container = styled.header`
    width: 100vw;
    height: 60px;
    position: fixed;
    top: 0;
    padding: 0px 30px 0px 10px;

    background-color: var(--primary);

    display: flex;
    align-items: center;
    justify-content: space-between;

    > img{
        width: 120px;
        margin-left: 10px;
    }

    > input {
        width: 696px;
        height: 43px;

        border-radius: 15px;
        border: none;
        font-size: 22px;
        padding-left: 30px;
    }
`;

export const IconSignOut = styled(FaSignOutAlt)`
    color: white;
    margin-right: 10px;
    font-size: 25px;

    cursor: pointer;

    :hover{
        transform: scale(1.1) rotate(360deg);
        transition: .2s;
    }
`;