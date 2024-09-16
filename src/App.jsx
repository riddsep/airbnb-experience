import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data/data";

function App() {
  const CardList = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <>
      <Navbar />
      <Hero />
      <div className="card-container">{CardList}</div>
    </>
  );
}

export default App;
