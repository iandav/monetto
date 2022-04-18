// Styled components
import GlobalStyle from "./styles/globalStyles"
// React Router
import {BrowserRouter, Routes, Route} from "react-router-dom"
// Components
import Navbar from "./components/Navbar"
import MonettoLogo from "./components/MonettoLogo"
import LoginButton from "./components/LoginButton"
import SignupButton from "./components/SignupButton"

function App() {
  return (
    <BrowserRouter>

      <GlobalStyle />

        <Navbar>
          <MonettoLogo>Monetto</MonettoLogo>
            <div>
              <SignupButton href="#">Sign up</SignupButton>
              <LoginButton href="#">Log in</LoginButton>
            </div>
        </Navbar>

        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;
