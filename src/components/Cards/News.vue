<template lang="html">
  <div class="card h-100">

    <span v-if="hideImg" class="gradient-diag-info pt-1"></span>

    <a v-else :href="url" class="card-img-top d-flex flex-column justify-content-end">
      <div class="gradient-diag-info position-absolute px-2 text-white small text-truncate">
        <span :class="icon" aria-hidden="true"></span>
        {{ category }}
      </div>
      <img :src="imgSrc" alt="" class="img-fluid">
    </a>

    <div class="card-body">
      <h4 class="text-secondary">
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

    <a :href="url" class="card-footer text-right bg-white border-0">Read More &raquo;</a>
  </div>
</template>

<script>
import SitecoreContentItemMixin from '../../mixins/Sitecore/ContentItem'

export default {
  name: 'hc-card-news',
  mixins: [SitecoreContentItemMixin],
  props: {
    hideImg: {
      type: Boolean,
      default: false
    }
  }
}
</script>
