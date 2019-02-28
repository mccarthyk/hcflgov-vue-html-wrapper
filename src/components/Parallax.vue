<template lang="html">
  <div class="">
    <v-parallax dark :src="src" :height="height">
      <div class="d-flex align-items-center h-100" :class="gradientClass">
        <div class="container">
          <slot></slot>
        </div>
      </div>
    </v-parallax>
  </div>
</template>

<script>
import VParallax from 'vuetify/lib/components/VParallax'

export default {
  extends: VParallax,
  props: {
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
@import "../assets/sass/custom";
@import "../assets/sass/mixins/gradients";

.v-parallax__content {
  padding: 0;
}

.gradient-diag-primary {
  @include gradient-diag($primary, $secondary, 0.8);
}
.gradient-diag-info {
  @include gradient-diag($info, $secondary, 0.8);
}
.gradient-diag-warning {
  @include gradient-diag($warning, $secondary, 0.8);
}
.gradient-diag-danger {
  @include gradient-diag($danger, $secondary, 0.8);
}
.gradient-diag-success {
  @include gradient-diag($success, $secondary, 0.8);
}
</style>
