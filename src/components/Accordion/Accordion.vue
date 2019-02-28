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
  }
}
</script>
