<template lang="html">
  <a :href="url" class="card text-dark text-decoration-none list-group-item-action" :class="suggestedBorderClass">

    <div v-if="suggested" class="card-header bg-light gradient-diag-info">
      <span class="text-white h5 m-0 font-italic">Suggested Result</span>
    </div>

    <div class="row no-gutters align-items-stretch">
      <div class="col">
        <div class="card-body">

          <h4 class="mt-0 mb-1 text-secondary text-capitalize">
            {{ heading }}
          </h4>

          <div class="lead font-italic small">
            {{ subHeading }}
          </div>

          <div class="">
            {{ excerpt }}
          </div>

          <span class="text-muted small">Posted {{ publishDate.toLocaleString() }} in {{ category }}</span>

        </div>
      </div>

      <div v-if="hasImg" class="d-none d-sm-block col-sm-3">
        <div class="h-100 d-flex align-items-end justify-content-end text-right" :style="`background: url(${imgSrc}); background-size: cover; background-position: center center`">
          <span class="gradient-diag-info text-white small text-truncate px-1">
            <span :class="icon" aria-hidden="true"></span>
            {{ category }}
          </span>
        </div>
      </div>
    </div>

  </a>
</template>

<script>
import SitecoreContentItemMixin from '../../mixins/Sitecore/ContentItem'

export default {
  name: 'hc-search-result',
  mixins: [SitecoreContentItemMixin],
  props: {
    /**
    *
    */
    suggested: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({}),
  computed: {
    suggestedBorderClass () {
      return (this.suggested) ? 'border border-info' : null
    },
    borderClass () {
      let klasses = ['primary', 'info', 'warning', 'success']
      var klass = klasses[Math.floor(Math.random() * klasses.length)]
      return `border-${klass}`
    },
    hasImg () {
      return (this.imgSrc) ? true : false
    }
  }
}
</script>
