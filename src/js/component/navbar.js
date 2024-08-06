import React, {useContext} from "react";
import {Contex} from "../store/appContext"
import { Link } from "react-router-dom";
import "../../styles/navbar.css"

export const Navbar = () => {
	const {store, actions} = useContext(Contex);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img 
							className="img-navbar"
							src="https://cdnlogo.com/logo/starwars_31091.html"
							alt="logo"
							style={{width: "100px", objectFit:"cover", height: "50px"}}
						/>
					</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<a
							className="btn btn-primary dropdown-toggle"
							href="#"
							role="button"
							data-bs-toggle="dropdown"
						>Favorites</a>
						<ul className="dropdown-menu">
							{store.favorites && store.favorites.map((Item, index) => {
								return(
									<li key={index}>
										<a
											className="dropdown-item d-flex justify-content-between align-item-center"
											href="#"
										>
											{Item.name}
											<i 
												className="bi bi-trash-fill borrar-favorito"
												onClick={() => actions.deleteFavorites(Item)}
											></i>
										</a>
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
