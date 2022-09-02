<template>
  <div id="maps">
    <h2>Mapas</h2>
    <div id="grid">
      <label>
        <input type="checkbox" v-model="computedSelectAll" />
        <span>Todos</span>
      </label>

      <label :key="map" v-for="(formalName, map) in MAPS">
        <input type="checkbox" :value="map" v-model="computedMaps" />
        <span>{{ formalName }}</span>
      </label>
    </div>
  </div>
</template>

<script>
import { STORAGE_KEY_AVAILABLE_MAPS, MAPS } from "@/consts";
import Storage from "@/storage/index";

export default {
  name: "Maps",
  async mounted() {
    const storageMaps = await Storage.get(STORAGE_KEY_AVAILABLE_MAPS);

    if (storageMaps === false || typeof storageMaps === "undefined") {
      await Storage.set(STORAGE_KEY_AVAILABLE_MAPS, Object.keys(MAPS));
    }

    this.selectedMaps = await Storage.get(STORAGE_KEY_AVAILABLE_MAPS);
  },
  computed: {
    computedSelectAll: {
      get: function () {
        if (!this.selectedMaps) {
          return [];
        }
        return this.selectedMaps.length === Object.keys(MAPS).length;
      },
      set: async function (value) {
        if (value) {
          this.computedMaps = Object.keys(MAPS);
        } else {
          this.computedMaps = [];
        }
      },
    },
    computedMaps: {
      get: function () {
        return this.selectedMaps;
      },
      set: async function (values) {
        this.selectedMaps = values;
        await Storage.set(STORAGE_KEY_AVAILABLE_MAPS, values);
      },
    },
  },
  data() {
    return {
      MAPS,
      selectedMaps: [],
      selectedAll: false,
    };
  },
};
</script>

<style lang="scss" scoped>
#maps {
  h2 {
    align-self: start;
    text-transform: uppercase;
    color: lighten($color-success, 5%);
    font-family: Teko;
    line-height: 0.9;
    margin: 0px 0px 5px;
  }

  #grid {
    display: grid;
    grid-template-columns: 88px 88px 70px;

    label {
      color: white;
      font-family: Poppins, sans-serif;
      font-size: 13px;
      list-style: none;
      display: flex;
      cursor: pointer;
      input {
        margin-right: 4px;
      }
      span {
        margin-top: 3px;
      }
    }
  }
}
</style>
