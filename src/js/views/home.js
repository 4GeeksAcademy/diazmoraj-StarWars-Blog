import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext"
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CardCharacter from "../component/CardCharacter";
import CardPlanet from "../component/CardPlanet";
import CardStarship from "../component/CardStarship";

export const Home = () => {

	const { store, actions } = useContext(Context)

	return (
		<div className="text-center mt-5">
			{store.characters.length == 0
				? <h1>Cargando...</h1>
				:
				<div>
					<div className="row">
						<div className="fond">
							<h1 className="title">Characters</h1>
						</div>
						{
							store.characters.map((character, index) => {
								return (
									<CardCharacter
										name={character.name}
										uid={character.uid}
										key={index} />
								)
							})
						}
					</div>

					<div className="row">
						<div className="fond">
							<h1 className="title">Planets</h1>
						</div>
						{
							store.planets.map((planet, index, array) => {
								return (
									<CardPlanet
										name={planet.name}
										uid={planet.uid}
										key={index} />
								)
							})
						}
					</div>

					<div className="row">
						<div className="fond">
							<h1 className="title">Starships</h1>
						</div>
						{
							store.starships.map((starship, index, array) => {
								return (
									<CardStarship
										name={starship.name}
										uid={starship.uid}
										key={index} />
								)
							})
						}
					</div>
				</div>
			}
		</div>
	)
}
