/* eslint-disable react/prop-types */
import "../components/css-modules/Card.css";
import Star from "../assets/star.svg";

function Card(props) {
  const { img, status, rating, count, country, title, price } = props;
  return (
    <div className="card">
      <div className="card-image">
        {status && <p>{status}</p>}
        <img src={img} alt="" />
      </div>
      <div className="card-info">
        <div className="card-rating">
          <img src={Star} alt="" />
          {rating}
          <span>
            {" "}
            ({count}) &#x2022; {country}
          </span>
        </div>
        <div className="card-title">
          <p>{title}</p>
          <p className="card-price">
            From ${price} <span>/ person</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
