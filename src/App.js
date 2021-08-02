import './App.css';
import Navi from "./components/Navbar/Navi";
import About from "./components/About/About";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <div className="App">
        <Navi/>
        <Landing/>
        <About/>
    </div>
  );
}

export default App;
