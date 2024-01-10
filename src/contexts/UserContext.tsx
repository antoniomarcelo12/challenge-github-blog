import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import { api } from "../network/api";

interface UserType {
    login: string,
    avatar_url: string,
    html_url: string,
    followers: number,
    bio: string,
    company: string | null,
}

export interface IssueType {
        title: string,
        html_url: string,
        created_at: string,
        body: string,
        comments_url: string,
        number: number
}

interface UserProviderProps {
    children: ReactNode
}

interface UserContextType {
    currentUser: UserType,
    posts: IssueType[],
    setSearchString: Dispatch<SetStateAction<string>>,
    filteredList: IssueType[],
    searchString: string,
}

export const UserContext = createContext<UserContextType>({} as UserContextType)

export function UserProvider({ children }: UserProviderProps) {

    const [currentUser, setCurrentUser] = useState<UserType>({} as UserType);
    const [posts, setPosts] = useState<IssueType[]>([])

    const getUser = async () => {
        const response = await api.get("users/rocketseat-education")
        setCurrentUser(response.data)
    }
    
    const getIssue = async () => {
        const response = await api.get("https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues")
        setPosts(response.data)
    }

    useEffect(() => {
        getUser()
        getIssue()
    }, [])


    //SearchComponent:


    const [filteredList, setFilteredList] = useState<IssueType[]>([])
    const [searchString, setSearchString] = useState('')

    
    useEffect(() => {
  
        setFilteredList(posts.filter((post) => {
            if(post.body){
                return post.title.includes(searchString) || post.body.includes(searchString);
            }
        }));
    }, [searchString])


    return(
        <UserContext.Provider value={{currentUser, posts, setSearchString, filteredList, searchString}}>
            {children}
        </UserContext.Provider>
    );
}