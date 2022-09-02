<template>
  <div>
    Criado pela comunidade
    <a
      href="https://github.com/juliorosseti/autocomplete-gamersclub-chrome-extension"
      target="_blank"
      >open-source</a
    >
    ❤️ Extensão não oficial.
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  text-align: center;
  padding: 25px 0px;
  color: white;
  font-size: 10px;
  font-family: Poppins, sans-serif;
  background-color: $color-darkness;

  border-top: 1px solid darken($color-darkness, 1%);
  a {
    color: white;
  }
}
</style>
