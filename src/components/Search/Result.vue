<template lang="html">
  <div class="card" :class="suggestedBorderClass">

    <div v-if="suggested" class="card-header bg-info py-3">
      <span class="text-white h5 m-0 font-weight-bold font-serif">Suggested Result</span>
    </div>

    <div class="media card-body border-left result" :class="borderClass">

      <div class="mt-2 mr-3 small">
        <span class="text-secondary fa-fw fa-2x" :class="icon"></span>
      </div>

      <div class="media-body">
        <a :href="url" class="mt-0 mb-1 h4 text-secondary font-serif font-weight-bold text-capitalize">
          {{ heading }}
        </a>

        <div class="">
          {{ excerpt }}
        </div>

        <div class="d-flex align-items-center justify-content-between">
          <span class="text-muted small">Posted: {{ publishDate.toLocaleString() }}</span>
          <a :href="url" class="btn btn-outline-primary btn-sm" aria-label="Read more of Article Title">Read More...</a>
        </div>
      </div>

    </div>

  </div>
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
      return (this.suggested) ? 'border border-info border-left-0' : null
    },
    borderClass () {
      let klasses = ['primary', 'info', 'warning', 'success']
      var klass = klasses[Math.floor(Math.random() * klasses.length)]
      return `border-${klass}`
    }
  }
}
</script>
