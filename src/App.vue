<template>
  <div id="app">
    <div id="content">
      <Logo />

      <div id="main">
        <Maps />

        <Button
          @click="toggleHandler"
          :loading="isSearching"
          :type="getTypeHandler"
        >
          Aguardar convites para completar
        </Button>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import Maps from "@/components/Maps";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Storage from "@/storage/index";
import Producer from "@/events/producer/index";
import { STORAGE_KEY_IS_SEARCHING } from "@/consts";

export default {
  name: "App",
  components: {
    Logo,
    Maps,
    Button,
    Footer,
  },

  async mounted() {
    this.isSearching = await Storage.get(STORAGE_KEY_IS_SEARCHING);
  },

  computed: {
    getTypeHandler() {
      if (this.isSearching) {
        return false;
      }
      return "success";
    },
  },
  methods: {
    async toggleHandler() {
      this.isSearching = !this.isSearching;

      if (this.isSearching) {
        Producer.sendMessage({ handler: "start" });
      } else {
        Producer.sendMessage({ handler: "stop" });
      }
    },
  },
  data() {
    return {
      isSearching: false,
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Teko");

body {
  font-size: 100%;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;

  #app {
    width: 22.6rem;
    margin: 0 auto;
    background: url("./assets/bg.webp") no-repeat top center;

    #content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      background-color: transparentize($color-darkness, 0.3);

      #main {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 0px 10px;

        button {
          margin: 30px 0px 10px;
        }
      }
    }
  }
}
</style>
