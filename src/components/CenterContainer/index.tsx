import { RouterProvider } from "react-router-dom";
import { CenterContainerContent } from "./styles";
import { router } from "../../routes";

export function CenterContainer() {
    return(
        <CenterContainerContent>
            <RouterProvider router={router} />
        </CenterContainerContent>
    );
}