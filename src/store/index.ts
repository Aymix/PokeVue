import { createStore } from "vuex";
import api from "../api";
import VuexPersistence from "vuex-persist";


const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default createStore({
  state: {   
    pokemons: [],
    detailPokemon: [],
  },
  getters: {},
  mutations:{
    setPokemons(state, payload): void {
      Object.assign(state.pokemons, payload);
    },
    setDetailsPokemons(state, payload: any): void {
      state.detailPokemon.push(payload);
    },
  },
  actions: {
    getAllPokemons(context, [limit, offset]): void {
      api
        .get(`pokemon?limit=${limit}&offset=${offset}`)
        .then((response: any) =>
          context.commit("setPokemons", response.data.results)
        );
    },
    getDetailsPokemons(context, pokemonId) {
      api
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then((response) =>
          context.commit("setDetailsPokemons", response.data)
        );
    },
    
  },
  // plugins: [vuexLocal.plugin],
});
