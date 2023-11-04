import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NavFooter from "./components/NavFooter";
import RedesLinks from "./components/RedesLinks";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
      <RedesLinks />
      <Contact />
      <NavFooter />
    </>
  );
}

export default App;
