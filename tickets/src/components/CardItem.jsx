const CardItem = ({ icon, title }) => {
  return (
    <div className="card-item">
      <ion-icon name={icon}></ion-icon>
      <h4>{title}</h4>
    </div>
  );
};

export default CardItem;
