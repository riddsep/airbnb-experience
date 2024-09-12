import "../components/css-modules/Card.css";
import CardImage1 from "../assets/card-1.png";
import Star from "../assets/star.svg";

function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-image">
          <p>SOLD OUT</p>
          <img src={CardImage1} alt="" />
        </div>
        <div className="card-info">
          <div className="card-rating">
            <img src={Star} alt="" />
            5.0
            <span> (6) &#x2022; USA</span>
          </div>
          <div className="card-title">
            <p>Life Lessons with Katie Zaferes</p>
            <p className="card-price">
              From $136 <span>/ person</span>
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <p>SOLD OUT</p>
          <img src={CardImage1} alt="" />
        </div>
        <div className="card-info">
          <div className="card-rating">
            <img src={Star} alt="" />
            5.0
            <span> (6) &#x2022; USA</span>
          </div>
          <div className="card-title">
            <p>Life Lessons with Katie Zaferes</p>
            <p className="card-price">
              From $136 <span>/ person</span>
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <p>SOLD OUT</p>
          <img src={CardImage1} alt="" />
        </div>
        <div className="card-info">
          <div className="card-rating">
            <img src={Star} alt="" />
            5.0
            <span> (6) &#x2022; USA</span>
          </div>
          <div className="card-title">
            <p>Life Lessons with Katie Zaferes</p>
            <p className="card-price">
              From $136 <span>/ person</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
