import { Link } from "react-router-dom";

const CardItem = ({ icon, title, ruta }) => {
  return (
    <Link to={ruta} className="card-item">
    
      <ion-icon name={icon}></ion-icon>
      <h4>{title}</h4>
    
    </Link>
  );
};

export default CardItem;
