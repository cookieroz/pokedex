import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const pokemon = [
	{
		"pokemon":{
			"name":"charmander",
			"url":"https://pokeapi.co/api/v2/pokemon/4/"
		},
		"slot":1
	},
	{
		"pokemon":
			{
				"name":"charmeleon",
				"url":"https://pokeapi.co/api/v2/pokemon/5/"
			},
		"slot":1
	},
	{
		"pokemon":
			{
				"name":"growlithe",
				"url":"https://pokeapi.co/api/v2/pokemon/58/"
			},
		"slot":1
	}
]

export const getters = {
	selectedPokemon: jest.fn().mockReturnValue(pokemon),
	selectedPokemonTypeName: jest.fn().mockReturnValue('ghost')
}

export const mutations = {
	addFavorite: jest.fn(),
	removeFavorite: jest.fn(),
	setLoading: jest.fn(),
	setPokemonTypes: jest.fn(),
	setSelectedPokemonType: jest.fn()
}

export const actions = {
	addFavoritePokemon: jest.fn(),
	loadSelectedPokemonType: jest.fn(),
	loadPokemonTypes: jest.fn(),
	removeFavoritePokemon: jest.fn()
}

export const state = {
	errors: {
		pokemonTypes: null,
	},
	favorites: [
		{"id":"200","name":"misdreavus","memo":null},
		{"id":"425","name":"drifloon","memo":"wonder what it looks like"},
		{"id":"12","name":"butterfree","memo":"butter"},
		{"id":"10035","name":"charizard-mega-y","memo":"long one"}
	],
	loading: false,
	pokemonTypes: [
		{"name":"fighting","url":"https://pokeapi.co/api/v2/type/2/"},
		{"name":"flying","url":"https://pokeapi.co/api/v2/type/3/"},
		{"name":"ground","url":"https://pokeapi.co/api/v2/type/5/"},
		{"name":"bug","url":"https://pokeapi.co/api/v2/type/7/"},
		{"name":"ghost","url":"https://pokeapi.co/api/v2/type/8/"},
		{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"},
		{"name":"dragon","url":"https://pokeapi.co/api/v2/type/16/"}
	],
	selectedPokemonType: {
		"damage_relations":{
			"double_damage_from":[
				{"name":"ghost","url":"https://pokeapi.co/api/v2/type/8/"},
				{"name":"dark","url":"https://pokeapi.co/api/v2/type/17/"}
			],
			"double_damage_to":[
				{"name":"ghost","url":"https://pokeapi.co/api/v2/type/8/"},
				{"name":"psychic","url":"https://pokeapi.co/api/v2/type/14/"}
			],
			"half_damage_from":[
				{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},
				{"name":"bug","url":"https://pokeapi.co/api/v2/type/7/"}
			],
			"half_damage_to":[
				{"name":"dark","url":"https://pokeapi.co/api/v2/type/17/"}
			],
			"no_damage_from":[
				{"name":"normal","url":"https://pokeapi.co/api/v2/type/1/"},
				{"name":"fighting","url":"https://pokeapi.co/api/v2/type/2/"}
			],
			"no_damage_to":[
				{"name":"normal","url":"https://pokeapi.co/api/v2/type/1/"}
			]
		},
		"game_indices":[
			{
				"game_index":8,
				"generation":{
					"name":"generation-i",
					"url":"https://pokeapi.co/api/v2/generation/1/"
				}
			},
			{
				"game_index":8,
				"generation":{
					"name":"generation-ii",
					"url":"https://pokeapi.co/api/v2/generation/2/"
				}
			}
		],
		"generation":{
			"name":"generation-i",
			"url":"https://pokeapi.co/api/v2/generation/1/"
		},
		"id":8,
		"move_damage_class":{
			"name":"physical",
			"url":"https://pokeapi.co/api/v2/move-damage-class/2/"
		},
		"moves":[
			{
				"name":"night-shade",
				"url":"https://pokeapi.co/api/v2/move/101/"
			},
			{
				"name":"confuse-ray",
				"url":"https://pokeapi.co/api/v2/move/109/"
			}
		],
		"name":"ghost",
		"names":[
			{
				"language":{
					"name":"ja-Hrkt",
					"url":"https://pokeapi.co/api/v2/language/1/"
				},
				"name":"ゴースト"
			},
			{
				"language":{
					"name":"ko",
					"url":"https://pokeapi.co/api/v2/language/3/"
				},
				"name":"고스트"
			}
		],
		"pokemon":pokemon
	},
};

// eslint-disable-next-line no-underscore-dangle
export function __createMocks(custom = { getters: {}, mutations: {}, actions: {}, state: {} }) {
	const mockGetters = Object.assign({}, getters, custom.getters);
	const mockMutations = Object.assign({}, mutations, custom.mutations);
	const mockActions = Object.assign({}, actions, custom.actions);
	const mockState = Object.assign({}, state, custom.state);

	return {
		getters: mockGetters,
		mutations: mockMutations,
		actions: mockActions,
		state: mockState,
		store: new Vuex.Store({
			getters: mockGetters,
			mutations: mockMutations,
			actions: mockActions,
			state: mockState,
		}),
	};
}

export const store = __createMocks().store;