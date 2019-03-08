<template lang="html">
  <ul class="list-group list-group-flush v-card" :id="`accordion${_uid}`">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {
    multiple: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideAll () {
      this.$children.forEach(x => x.hide())
    },
    showAll () {
      this.$children.forEach(x => x.show())
    }
  }
}
</script>
