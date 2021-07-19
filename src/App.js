import "./App.css";
import Navbar from "./components/NavBar";
import Homepage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
