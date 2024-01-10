import styled from "styled-components";


export const PostHeader = styled.div`
    position: relative;
    border-radius: 10px;
    z-index: 111;
    background-color: ${props => props.theme.Profile};
    
    margin-top: -5rem;
    padding: 2rem;
    width: 100%;
    font-size: .75rem;
    
    .header {
        display: flex;
        justify-content: space-between;

        a {
            display: flex;
            align-items: center;
            gap: .5rem;
            color: ${props => props.theme.Blue};
        }
        
    }
    
    .title {
        margin-top: 1.5rem;
        color: ${props => props.theme.Title};
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    footer {
        display: flex;
        align-items: center;
        gap: 3rem;
        margin-top: 1.5rem;
        color: ${props => props.theme.Span};
        font-size: .75rem;
        font-weight: bold;
        
        span {
            display: flex;
            align-items: center;
            gap: .5rem;
        }

    }
`

export const PostBody = styled.div`
    padding: 2.5rem 2rem;

    color: ${props => props.theme.Span};

    p:first-child {
        color: ${props => props.theme.Title};

    }

    pre {
        margin: 2rem 0;
        padding: 1rem;
        border-radius: 10px;
        background-color: ${props => props.theme.Post};
    }

    img {
        margin: 5rem 0;
        width: 100%;
    }

    a {
        color: ${props => props.theme.Span};
        text-decoration: underline;
    }
`