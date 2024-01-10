import { useContext } from "react";
import { PostCard } from "../PostCard";
import { PostContainer } from "./styles";
import { UserContext } from "../../contexts/UserContext";

export function PostSection() {
    const { filteredList, posts, searchString } = useContext(UserContext);

    const postsToRender = (searchString.length > 0) ? filteredList : posts;

    return (
        <PostContainer>
            {(postsToRender.length === 0 && searchString.length > 0) && <h1>Nada a mostrar aqui</h1>}

            {postsToRender.map(post => (
                <PostCard key={post.number} post={post} />
            ))}
        </PostContainer>
    );
}
