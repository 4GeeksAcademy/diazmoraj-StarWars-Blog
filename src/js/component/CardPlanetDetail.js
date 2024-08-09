import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import getState from "../store/flux";
import "../../styles/home.css"
import "../../styles/cardDetail.css"

const CardPlanetDetail = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getPlanetDetail(params.uid);
    }, [])

    return (
        <div className="container-fluid">
            <div className="fond">
                <h1 className="title">Planets</h1>
            </div>
            <div className=" container-fluid d-flex justify-content-center">
                <div className=" mb-3 d-flex">
                    <div className=" row g-0">
                        <div className="col-md-4 card-view">
                            <img
                                src={"https://starwars-visualguide.com/assets/img/planets/" +
                                    params.uid + ".jpg"}
                                className="img-fluid img-view-detail"
                                alt="character" onError={(e) => e.currentTarget.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-pharagrap">
                                <p className="pharagrap">
                                    Star Wars, conocida también en español como La guerra de las galaxias,
                                    es una franquicia y universo compartido de fantasía compuesta primordialmente
                                    de una serie de películas concebidas por el cineasta estadounidense George Lucas
                                    en la década de 1970, y producidas y distribuidas inicialmente por 20th Century Fox
                                    y posteriormente por The Walt Disney Company a partir de 2012. Su trama describe las
                                    vivencias de un grupo de personajes que habitan en una galaxia ficticia e interactúan
                                    con elementos como «la Fuerza», un campo de energía metafísico y omnipresente que posee
                                    un «lado luminoso» impulsado por la sabiduría, la nobleza y la justicia y utilizado por
                                    los Jedi, y un «lado oscuro» usado por los Sith y provocado por la ira, el miedo, el odio
                                    y la desesperación.
                                </p>
                                <p className="card-text"></p>
                            </div>
                        </div>
                        <br />
                        <div className="container-fluid">
                            <div className="info">
                                <div className="text">
                                    <p>Name</p>
                                    <p>{store.planetDetail?.properties?.name}</p>
                                </div>
                                <div className="text">
                                    <p>Terrain</p>
                                    <p>{store.planetDetail?.properties?.terrain}</p>
                                </div>
                                <div className="text">
                                    <p>Gravity</p>
                                    <p>{store.planetDetail?.properties?.gravity}</p>
                                </div>
                                <div className="text">
                                    <p>Diameter</p>
                                    <p>{store.planetDetail?.properties?.diameter}</p>
                                </div>
                                <div className="text">
                                    <p>Climate</p>
                                    <p>{store.planetDetail?.properties?.climate}</p>
                                </div>
                                <div className="text">
                                    <p>Orbital Period</p>
                                    <p>{store.planetDetail?.properties?.orbital_period}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPlanetDetail