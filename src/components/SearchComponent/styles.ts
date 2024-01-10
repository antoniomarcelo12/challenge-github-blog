import styled from "styled-components";

export const SearchComponentContainer = styled.div`
    position: relative;
    
    
    input {
        width: 100%;
        margin-top: 1rem;

        background-color: ${props => props.theme.Input};
        outline: none;
        border: 1px solid ${props => props.theme.Border};

        padding: .5rem;
        border-radius: 6px;

        color: ${props => props.theme.Label};
        &::placeholder {
            font-size: .875rem;
        }
    }
`

export const SearchComponentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 4rem;

    h1 {
        color: ${props => props.theme.Subtitle};

        font-size: 1rem;
    }
    
    p {
        color: ${props => props.theme.Span};
        font-size: .875rem;
    }

`

export const CleanSearchInputButton = styled.button`
    background: transparent;
    border: none;
    color: ${props => props.theme.Span};
    padding: .5rem;

    position: absolute;
    bottom: 0;
    right: 0rem;

    cursor: pointer;
`