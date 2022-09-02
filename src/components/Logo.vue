<template>
  <div>
    <img alt="Gamers Club" :src="logo" />
  </div>
</template>

<script>
import logo from "@/assets/logo.svg";

export default {
  name: "Logo",
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 35px 0px 20px;
}
</style>
