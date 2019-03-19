<template lang="html">
  <a :href="url" class="hc-gradient-card flex-grow-1 d-flex text-decoration-none text-white" :class="rightClass" :style="`background-image: url(${imgSrc})`">
    <div class="flex-grow-1 d-flex flex-column justify-content-center p-4 p-md-5" :class="gradientClass">
      <div class="hc-gradient-card-body">
        <h3 class="font-serif h4 font-weight-bold mb-0">
          <!-- @slot The card's heading, defaults to `sitecoreItem.Heading` if unspecified -->
          <slot name="header">
            {{ heading }}
          </slot>
        </h3>

        <em v-if="date" class="small text-light">
          {{ publishDate.toLocaleString() }}
        </em>

        <div class="">
          <!-- @slot The card's body, defaults to `sitecoreItem.Body` if unspecified -->
          <slot>
            {{ excerpt }}
          </slot>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import SitecoreContentItemMixin from '../../mixins/Sitecore/ContentItem'

export default {
  name: 'hc-gradient-card',
  mixins: [SitecoreContentItemMixin],
  props: {
    /**
    *
    */
    gradient: {
      type: String,
      default: 'info'
    },
    /**
    * Aligns the text to the right, `.text-sm-right`
    */
    right: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    gradientClass () {
      return `gradient-diag-${this.gradient}`
    },
    rightClass () {
      return (this.right) ? `right text-sm-right` : null
    }
  }
}
</script>

<docs>
  ```html
  <a is="hc-gradient-card" :sitecore-item="{ "Heading": "..." }" gradient="info">
    <!-- <span slot="header">Custom Card Heading</span> -->
    <!-- Custom card body... lorem ipsum dolor -->
  </a>
  ```
</docs>
