

const CardPerfil = ({ username, rol, img }) => {
    return (
        <div className="card-perfil">
            <img className="ImgPerfil" src={img} alt="" />
            <h3>{username}</h3>    
            {/* <p>Email: {user.email}</p> */}
            <p>{rol}</p>
        </div>
    )
}

export default CardPerfil;