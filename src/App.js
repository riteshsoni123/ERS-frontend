import Navi from "./components/Navbar/Navi";
import About from "./components/About/About";
import Landing from "./components/Landing/Landing";
import Team from "./components/Team/Team";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";
import Event from "./components/Event/Event";

function App() {
  return (
    <div className="App">
        <Navi/>
        <Landing/>
        <About/>
        <Event/>
        <Team/>
        <Map/>
        <Footer/>
    </div>
  );
}

export default App;
