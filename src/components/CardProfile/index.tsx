import { CardProfileContainer, CardProfileFooter, CardProfileInfo, CardProfileInfoHeader } from "./styles";
import { ArrowSquareOut, Buildings, GithubLogo, Users } from "@phosphor-icons/react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function CardProfile() {

    const { currentUser } = useContext(UserContext)

    return(
        <CardProfileContainer>
            <img src={currentUser.avatar_url} alt="" />

            <CardProfileInfo>
                <CardProfileInfoHeader>
                    <h1>{currentUser.login}</h1> 

                    <a href={currentUser.html_url} target="_blank">Github<ArrowSquareOut size={18} /></a>
                </CardProfileInfoHeader>
                <p>{currentUser.bio}</p>

                <CardProfileFooter>
                    <span>
                        <GithubLogo size={22} />
                        {currentUser.login}
                    </span> 
                    
                    <span>
                        <Buildings size={22} />
                        {currentUser.company}
                    </span> 
                    
                    <span>
                        <Users size={22} />
                        {currentUser.followers} followers
                    </span>
                </CardProfileFooter>

            </CardProfileInfo>
        </CardProfileContainer>    
    );
}