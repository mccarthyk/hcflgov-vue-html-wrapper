<template lang="html">
  <v-parallax dark :src="src" :height="height">
    <div class="d-flex align-items-center h-100" :class="gradientClass">
      <div class="container">
        <slot></slot>
      </div>
    </div>
  </v-parallax>
</template>

<script>
import VParallax from 'vuetify/lib/components/VParallax'

export default {
  components: { VParallax },
  props: {
    src: {
      type: String,
      default: 'https://commbocc.github.io/hc-templates-jekyll/assets/images/Tampa-Downtown-Skyline.jpg'
    },
    height: {
      type: Number,
      default: 350
    },
    gradient: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    gradientClass () {
      return `gradient-diag-${this.gradient}`
    }
  }
}
</script>

<style lang="scss">
.v-parallax__content {
  padding: 0;
}
</style>
