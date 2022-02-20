import NavWrapper from "./components/navbar/NavWrapper";
import FooterWrapper from "./components/footer/FooterWrapper"
import Landing from "./section/Landing";
import About from "./section/About";
import Team from "./section/Team";
import Roadmap from "./section/Roadmap";
import FAQ from "./section/FAQ";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavWrapper />
      </header>
      <main>
        <Landing />
        <About />
        <Roadmap />
        <Team />
        <FAQ />
      </main>
      <footer>
        <FooterWrapper />
      </footer>
    </div>
  );
}

export default App;
