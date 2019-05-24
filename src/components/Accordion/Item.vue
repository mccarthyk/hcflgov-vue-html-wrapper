<template lang="html">
  <li class="list-group-item p-0">
    <a @click.prevent="toggle" :href="`#collapse${_uid}`" class="list-group-item list-group-item-action d-flex align-items-center justify-content-between" :aria-controls="`collapse${_uid}`" :aria-expanded="expanded">
      <div :id="`heading${_uid}`">
        <!-- @slot Place the header of the accordion item here -->
        <slot name="header"></slot>
      </div>
      <i class="icon" :class="[icon, expandedClass]"></i>
    </a>

    <div ref="collapse" :id="`collapse${_uid}`" :aria-labelledby="`heading${_uid}`" class="collapse" :data-parent="parentAttr">
      <div class="card-body">
        <!-- @slot Place the content of the accrodion item here -->
        <slot></slot>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'hc-accordion-item',
  props: {
    /**
    * The icon class. The icon will be rotated 180 degrees when expanded
    */
    icon: {
      type: String,
      default: 'fa fa-chevron-down'
    },
    /**
    * Expanded on mount
    */
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
  methods: {
    toggle () {
      (this.expanded) ? this.hide() : this.show()
    },
    hide () {
      this.expanded = false
      this.$refs.collapse.classList.toggle('collapsing')
      this.$refs.collapse.classList.remove('show')
      this.$refs.collapse.classList.toggle('collapsing')
    },
    show () {
      this.expanded = true
      this.$refs.collapse.classList.toggle('collapsing')
      this.$refs.collapse.classList.add('show')
      this.$refs.collapse.classList.toggle('collapsing')
    }
  },
  mounted () {
    if (this.open) this.show()
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
