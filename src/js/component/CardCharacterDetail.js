import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import getState from "../store/flux";
import "../../styles/home.css"
import "../../styles/cardDetail.css"

const CardCharacterDetail = (uid = 12) => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log(store)
    const id = 1;

    useEffect(() => {
        actions.getCharacterDetail(id);
    }, [])

    return (
        <div className="container-fluid">
            <div className="fond">
                <h1 className="title">Characters</h1>
            </div>
            <div className="Detail1 container-fluid d-flex justify-content-center">
                <div className="cardDetail1 mb-3 d-flex">
                    <div className="cardDetail2 row g-0">
                        <div className="col-md-4">
                            <img
                                src={"https://starwars-visualguide.com/assets/img/characters/" +
                                    params.uid + ".jpg"}
                                className="img-fluid"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title">{store.characterDetail?.name}</h2>
                                <p className="text">
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
                        <div className="FooterDetail container-fluid">
                            <div className="text">
                                <p>Name</p>
                                <p>{store.characterDetail?.name}</p>
                            </div>
                            <div className="text">
                                <p>Birth Year</p>
                                <p>{store.characterDetail?.birth_year}</p>
                            </div>
                            <div className="text">
                                <p>Gender</p>
                                <p>{store.characterDetail?.gender}</p>
                            </div>
                            <div className="text">
                                <p>Height</p>
                                <p>{store.characterDetail?.height}</p>
                            </div>
                            <div className="text">
                                <p>Skin Color</p>
                                <p>{store.characterDetail?.skin_color}</p>
                            </div>
                            <div className="text">
                                <p>Eye Color</p>
                                <p>{store.characterDetail?.eye_color}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCharacterDetail