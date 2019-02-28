<template lang="html">
  <li class="list-group-item p-0">
    <a data-toggle="collapse" :href="`#collapse${_uid}`" class="list-group-item list-group-item-action d-flex align-items-center justify-content-between" :aria-controls="`collapse${_uid}`" :aria-expanded="expanded">
      <div :id="`heading${_uid}`">
        <slot name="header"></slot>
      </div>
      <i class="icon" :class="[icon, expandedClass]"></i>
    </a>

    <div ref="collapse" :id="`collapse${_uid}`" :aria-labelledby="`heading${_uid}`" class="collapse" :data-parent="parentAttr">
      <div class="card-body">
        <slot></slot>
      </div>
    </div>
  </li>
</template>

<script>
import $ from 'jquery'

export default {
  props: {
    icon: {
      type: String,
      default: 'fas fa-chevron-down'
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    expanded: false
  }),
  computed: {
    expandedClass () {
      return (this.expanded) ? 'expanded' : null
    },
    parentAttr () {
      return (this.$parent.multiple) ? null : `#accordion${this.$parent._uid}`
    }
  },
  created () {
    if (!this.$slots.header) console.warn('The accordion item has no header')
  },
  mounted () {
    $( this.$refs.collapse ).on('show.bs.collapse', () => { this.expanded = true })
    $( this.$refs.collapse ).on('hide.bs.collapse', () => { this.expanded = false })
    if (this.open) $( this.$refs.collapse ).collapse( 'show' )
  }
}
</script>

<style lang="scss" scoped>
$transitionTime: 0.3s;
$bezier: cubic-bezier(0.25, 0.8, 0.5, 1);

.icon {
  transform: rotateX( 0deg );
  transition: transform $transitionTime $bezier;
  &.expanded {
    transform: rotateX( 180deg );
  }
}
</style>
