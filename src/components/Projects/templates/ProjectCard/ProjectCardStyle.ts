import styled from "styled-components";

export const CardContainer = styled.div`
    width: 350px;
    height: 490px;
    background-color: white;
    /* margin: 30px 70px; */
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: 0.3s;
    margin-bottom: 40px;


    &:hover {
        transform: scale(1.01);
        transition: 0.3s;
    }
    
    
`;

export const CardImg = styled.img`
    width: 340px;
    height: 200px;
    border-radius: 20px;
    object-fit: cover;
    background: #fcf6f9;
    border: 2px solid #FFFFFF;
    margin-left: 5px;
    padding: 0px 0px;
    box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
`;

export const CardTitle = styled.h3`
    padding: 10px 20px;
`;

export const CardDescription = styled.p`
    padding: 5px 20px;
    font-size: 14px;
`;

export const CardLanguages = styled.div`
    padding: 5px 20px;
    margin-top: 5px;
    font-size: 14px;
    color: blueviolet;
`;

export const CardButtons = styled.div`
    display: flex;
    padding: 50px 20px;
    border-radius: 20px;

`;

export const CardLiveSite = styled.a`
    width: 80px;
    height: 40px;
    padding: 0 10px;
    border-radius: 10px;
    border: none;

    align-items: center;
    background-clip: padding-box;
    background-color: #fa6400;
    border: 1px solid transparent;
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    margin: 0;
    min-height: 3rem;
    padding: calc(.875rem - 1px) calc(1.5rem - 1px);
    position: relative;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: auto;

    &:hover {
        transform: translateY(-4px);
    }

    &:focus {
        background-color: #fb8332;
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;

    }

    &:active {
        background-color: #c85000;
        box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
        transform: translateY(0);
    }
    
`;

export const CardCode = styled.a`
    width: 80px;
    height: 40px;
    padding: 0 10px;
    border-radius: 10px;
    border: none;

    align-items: center;
    background-clip: padding-box;
    background-color: black;
    border: 1px solid transparent;
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    margin: 0;
    min-height: 3rem;
    padding: calc(.875rem - 1px) calc(1.5rem - 1px);
    position: relative;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: auto;

    &:hover {
        transform: translateY(-4px);
    }

    &:focus {
        background-color: #fb8332;
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;

    }

    &:active {
        background-color: #c85000;
        box-shadow: rgba(0, 0, 0, .08) 0 2px 4px;
        transform: translateY(0);
    }
`;