<template lang="html">
  <div :class="(flush) ? null : 'v-card'">
    <ul class="list-group list-group-flush" :id="`accordion${_uid}`">
      <!-- @slot Place [hc-accordion-item](#accordionitem) components here -->
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hc-accordion',
  props: {
    /**
    * Allows multiple accordion items to be expanded at the same time
    */
    multiple: {
      type: Boolean,
      default: false
    },
    /**
    * Removes the the wrapping element's shadow by removing the `.v-card` class
    */
    flush: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    /**
    * Collapse all child accordion items
    * @public
    */
    hideAll () {
      this.$children.forEach(x => x.hide())
    },
    /**
    * Expand all child accordion items
    * @public
    */
    showAll () {
      this.$children.forEach(x => x.show())
    }
  }
}
</script>
