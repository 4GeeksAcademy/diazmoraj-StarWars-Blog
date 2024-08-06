const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			starships: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharacters: () => {
				const store = getStore()
				const swapiURL = "https://www.swapi.tech/api/"

				fetch(swapiURL + "/people/")
					.then((response) => response.json())
					.then((data) => {
						setStore({characters: data.results})
					})
					.catch(() => { })
			},

			getPlanets: () => {
				const store = getStore()
				const swapiURL = "https://www.swapi.tech/api/"

				fetch(swapiURL + "/planets/")
					.then((response) => response.json())
					.then((data) => {
						setStore({ planets: data.results })
					})
					.catch(() => { })
			},

			getStarships: () => {
				const store = getStore()
				const swapiURL = "https://www.swapi.tech/api/"

				fetch(swapiURL + "/planets/")
					.then((response) => response.json())
					.then((data) => {
						setStore({ starships: data.results })
					})
					.catch(() => { })
			}
		}
	};
};

export default getState;
