<template>
    <div>
        <div class="card open" :class="store.state.detailPokemon[props.id - 1].types[0].type.name" id="card">
            <p class="hp">
                <span>HP</span>
                {{store.state.detailPokemon[props.id - 1].stats[0].base_stat}}
            </p>
            <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.id}.svg`" :alt="`${props.name}`" />
            <h2 class="poke-name">{{ props.name }}</h2>
            <div class="types">
            </div>
            <div class="stats">
                <div>
                    <h3>{{
                        store.state.detailPokemon[props.id - 1].stats[1].base_stat
                        }}</h3>
                    <p>Attack</p>
                </div>
                <div>
                    <h3>{{store.state.detailPokemon[props.id - 1].stats[2].base_stat}}</h3>
                    <p>Defense</p>
                </div>
                <div>
                    <h3>{{store.state.detailPokemon[props.id - 1].stats[5].base_stat}}</h3>
                    <p>Speed</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
import { useStore } from "vuex";

const store = useStore();
const props: any = defineProps({
    id: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    }
});

</script>
<style scoped>

.fire {
    background-color: #ed8a8b;
}

.electric {
    background-color: #fcc719;
}

.water {
    background-color: #76befe;
}

.grass {
    background-color: #49d0b0;
}

.poison {
    background-color: #ba68c8;
}

.type-Dragon {
    background-color: #c29791;
}

.ground {
    background-color: #8a6d5a;
}

.bug {
    background-color: #c5e48c;
}

.normal {
    background-color: #f5a7b4;
}

.fairy {
    background-color: #ffe0ce;
}

.fighting {
    background-color: #f75540;
}

.ice {
    background-color: #7bf8d3;
}

.psychic {
    background-color: #9658fc;
}

.dragon {
    background-color: #616e79;
}

.rock {
    background-color: #523715;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

body {
    background-color: #eff3ff;
}

.container {
    width: 350px;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
}

#card {
    position: relative;
    width: 100%;
    padding: 30px 20px;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
}


#card img {
    display: block;
    width: 275px;
    max-height: 200px;
    height: 125px;
    position: relative;
    margin: 20px auto;
}

.hp {
    color:#000 ;
    width: 80px;
    background-color: #ffffff;
    text-align: center;
    padding: 8px 0;
    border-radius: 30px;
    margin-left: auto;
    font-weight: 400;
}

.poke-name {
    text-align: center;
    font-weight: 600;
    color: #fff;
}

.types {
    display: flex;
    justify-content: space-around;
    margin: 20px 0 40px 0;
}

.hp span,
.types span {
    font-size: 12px;
    letter-spacing: 0.4px;
    font-weight: 600;
}

.types span {
    padding: 5px 20px;
    border-radius: 20px;
    color: #ffffff;
}

.stats {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
}

.stats p {
    color: #404060;
}
.stats h3 {
    color: #fff;
}


#btn {
    display: block;
    padding: 15px 60px;
    font-size: 18px;
    background-color: #101010;
    color: #ffffff;
    position: relative;
    margin: 30px auto;
    border: none;
    border-radius: 5px;
}

</style>
