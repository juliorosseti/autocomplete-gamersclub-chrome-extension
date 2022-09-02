<template>
  <button :class="getDefaultClasses" :disabled="disabled" v-on="$listeners">
    <span><slot></slot></span>
  </button>
</template>
<script>
export default {
  props: {
    type: [Boolean, String],
    disabled: Boolean,
    loading: Boolean,
  },
  computed: {
    getDefaultClasses() {
      const output = ["btn"];

      if (this.type) {
        output.push(`btn-${this.type}`);
      } else {
        output.push(`btn-default`);
      }

      if (this.disabled || this.loading) {
        output.push(`btn-disabled`);
      }

      if (this.loading) {
        output.push(`is-loading`);
      }

      return output;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Oswald:300,400,700");

.btn {
  text-size-adjust: 100%;
  user-select: none;
  appearance: none;
  border: 0;
  line-height: 1;
  outline: 0;
  font-size: 1em;
  padding: 10px 15px;
  text-transform: uppercase;
  font-family: Oswald, sans-serif;
  color: white;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 2px 2px 2px 2px;
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1),
    0 8px 8px -2px rgba(0, 0, 0, 0.1);
  transition: background-color 0.16s ease-in;

  &.btn-default {
    background-color: $color-default;

    &:hover {
      background-color: $color-default-hover;
    }
  }

  &.btn-success {
    background-color: $color-success;

    &:hover {
      background-color: $color-success-hover;
    }
  }
}

.is-loading {
  &::after {
    content: " ";
    position: absolute;
    width: 16px;
    height: 16px;
    background-image: url("../assets/spinner.svg") !important;
    background-position: center;
    background-repeat: no-repeat;
    animation: spinner 1s linear infinite;
  }

  span {
    visibility: hidden;
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
