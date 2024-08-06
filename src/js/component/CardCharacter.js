import React, {useContext} from "react";
import {Context} from "../store/appContext"
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useActionData } from "react-router-dom";

const CardCharacter = ({nombre, id}) => {
    const {store, actions} = useContext(Context);
    const handleFavorite = (item) => {
        actions.favorites(item);
    }
    return(
        <div className="card col-6" style={{ width: "18rem" }}>
            <img 
                src={"https://starwars-visualguide.com/assets/img/characters/" + 
                id + ".jpg"} 
                class="card-img-top" alt="..." />
            <div className="card-body">
                <h6 className="card-title">{nombre}</h6>
                <div className="icons">
                    <Link 
                        to={`/characterdetail/${id}`}
                        className="btn btn-ouline-primary"
                    >Learn More
                    </Link>
                    <button
                    type="button"
                    className="btn btn-outline-warning"
                    onClick={() => handleFavorite(nombre)}
                    >
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardCharacter;