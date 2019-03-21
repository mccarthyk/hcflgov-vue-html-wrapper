<template lang="html">
  <div v-once class="tab-pane" :class="paneClass" v-bind="attrs">
    <!-- @slot The content of the Tab Pane -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'hc-tab',
  props: {
    /**
    * The link text of the Tab
    */
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    attrs () {
      return {
        id: `pane-${this.$parent._uid}-${this._uid}`,
        role: 'tabpanel',
        'aria-labelledby': `tab-${this.$parent._uid}-${this._uid}`
      }
    },
    active () {
      return (this._uid == this.$parent.firstChildId)
    },
    paneClass () {
      return [
        (this.active) ? 'active show' : null,
        (this.$parent.noFade) ? null : 'fade'
      ]
    }
  }
}
</script>

<docs></docs>
