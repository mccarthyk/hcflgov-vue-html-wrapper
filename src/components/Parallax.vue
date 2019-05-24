<template lang="html">
  <v-parallax dark :src="src" :height="height">
    <div class="d-flex align-items-center h-100" :class="gradientClass">
      <div class="container">
        <!-- @slot The content within the parallax element-->
        <slot></slot>
      </div>
    </div>
  </v-parallax>
</template>

<script>
import VParallax from 'vuetify/lib/components/VParallax'

export default {
  name: 'hc-parallax',
  components: { VParallax },
  props: {
    /**
    * The image source of the background image
    */
    src: {
      type: String,
      default: 'https://commbocc.github.io/hc-templates-jekyll/assets/images/JoeChilluraPark.jpg'
    },
    /**
    * The height of the element in pixels
    */
    height: {
      type: Number,
      default: 350
    },
    /**
    * The Bootstrap color class of the gradient<br>
    * `primary, dark, light, info, success, warning, danger`
    */
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
