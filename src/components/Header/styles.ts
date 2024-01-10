import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 18rem;
    position: relative;

    .headerbackgroundimage {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .logoimage {
        position: absolute;
        left: 50%;
        top: 5rem;

        transform: translate(-50%);
    }
`