import React, {useState, useEffect, useContext} from "react";
import {Context} from  "../store/appContext"
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CardCharacter from "../component/CardCharacter";

export const Home = () => {

	const {store, actions} = useContext(Context)

	return (
		<div className="text-center mt-5">
			{store.characters.length == 0
				? <h1>Cargando...</h1> 
				:
				<div>
					<div className="row">
					<h1>Characters</h1>
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

					<div className="row">
					<h1>Planets</h1>
					{
						store.planets.map((planet, index, array) => {
							return (
								<Card 
									nombre={planet.name} 
									key={index}/>
							)
						})
					}	
					</div>

					<div className="row">
					<h1>Starships</h1>
					{
						store.starships.map((starship, index, array) => {
							return (
								<Card 
									nombre={starship.name} 
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
