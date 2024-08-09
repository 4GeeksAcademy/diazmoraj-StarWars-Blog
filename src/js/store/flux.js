const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			starships: [],
			characterDetail: [],
			planetDetail: [],
			starshipDetail: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: () => {
				
				const swapiURL = "https://www.swapi.tech/api"

				fetch(swapiURL + "/people/")
					.then((response) => response.json())
					.then((data) => {
						setStore({ characters: data.results })
					})
					.catch(() => { })
			},

			getPlanets: () => {

				const swapiURL = "https://www.swapi.tech/api"

				fetch(swapiURL + "/planets/")
					.then((response) => response.json())
					.then((data) => {
						setStore({ planets: data.results })
					})
					.catch(() => { })
			},

			getStarships: () => {

				const swapiURL = "https://www.swapi.tech/api"

				fetch(swapiURL + "/starships/")
					.then((response) => response.json())
					.then((data) => {
						setStore({ starships: data.results })
					})
					.catch(() => { })
			},

			getCharacterDetail: (uid) => {

				const swapiURL = "https://www.swapi.tech/api"

				fetch(swapiURL + `/people/${uid}`)
					.then((response) => response.json())
					.then((data) => {
						setStore({ characterDetail: data.result })
					})
					.catch(() => { })
			},

			getPlanetDetail: (uid) => {

				const swapiURL = "https://www.swapi.tech/api"

				fetch(swapiURL + `/planets/${uid}`)
					.then((response) => response.json())
					.then((data) => {
						setStore({ planetDetail: data.result })
					})
					.catch(() => { })
			},

			getStarshipDetail: (uid) => {

				const swapiURL = "https://www.swapi.tech/api"

				fetch(swapiURL + `/starships/${uid}`)
					.then((response) => response.json())
					.then((data) => {
						setStore({ starshipDetail: data.result })
					})
					.catch(() => { })
			},

			favorites: (Item) => {
				let store = getStore();
				const exist = store.favorites.some(favorite => favorite.name === Item.name);

				if (!exist) {
					setStore({ ...store, favorites: [...store.favorites, Item]});
				}
			},

			delFavorite: (Item) => {
				const store = getStore();
				const updateFavorite = store.favorites.filter((favo) => favo !== Item);
				setStore({ favorites: updateFavorite });
			}
		}
	};
};

export default getState;
