import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/Card";

export const Home = () => {
	const students = [
		{nombre: "Greiza", apellido: "Garcia"},
		{nombre: "Jimmy", apellido: "Diaz"},
		{nombre: "Yoel", apellido: "Sanchez"},
		{nombre: "Angela", apellido: "Fort"}
	]
	return (
		<div className="text-center mt-5">
			{
				students.map((value, index, array) => {
					return (
						<Card nombre={value.nombre} apellido={value.apellido}/>
					)
				})
			}
		</div>
	)
}
