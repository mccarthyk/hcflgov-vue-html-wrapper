<template lang="html">
  <section class="py-4 bg-white flex-grow-1" aria-labelledby="banner">

    <!-- subheading -->
    <div v-if="subHeading" class="container">
      <p class="h2 text-secondary font-italic mb-3">{{ subHeading }}</p>
    </div>

    <!-- video -->
    <div v-if="true" class="container embed-responsive embed-responsive-16by9 mb-3">
      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
    </div>

    <!-- article content -->
    <div class="container">
      <div class="row">

        <div class="col-lg-8">

          <!-- article body -->
          <div class="rte" v-html="body"></div>

          <!-- article meta -->
          <div class="row justify-content-center align-items-center my-3">
            <div class="col text-center text-sm-left text-muted small">
              Posted {{ publishDate.toLocaleString() }} in {{ category }}
            </div>
            <div class="col btn-group btn-group-sm justify-content-center justify-content-sm-end" role="group" aria-label="Share this article">
              <button type="button" class="btn btn-outline-light btn-sm text-muted">
                <span class="lead fab fa-facebook"></span>
              </button>
              <button type="button" class="btn btn-outline-light btn-sm text-muted">
                <span class="lead fab fa-twitter"></span>
              </button>
              <button type="button" class="btn btn-outline-light btn-sm text-muted">
                <span class="lead fab fa-linkedin"></span>
              </button>
            </div>
          </div>

        </div>

        <div class="col-lg-4">

          <!-- image -->
          <figure class="figure">
            <img :src="imgSrc" class="figure-img img-fluid v-card" alt="...">
            <figcaption class="figure-caption">A caption for the above image.</figcaption>
          </figure>

          <!-- related articles -->
          <div class="card mb-3">
            <div class="card-header font-weight-bold text-secondary">
              <span aria-label="hidden" class="fas fa-newspaper"></span>
              Related Articles
            </div>

            <div class="list-group list-group-flush">
              <a  v-for="(item, i) in relatedArticles" href="#" class="list-group-item list-group-item-action small">
                <h6 class="mb-0">{{ item.Heading }}</h6>
                <em clsas="small">{{ item.SubHeading }}</em>
                <span class="text-muted small d-block">{{ item.PublishDate.toLocaleString() }}</span>
              </a>
            </div>
          </div>

          <!-- tags -->
          <ul v-if="tags.length" class="list-inline m-1">
            <li v-for="tag in tags" class="list-inline-item">
              <a href="#tags" class="badge badge-info text-white">
                {{ tag }}
              </a>
            </li>
          </ul>

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
  data: () => ({
    relatedArticles: []
  }),
  mounted () {
    this.$parent.jumbo = false
    this.$parent.pageTitle = this.heading
    this.relatedArticles = posts.slice(0,4)
  }
}
</script>
