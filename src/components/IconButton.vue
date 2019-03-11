<template lang="html">
  <a href="#" class="list-group-item list-group-item-action p-0 d-flex flex-row align-items-center justify-content-between" :class="stretchClass">

    <div class="align-self-stretch bg-light p-3 d-flex align-items-center">
      <span class="fa-fw fa-2x text-secondary" :class="icon" aria-hidden="true"></span>
    </div>

    <div class="flex-grow-1 p-3 h5 m-0 text-secondary">
      <slot></slot>
    </div>

  </a>
</template>

<script>
export default {
  name: 'hc-icon-btn',
  props: {
    icon: {
      type: String,
      default: 'fas fa-globe'
    },
    stretch: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    stretchClass () {
      return (this.stretch) ? 'h-100' : null
    }
  }
}
</script>
