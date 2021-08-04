import './App.css';
import Navi from "./components/Navbar/Navi";
import About from "./components/About/About";
import Landing from "./components/Landing/Landing";
import Team from "./components/Team/Team";
import Map from "./components/Map/Map";

function App() {
  return (
    <div className="App">
        <Navi/>
        <Landing/>
        <About/>
        <Team/>
        <Map/>
    </div>
  );
}

export default App;
