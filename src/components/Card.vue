<template>
  <div class="container_card">
    
    <div class="container_image_card flex">
      <img
        class="image_card"
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.id}.svg`"
        :alt="`${props.name}`"
      />
    </div>
    <h3 class="name_card">{{ props.name }}</h3>
    <div class="container_buttons flex">
      <button class="button_info" @click="TogglePopup('buttonTrigger', props.id)">
        Details
      </button>
      <Popup
        v-if="popupTriggers.buttonTrigger"
        :TogglePopup="() => TogglePopup('buttonTrigger', props.id)">
        <DetailPokemon
          :id="props.id"
          :name="props.name"/>
      </Popup>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from "vuex";
import { defineProps, ref } from "vue";
import Popup from "./Popup.vue";
import DetailPokemon from "./DetailPokemon.vue";
import axios from "axios";

const store = useStore();
const addStatus = ref(true);
const props: any = defineProps({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  }
});
const popupTriggers: any = ref({
  buttonTrigger: false,
});

const TogglePopup = (trigger: string, id: number) => {
  popupTriggers.value[trigger] = !popupTriggers.value[trigger];
  const detailPokemon = store.state.detailPokemon[id - 1]
};

const showPokemon = (id: any) => {
  store.dispatch("getDetailsPokemons", id);
}

</script>
<style>
.container_image_card {
  padding: 1rem;
}

.container_id_card {
    color: #000;
    margin: 5px;
    padding: 0 7px;
    /* border: 1px solid #484848; */
    border-radius: 1rem;
    width: 3rem;
    font-weight: 350;
    font-size: 1rem;
}

.container_card {
  border: 1px solid #788896;
  border-radius: 0.5rem;
  width: 160px;
  height: 160px;
  background-color: #e3e6e9;
  margin: 1rem;
}

.image_card {
  max-width: 90px ;
  height: 85px;
}
.button_remove{
  padding: 12px;
    border-radius: 20px;
    font-weight: 700;
}
.name_card {
  text-align: center;
  color: #000;
}


.button_info {
    border-radius: 8px;
    font-size: 12px;
    letter-spacing: 0px;
    text-decoration: none;
    text-transform: uppercase;
    color: #000;
    cursor: pointer;
    border: 2px solid;
    padding: 0.25em 0.5em;
    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
    position: relative;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.button_info:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}

@media (min-width: 768px) {
  .button_info {
    padding: 0.25em 0.75em;
  }
}
</style>
