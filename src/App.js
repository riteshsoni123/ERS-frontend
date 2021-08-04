import './App.css';
import Navi from "./components/Navbar/Navi";
import About from "./components/About/About";
import Landing from "./components/Landing/Landing";
import Map from "./components/Map/Map";

function App() {
  return (
    <div className="App">
        <Navi/>
        <Landing/>
        <About/>
        <Map/>
    </div>
  );
}

export default App;
