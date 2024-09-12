import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Card from "./components/Card";
import CardImg1 from "./assets/card-1.png";
import CardImg2 from "./assets/card-2.png";
import CardImg3 from "./assets/card-3.png";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="card-container">
        <Card
          img={CardImg1}
          status="SOLD OUT"
          rating="5.0"
          count="6"
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price="136"
        />
        <Card
          img={CardImg2}
          status="ONLINE"
          rating="5.0"
          count="30"
          country="SGP"
          title="Learn wedding photography"
          price="125"
        />
        <Card
          img={CardImg3}
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
