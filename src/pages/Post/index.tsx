import { ArrowSquareOut, Calendar, CaretLeft, ChatCircle, GithubLogo } from "@phosphor-icons/react";
import { PostBody, PostHeader } from "./styles";
import { useContext, useEffect, useState } from "react";
import { IssueType, UserContext } from "../../contexts/UserContext";
import { Link, useParams } from "react-router-dom";
import { api } from "../../network/api";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function Post() {

    const { currentUser } = useContext(UserContext)
    
    const { postnumber } = useParams()
    
    const [currentPost, setCurrentPost] = useState<IssueType>({} as IssueType)
    
    const getCurrentPost = async () => {
        const post = await api.get(`repos/rocketseat-education/reactjs-github-blog-challenge/issues/${postnumber}`)

        setCurrentPost(post.data)
    }
    
    useEffect(() => {
        getCurrentPost()
    }, [])

    return(
        <>
            <PostHeader>
                <div className="header">
                    <Link to="/"> <CaretLeft /> VOLTAR</Link>
                    <Link to={currentPost.html_url} target="_blank">VER NO GITHUB <ArrowSquareOut size={18} /> </Link>
                </div>

                <div className="title">
                    {currentPost.title}
                </div>

                <footer>
                    <span>
                            <GithubLogo size={22} />
                            {currentUser.login}
                    </span> 
                        
                    <span>
                        <Calendar size={22} />
                        {currentUser.company}
                    </span> 
                    
                    <span>
                        <ChatCircle size={22} />
                        {currentUser.followers} followers
                    </span>
                </footer>

            </PostHeader>

            <PostBody>
                <Markdown remarkPlugins={[remarkGfm]}>
                    {currentPost.body}
                </Markdown>
            </PostBody>
        </>
    );
}