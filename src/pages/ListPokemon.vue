<template>
  <body>
    <div class="container_head flex">
     
    </div>
    <div class="container">
      <div v-for="pokemon in pokemons"
        class="container_cards" :key="pokemon">
        <Card
          :name="pokemon.name"
          :id="pokemon.url.split('/')[6]"
          :details="getDetailsData(pokemon.url.split('/')[6])"
        />
      </div>
    </div>
  </body>
</template>
<script lang="ts" setup>
import { computed } from "vue"
import { useStore } from "vuex"
import Card from "../components/Card.vue"
import DetailPokemon from "../components/DetailPokemon.vue"

const store = useStore()
console.log(store)
const pokemons = computed(() => store.state.pokemons)

const getDetailsData = (id: Number) => {
  store.dispatch("getDetailsPokemons", id)
}
</script>
<style>

.container_head {
  padding-top: 50px;
}

.container_cards {
  float: left;
}

.container {
  margin: auto;
}

.input-search {
  background-color: aqua;
}
</style>
