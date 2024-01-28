import styled from "styled-components";

export const AboutContainer = styled.div`
    /* width: 1000px;
    height: 300px; */
    /* width: 80%; */
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 60px 250px;
    padding: 25px 25px;
    border-radius: 22px;
    
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */


    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
     

    }
`;

export const PhotoContainer = styled.div`
    width: 500px;
    height: 200px;
    padding: 0 7px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 1024px) {

    }
`;

export const Photo = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 5%;
    object-fit: cover;
    background: #fcf6f9;
    border: 2px solid #FFFFFF;
    padding: .2rem;
    box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);

    @media (min-width: 1024px) {
        width: 200px;
        height: 200px;
    }
`;

export const TextContainer = styled.div`
    margin: 20px 20px;
    padding: 40px 20px;

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Text = styled.p`
    font-weight: 300;
    line-height: 28px;
`;

export const Hello = styled.h1`
    font-size: 30px;
    margin-bottom: 10px;
`;

export const Buttons = styled.div`
    margin-top: 25px;
    
`;

export const LinkedinB = styled.a`
    text-decoration: none;
    padding: 10px;
    align-self: center;
    background-color: lightblue;
    background-image: none;
    background-position: 0 90%;
    background-repeat: repeat no-repeat;
    background-size: 4px 3px;
    border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
    border-style: solid;
    border-width: 2px;
    box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
    box-sizing: border-box;
    color: #41403e;
    cursor: pointer;
    display: inline-block;
    font-family: Neucha, sans-serif;
    font-size: 1rem;
    line-height: 23px;
    outline: none;
    padding: .75rem;
    text-decoration: none;
    transition: all 235ms ease-in-out;
    border-bottom-left-radius: 15px 255px;
    border-bottom-right-radius: 225px 15px;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:hover {
        box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
        transform: translate3d(0, 2px, 0);
    }

    &:focus {
        box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
    }
`;

export const GithubB = styled.a`
    text-decoration: none;
    padding: 10px;
    margin-left: 15px;
    align-self: center;
    background-color: lightgray;
    background-image: none;
    background-position: 0 90%;
    background-repeat: repeat no-repeat;
    background-size: 4px 3px;
    border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
    border-style: solid;
    border-width: 2px;
    box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
    box-sizing: border-box;
    color: #41403e;
    cursor: pointer;
    display: inline-block;
    font-family: Neucha, sans-serif;
    font-size: 1rem;
    line-height: 23px;
    outline: none;
    padding: .75rem;
    text-decoration: none;
    transition: all 235ms ease-in-out;
    border-bottom-left-radius: 15px 255px;
    border-bottom-right-radius: 225px 15px;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:hover {
        box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
        transform: translate3d(0, 2px, 0);
    }

    &:focus {
        box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
    }
`;