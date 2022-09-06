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
          <a href="https://github.com/ashcruzzz/react-dictionary">
            {" "}
            Ashley Cruz
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
