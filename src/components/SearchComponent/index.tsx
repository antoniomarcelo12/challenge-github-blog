import { useContext } from "react";
import { CleanSearchInputButton, SearchComponentContainer, SearchComponentHeader } from "./styles";
import { UserContext } from "../../contexts/UserContext";
import { X } from "@phosphor-icons/react";

export function SearchComponent() {

    const { posts, setSearchString, searchString } = useContext(UserContext)

    function limpar() {
        setSearchString('')
    }
    
    return(
        <SearchComponentContainer>
            <SearchComponentHeader>
                <h1>Publicações</h1>

                <p>{ posts.length } publicações</p>
            </SearchComponentHeader>

            <input placeholder="Buscar conteúdo" value={searchString} onChange={(e) => setSearchString(e.target.value)} />
            <CleanSearchInputButton onClick={() => limpar() }> <X /> </CleanSearchInputButton>
        </SearchComponentContainer>
    );
}