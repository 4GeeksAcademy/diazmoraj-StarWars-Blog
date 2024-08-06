import React, {useContext} from "react";
import { Context } from "../store/appContext";
import CardStarship from "./CardStarship";

const Starships = () => {
    const {store, actions} = useContext(Context);

    return (
		<div className="text-center mt-5">
            <h1>Starships</h1>
            <div>
                <div className="row">
                    {
                        store.starships.map((starship, index, array) => {
                            return (
                                <CardStarship
                                    nombre={starship.name}
                                    key={index} />
                            )
                        })
                    }
                </div>
            </div>
		</div>
	)
}

export default Starships;