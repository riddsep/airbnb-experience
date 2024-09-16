/* eslint-disable react/prop-types */
import "../components/css-modules/Card.css";
import Star from "../assets/star.svg";

function Card(props) {
  const { coverImg, openSpots, stats, location, title, price } = props;
  return (
    <div className="card">
      <div className="card-image">
        {(openSpots > 0 && <p>ONLINE</p>) ||
          (openSpots === 0 && <p>SOLD OUT</p>)}
        <img src={coverImg} alt="" loading="lazy" />
      </div>
      <div className="card-info">
        <div className="card-rating">
          <img src={Star} alt="" />
          {stats.rating}
          <span>
            {" "}
            ({stats.reviewCount}) &#x2022; {location}
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
