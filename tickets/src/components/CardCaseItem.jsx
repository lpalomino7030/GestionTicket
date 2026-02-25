
const CardCaseItem = ({ icon, titulo, cant, style }) => {
    return (
        <div className="card-case-item" style={style}>    
            <ion-icon name={icon}></ion-icon>
            <p>{titulo}</p>
            <p>{cant}</p>
        </div>
    )
}

export default CardCaseItem;