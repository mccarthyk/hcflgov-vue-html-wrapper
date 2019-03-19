<template lang="html">
  <section class="py-3 bg-light" :aria-labelledby="`newsArticle${_uid}`">
    <div class="container">

      <div class="row">

        <div class="col-md-8">

          <div class="v-card position-relative">
            <div class="gradient-diag-info position-absolute py-1 px-2 text-white small text-shadow" style="bottom: 0;">
              <span :class="icon" aria-hidden="true"></span>
              {{ category }}
            </div>
            <img :src="imgSrc" alt="" class="img-fluid">
          </div>

          <div class="d-sm-flex align-items-center justify-content-between my-2">
            <div>
              <strong class="font-weight-bold font-serif h6 text-uppercase">Posted:</strong>
              {{ publishDate.toLocaleString() }}
            </div>
            <div class="d-flex justify-content-between">
              <ul class="list-inline m-0">
                <li class="list-inline-item">
                  <strong class="font-weight-bold font-serif h6 text-uppercase">Share:</strong>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="text-primary">
                    <span class="fab fa-facebook"></span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="text-primary">
                    <span class="fab fa-twitter"></span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="text-primary">
                    <span class="fab fa-linkedin"></span>
                  </a>
                </li>

              </ul>
            </div>
          </div>

          <hr class="bg-info mt-0">

          <h1 :id="`newsArticle${_uid}`" class="text-primary h2 font-serif font-weight-bold">{{ heading }}</h1>

          <h2 v-if="subHeading" class="text-secondary h3 font-serif">{{ subHeading }}</h2>

          <div class="rte" v-html="body">
          </div>

        </div>

        <div class="col-md-4">
          <div class="sticky">
            <div class="card mb-3">
              <div class="card-header py-3 text-secondary h6 font-weight-bold font-serif">
                Tagged
              </div>
              <div class="card-body ">

                <ul v-if="tags.length" class="list-inline m-0">
                  <li v-for="tag in tags" class="list-inline-item">
                    <a href="#tags" class="badge badge-info rounded text-white">
                      {{ tag }}
                    </a>
                  </li>
                </ul>
                <div v-else>
                  No Tags
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
import SitecoreContentItemMixin from '../mixins/Sitecore/ContentItem'
import posts from './posts'

export default {
  mixins: [SitecoreContentItemMixin],
  props: {
    sitecoreItem: {
      type: Object,
      default: () => posts[0]
    }
  },
  mounted () {
    this.$parent.jumbo = false
    this.$parent.pageTitle = this.heading
  }
}
</script>
