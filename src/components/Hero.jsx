import HeroImage from "../../public/assets/photo-grid.png";
import "./css-modules/Hero.css";
function Hero() {
  return (
    <section className="hero-section">
      <img src={HeroImage} alt="Hero grid images" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
