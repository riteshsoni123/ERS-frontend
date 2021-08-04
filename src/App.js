import './App.css';
import Navi from "./components/Navbar/Navi";
import About from "./components/About/About";
import Landing from "./components/Landing/Landing";
import Team from "./components/Team/Team";

function App() {
  return (
    <div className="App">
        <Navi/>
        <Landing/>
        <About/>
        <Team/>
    </div>
  );
}

export default App;
