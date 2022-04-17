import GlobalStyle from "./styles/globalStyles"
import Navbar from "./components/Navbar"
import MonettoLogo from "./components/MonettoLogo"
import LoginButton from "./components/LoginButton"
import SignupButton from "./components/SignupButton"

function App() {
  return (
    <>
    <GlobalStyle />
    <Navbar>
      <MonettoLogo>Monetto</MonettoLogo>
      <div>
      <SignupButton href="#">Sign up</SignupButton>
      <LoginButton href="#">Log in</LoginButton>
      </div>
      
    </Navbar>
    </>
  );
}

export default App;
