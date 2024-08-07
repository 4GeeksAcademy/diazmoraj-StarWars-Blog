const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			starships: [],
			characterDetail: {},
			planetDetail: [],
			starshipDetail: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: () => {
				const store = getStore()
				const swapiURL = "https://www.swapi.tech/api"

				fetch(swapiURL + "/people/")
					.then((response) => response.json())
					.then((data) => {
						setStore({characters: data.results})
					})
					.catch(() => { })
			},

			getPlanets: () => {
				const store = getStore()
				const swapiURL = "https://www.swapi.tech/api"

				fetch(swapiURL + "/planets/")
					.then((response) => response.json())
					.then((data) => {
						setStore({ planets: data.results })
					})
					.catch(() => { })
			},

			getStarships: () => {
				const store = getStore()
				const swapiURL = "https://www.swapi.tech/api"

				fetch(swapiURL + "/starships/")
					.then((response) => response.json())
					.then((data) => {
						setStore({ starships: data.results })
					})
					.catch(() => { })
			},

			getCharacterDetail: (id) => {
				const store = getStore()
				const swapiURL = "https://www.swapi.tech/api"

				fetch(swapiURL + `/people/${id}`)
					.then((response) => response.json())
					.then((data) => {
						setStore({ characterDetail: data.results })
					})
					.catch(() => { })
			},

			getPlanetDetail: (id) => {
				const store = getStore()
				const swapiURL = "https://www.swapi.tech/api"

				fetch(swapiURL + `/planets/${id}`)
					.then((response) => response.json())
					.then((data) => {
						setStore({ planetDetail: data.results })
					})
					.catch(() => { })
			},

			getStarshipDetail: (id) => {
				const store = getStore()
				const swapiURL = "https://www.swapi.tech/api"

				fetch(swapiURL + `/starships/${id}`)
					.then((response) => response.json())
					.then((data) => {
						setStore({ starshipDetail: data.results })
					})
					.catch(() => { })
			},

			favorites: (Item) => {
				let store = getStore();
				setStore({...store, favorites:[...store.favorites, Item]});
			},

			delFavorite: (Item) => {
				const store = getStore();
				const updateFavorite = store.favorites.filter((favo) => favo !== Item);
				setStore({favorites:updateFavorite});
			}
		}
	};
};

export default getState;
