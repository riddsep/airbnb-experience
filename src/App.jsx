import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="card-container">
        <Card
          img="../src/assets/card-1.png"
          status="SOLD OUT"
          rating="5.0"
          count="6"
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price="136"
        />
        <Card
          img="../src/assets/card-2.png"
          status="ONLINE"
          rating="5.0"
          count="30"
          country="SGP"
          title="Learn wedding photography"
          price="125"
        />
        <Card
          img="../src/assets/card-3.png"
          rating="4.8"
          count="2"
          country="IDN"
          title="Group Mountain Biking"
          price="50"
        />
      </div>
    </>
  );
}

export default App;
