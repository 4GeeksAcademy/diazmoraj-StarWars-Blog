import React, {useContext} from "react";
import { Context } from "../store/appContext";
import CardPlanet from "./CardPlanet";

const Planets = () => {
    const {store, actions} = useContext(Context);

    return (
		<div className="text-center mt-5">
            <h1>Planets</h1>
            <div>
                <div className="row">
                    {
                        store.planets.map((planet, index, array) => {
                            return (
                                <CardPlanet
                                    nombre={planet.name}
                                    key={index} />
                            )
                        })
                    }
                </div>
            </div>
		</div>
	)
}

export default Planets;