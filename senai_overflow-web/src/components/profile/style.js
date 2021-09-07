import styled from "styled-components";

export const Container = styled.nav`
    width: 250px;
    height:590px;
    background-color:blue;

    padding: 40px 10px 0px 10px;
    display: flex;
    align-items:center;
    flex-direction: column;


    >img{
        width: 190px;
        height: 190px;u

        border-radius: 50%;
    }
    
    >header{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        font-size: 18px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;

        margin: 22px 0px 60px 0px;
    }

    >div >img{
        width: 20px;
    }

`