<template lang="html">
  <div class="card h-100">
    <a :href="url" class="card-img-top position-relative">
      <div class="gradient-diag-info position-absolute py-1 px-2 text-white small text-shadow" style="bottom: 0;">
        <span :class="icon" aria-hidden="true"></span>
        {{ category }}
      </div>
      <img :src="imgSrc" alt="" class="img-fluid">
    </a>

    <div class="card-body">
      <h4 class="text-secondary h5 font-weight-bold font-serif">
        {{ heading }}
      </h4>

      <em class="small text-muted d-block">
        {{ publishDate.toLocaleString() }}
      </em>

      {{ excerpt }}
    </div>

    <div class="card-footer bg-white border-0">
      <a :href="url" class="btn btn-outline-primary btn-block">Continue Reading</a>
    </div>
  </div>
</template>

<script>
import SitecoreContentItemMixin from '../../mixins/Sitecore/ContentItem'

export default {
  name: 'hc-card-news',
  mixins: [SitecoreContentItemMixin]
}
</script>
