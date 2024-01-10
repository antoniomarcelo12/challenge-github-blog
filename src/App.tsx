import { Header } from "./components/Header";
import { CenterContainer } from "./components/CenterContainer";
import { UserProvider } from "./contexts/UserContext";

function App() {

  return (
    <UserProvider>
        <Header />
        <CenterContainer />
    </UserProvider>
  )
}

export default App
