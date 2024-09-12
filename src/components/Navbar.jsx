import Logo from "../../public/assets/logo.png";
import "./css-modules/Navbar.css";
function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="air bnb logo" />
    </nav>
  );
}

export default Navbar;
