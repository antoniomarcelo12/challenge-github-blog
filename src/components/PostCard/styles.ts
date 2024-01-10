import styled from "styled-components";

export const PostCardItem = styled.div`
    padding: 2rem 1.5rem;
    width: calc(50% - 1rem);
    height: 16rem;
    background-color: ${props => props.theme.Post};
    border-radius: 10px;

    h1 {
        font-size: 1.25rem;
        max-width: 70%;
        font-weight: bolder;
        color: ${props => props.theme.Title};
    }
    
    p {
        font-size: .875rem;
        color: ${props => props.theme.Span};
    }
    
    h4 {
        margin-top: 1.5rem; 
        color: ${props => props.theme.Text};
        font-size: .875rem;
        font-weight: lighter;

        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 6; 
        -webkit-box-orient: vertical;
    }
    
`
export const PostCardItemHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`