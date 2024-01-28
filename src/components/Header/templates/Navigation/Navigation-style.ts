import styled from "styled-components";

export const Overlay = styled.div`
    &.active {
        position: absolute;
        top: 52px;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        transition: 1s;
    }
`;

export const NavContainer = styled.div`
    background-color: #fff;
    padding: 16px 12%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 50;

    @media (min-width: 1024px) {
        .hamburguer {
            display: none;
            
        }

    }
`;

export const NavLogoContainer = styled.div`
    margin-left: 0px;
    padding: 20px 10px;
    flex: 1;
    width: 400px;
    text-align: center;
`;

export const NavLogo = styled.a`
    color: #45a6ff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
`;

export const Ul = styled.ul`
    padding: 30px 0;
    margin: 0 400px;
    border-radius: 5px;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    background-color: #fff;
    width: 80vw;
    position: absolute;
    top: 80px;
    left: 50%; 
    transform: translateX(-50%);

    &.active {
        display: flex;
    }

    @media (min-width: 1024px) {
        width: auto;
        padding: 0;
        position: static;
        background-color: transparent;
        display: flex;
        flex-direction: row;
        gap: 24px;
        transform: none;
    }
    
`;

export const Li = styled.li`
    text-align: center;
    cursor: pointer;
    font-size: 18px;

    @media (min-width: 1024px) {
        font-size: 16px;
        position: relative;
        
        &::after {
            content: '';
            position: absolute;
            bottom: -28px;
            width: 100%;
            height: 3px;
            display: block;
            opacity: 0;
            transform: 0.5s;
        }

        &:hover::after {
            opacity: 1;
        }
    }
`;

export const Tab = styled.a`
    color: black;
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    transition: 0.5s;
    &:hover {
        opacity: 0.5;
        transition: 0.5s;
    }
`;

export const Menu = styled.img`
    z-index: 5;
    width: 24px;
    cursor: pointer;

    &.close {
        width: 20px;
        height: 20px;
    }
`;