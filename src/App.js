import "./App.css";
import HeaderBottom from "./components/HeaderBottom/HeaderBottom";
import HeaderTop from "./components/HeaderTop/HeaderTop";
import MainSection from "./components/HeroSection/MainSection";

function App() {
  return (
    <div className="App">
      <HeaderTop />
      <HeaderBottom />
      <MainSection />
    </div>
  );
}

export default App;
