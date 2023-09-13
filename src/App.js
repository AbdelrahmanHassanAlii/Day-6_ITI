// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/header";
import Landing from "./components/Landing/landing";
import Aboutme from "./components/Aboutme/aboutme";
import Skills from "./components/Skills/skills";
import Gallery from "./components/gallery/gallery";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="">
      <Header />
      <Landing />
      <Aboutme />
      <Skills />
      <Gallery />
      <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
