<template lang="html">
  <a href="#" class="hc-gradient-card flex-grow-1 d-flex text-decoration-none text-white" :class="rightClass" :style="`background-image: url(${imgSrc})`">
    <div class="flex-grow-1 d-flex flex-column justify-content-center p-4 p-md-5" :class="gradientClass">
      <div class="hc-gradient-card-body">
        <h3 class="font-serif">
          <slot name="header"></slot>
        </h3>
        <div class="">
          <slot></slot>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    gradient: {
      type: String,
      default: 'info'
    },
    right: {
      type: String,
      default: null
    }
  },
  computed: {
    gradientClass () {
      return `gradient-diag-${this.gradient}`
    },
    rightClass () {
      return (this.right) ? `right ${this.right}` : null
    }
  }
}
</script>
