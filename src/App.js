import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="text-center">
          Coded by
          <a href="https://www.shecodes.io/graduates/35289-ashley-cruz">
            {" "}
            Ashley Cruz
          </a>{" "}
          and is{" "}
          <a href="https://github.com/ashcruzzz/react-dictionary">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
