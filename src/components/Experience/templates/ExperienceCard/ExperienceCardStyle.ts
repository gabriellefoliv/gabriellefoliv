import styled from "styled-components";

export const ExperienceCardCont = styled.div`
    width: 1000px;
    height: 200px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 15px;
    padding: 10px 10px;
    z-index: 5;

`;

export const ExperienceLogo = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    background: #fcf6f9;
    border: 2px solid #FFFFFF;
    padding: .2rem;
    margin-left: 20px;
    margin-right: 20px;
    box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);

    @media (max-width: 1024px) {
        transform: scale(0.7);
        padding: 0;
        margin: 0;
    }

`;

export const ExperienceCardTitle = styled.h2`
    font-size: 24px;
`;

export const ExperienceCardDates = styled.h3`
    font-size: 18px;
    margin-bottom: 5px;
`;

export const ExperienceCardDescription = styled.p`

`;

export const ExperienceCardText = styled.div`
    margin-left: 15px;
    padding: 5px 5px;

    @media (max-width: 1024px) {
        transform: scale(0.7);
        margin: 0;
        padding: 0;
    }

`;