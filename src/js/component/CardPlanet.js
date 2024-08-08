import React, {useContext} from "react";
import {Context} from "../store/appContext"
// import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useActionData } from "react-router-dom";
import "../../styles/card.css"

const CardPlanet = ({name, uid}) => {
    const {store, actions} = useContext(Context);
    const handleFavorite = (item) => {
        actions.favorites(item);
    }
    return(
        <div className="card col-6 card-view" style={{ width: "18rem" }}>
            <img 
                src={"https://starwars-visualguide.com/assets/img/planets/" + 
                uid + ".jpg"} 
                className="card-img-top img-view" 
                alt="character" onError={(e) => e.currentTarget.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"}/>
            <div className="card-body info-card">
                <h5 className="card-title neon-text">{name}</h5>
                <div className="icons d-flex justify-content-between">
                    <Link 
                        to={`/CardPlanetDetail/${uid}`}
                        className="btn btn-primary btn-sm"
                    >Learn More
                    </Link>
                    <button
                    type="button"
                    className="btn btn-outline-warning btn-sm"
                    onClick={() => handleFavorite(name)}
                    >
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardPlanet;