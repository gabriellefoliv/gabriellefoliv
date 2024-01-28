import styled from "styled-components";

export const ProjectContainer = styled.div`
    /* position: relative; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* z-index: 5; */
    padding: 70px 6%;
    /* background-color: red; */
    @media (max-width: 1024px) {
        margin-top: 300px;
    }

`;

export const ProjectCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: space-evenly;

    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */

    @media (min-width: 640px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 48px;
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 3vw;
        
        
        
    }

`;

export const Title = styled.h2`
    text-align: center;
`;

// export const BgMiddle = styled.img`
//     position: absolute;
//     z-index: -5;
// `;

export const SubTitle = styled.p`
    font-size: 18px;
    text-align: center;
    color: darkgray;
`;

export const ProjText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    gap: 24px;
    margin-bottom: 50px;

    @media (min-width: 1024px) {
        max-width: 450px;
    }
`;