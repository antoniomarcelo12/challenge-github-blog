import { formatDistanceToNowStrict } from "date-fns"
import { IssueType } from "../../contexts/UserContext"
import { PostCardItem, PostCardItemHeader } from "./styles"
import { ptBR } from "date-fns/locale"
import { Link } from "react-router-dom"

interface PostCardProps {
    post: IssueType
}

export function PostCard({ post }: PostCardProps) {
    return(
        <PostCardItem>
            <Link to={`/post/${post.number}`} target="_blank">
                <PostCardItemHeader>
                    <h1>{post.title}</h1>
                    <p>Há { formatDistanceToNowStrict(post.created_at, { locale: ptBR })}</p>
                </PostCardItemHeader>
            </Link>
            
            <h4>{post.body}</h4>
        </PostCardItem>
    )
}