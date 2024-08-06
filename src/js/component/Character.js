import React, {useContext} from "react";
import { Context } from "../store/appContext";
import CardCharacter from "./CardCharacter";

const Characters = () => {
    const {store, actions} = useContext(Context);

    return (
		<div className="text-center mt-5">
            <h1>Characters</h1>
			{store.characters.length == 0
				? <h1>Cargando...</h1> 
				:
				<div>
					<div className="row">
					{
						store.characters.map((character, index, array) => {
							return (
								<CardCharacter 
									nombre={character.name} 
									key={index}/>
							)
						})
					}	
					</div>
				</div>
			}
		</div>
	)
}

export default Characters;