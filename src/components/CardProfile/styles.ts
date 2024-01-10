import styled from "styled-components";

export const CardProfileContainer = styled.div`

    margin-top: -5rem;

    display: flex;
    align-items: center;
    gap: 3rem;

    padding: 2rem;

    position: relative;
    z-index: 9;

    border-radius: 10px;

    background-color: ${props => props.theme.Profile};


    img {
        height: 148px;
        width: 148px;
        border-radius: 10px;
    }
`

export const CardProfileInfoHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    h1 {
        color: ${props => props.theme.Title}
    }
    
    a {
        text-decoration: none;
        color: #3294F8;

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: .5rem;
        
        font-weight: bolder;
    }

`

export const CardProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    color: ${props => props.theme.Text}
`

export const CardProfileFooter = styled.div`
    display: flex;
    gap: 1.5rem;
    
    span {
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    svg {
        color: ${props => props.theme.Label}
    }
`