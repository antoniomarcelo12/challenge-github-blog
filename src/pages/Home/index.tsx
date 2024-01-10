import { CardProfile } from "../../components/CardProfile";
import { PostSection } from "../../components/PostSection";
import { SearchComponent } from "../../components/SearchComponent";

export function Home() {

    return(
        <>
            <CardProfile />
            <SearchComponent />
            <PostSection />
        </>
    );
}