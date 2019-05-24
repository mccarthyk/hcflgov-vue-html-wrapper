<template lang="html">
  <div class="">

    <!-- htv live -->
    <section v-if="true" is="hc-htv-youtube-live" api-key="AIzaSyCHM69-GIjh_GglzByriM2HTnlxIxM8Mjg"></section>
    <!-- aljazeera -->
    <section v-else is="hc-htv-youtube-live" api-key="AIzaSyCHM69-GIjh_GglzByriM2HTnlxIxM8Mjg" channel-id="UCNye-wNBqNL5ZzHSJj3l8Bg"></section>

    <!-- featured -->
    <section v-if="false" class="py-5 bg-light">
      <div class="container">

        <h2 class="mt-0 text-left text-dark font-weight-bold display-4" id="dynamicallyGeneratedSectionId1">
          Featured News &amp; Events
        </h2>

        <hr class="bg-dark mt-0 pt-1">

        <div class="row align-items-stretch justify-content-center">
          <div v-for="(post, i) in posts.slice(0,3)" class="col-md-6 col-lg-4 mb-4">
            <div is="hc-card-news" :sitecore-item="post" :key="i" :date="new Date" class="v-card"></div>
          </div>
        </div>

        <div class="row align-items-stretch justify-content-center">
          <div class="col-md-6 col-lg-4 mb-3">
            <a is="hc-icon-btn" href="#" icon="fab fa-youtube" class="" stretch>Hillsborough Television</a>
          </div>
          <div class="col-md-6 col-lg-4 mb-3">
            <a is="hc-icon-btn" href="#" icon="fas fa-broadcast-tower" class="" stretch>Media Packages</a>
          </div>
        </div>

      </div>
    </section>

    <!-- search results -->
    <section class="py-4 bg-white">
      <div class="container">

        <!-- <h2 class="mt-0 text-left text-dark font-weight-bold display-4" id="dynamicallyGeneratedSectionId1">
        News Archive
      </h2> -->

      <!-- <hr class="bg-dark mt-0 pt-1"> -->

      <div class="row">

        <div class="col-lg-4">

          <div class="mb-3">
            <a is="hc-icon-btn" href="#" icon="fab fa-youtube" class="" stretch>Hillsborough Television</a>
          </div>
          <div class="mb-3">
            <a is="hc-icon-btn" href="#" icon="fas fa-broadcast-tower" class="" stretch>Media Packages</a>
          </div>

          <div class="d-flex flex-wrap justify-content-around my-3">
            <a href="#" class="btn btn-link bg-white text-muted v-card btn-sm mb-2">
              <span class="fab fa-facebook fa-2x fa-fw"></span>
            </a>
            <a href="#" class="btn btn-link bg-white text-muted v-card btn-sm mb-2">
              <span class="fab fa-twitter fa-2x fa-fw"></span>
            </a>
            <a href="#" class="btn btn-link bg-white text-muted v-card btn-sm mb-2">
              <span class="fab fa-youtube fa-2x fa-fw"></span>
            </a>
            <a href="#" class="btn btn-link bg-white text-muted v-card btn-sm mb-2">
              <span class="fab fa-instagram fa-2x fa-fw"></span>
            </a>
            <a href="#" class="btn btn-link bg-white text-muted v-card btn-sm mb-2">
              <span class="fab fa-linkedin fa-2x fa-fw"></span>
            </a>
          </div>

          <div class="sticky my-3">

            <!-- filters -->
            <div class="card">
              <div class="card-header font-weight-bold text-secondary d-flex justify-content-between pr-3">
                <div>
                  <span aria-hidden="true" class="fa fa-filter"></span>
                  Filter News
                </div>

                <div class="">
                  <a @click.prevent="filters = !filters" href="#" class="text-dark ml-2"><span class="fa-fw far fa-list-alt"></span></a>
                  <a @click.prevent="$refs.filterAcc.hideAll()" href="#" class="text-dark ml-2"><span class="fa-fw fas fa-chevron-circle-up"></span></a>
                  <a @click.prevent="$refs.filterAcc.showAll()" href="#" class="text-dark ml-2"><span class="fa-fw fas fa-chevron-circle-down"></span></a>
                </div>
              </div>

              <ul v-show="filters" ref="filterAcc" is="hc-accordion" multiple flush>
                <li is="hc-accordion-item">
                  <span class="text-muted m-0" slot="header">Types</span>
                  <div v-for="n in 5" class="form-check">
                    <input class="form-check-input" type="checkbox" value="" :id="`defaultCheck${n}`">
                    <label class="form-check-label" :for="`defaultCheck${n}`">
                      Filter checkbox {{ n }}
                    </label>
                  </div>
                </li>
                <li is="hc-accordion-item">
                  <span class="text-muted m-0" slot="header">Categories</span>
                  <div v-for="n in 5" class="form-check">
                    <input class="form-check-input" type="checkbox" value="" :id="`defaultCheck${n}`">
                    <label class="form-check-label" :for="`defaultCheck${n}`">
                      Filter checkbox {{ n }}
                    </label>
                  </div>
                </li>
                <li is="hc-accordion-item">
                  <span class="text-muted m-0" slot="header">Keywords</span>
                  <div v-for="n in 5" class="form-check">
                    <input class="form-check-input" type="checkbox" value="" :id="`defaultCheck${n}`">
                    <label class="form-check-label" :for="`defaultCheck${n}`">
                      Filter checkbox {{ n }}
                    </label>
                  </div>
                </li>
              </ul>

            </div>

          </div>

        </div>

        <div class="col-lg-8 -1">

          <!-- <hr class="mt-0"> -->

          <div class="">
            <!-- posts -->
            <div is="hc-search-result" v-for="(post, i) in posts" :key="i" :sitecore-item="post" :date="new Date" class="mb-3" :suggested="i == 0"></div>
          </div>

        </div>

      </div>

      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center flex-wrap">
          <li class="page-item disabled">
            <a class="page-link m-1 v-card" href="#" tabindex="-1" aria-disabled="true">Previous</a>
          </li>
          <li v-for="n in 7" class="page-item"><a class="page-link m-1 v-card" href="#">{{ n }}</a></li>
          <li class="page-item">
            <a class="page-link m-1 v-card" href="#">Next</a>
          </li>
        </ul>
      </nav>

    </div>
  </section>

  <!--  -->
  <section class="py-4 bg-dark gradient-diag-dark text-light">
    <div class="container text-center">
      <strong class="text-primary">
        Some kind of an announcement, not too serious!
      </strong>
      <em class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</em>
    </div>
  </section>

  <!-- additional news sources etc. -->
  <section class="py-5 bg-white">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">

          <img src="https://picsum.photos/700/400/?random" class="img-fluid mb-3 v-card" alt="">

          <a is="hc-icon-btn" href="#" icon="fas fa-exclamation-triangle" class="mb-3">
            HCFL ALert
          </a>

          <a is="hc-icon-btn" href="#" icon="fas fa-globe" class="mb-3">
            Stay Safe
          </a>

        </div>
        <div class="col-md-6">
          <nav class="nav flex-column">
            <a v-for="(post, i) in posts.slice(0,8)" :key="i" href="#" class="nav-link">{{ post.Heading }}</a>
          </nav>
        </div>
      </div>
    </div>
  </section>

</div>
</template>

<script>
import posts from './posts'

export default {
  data: () => ({
    filters: true,
    posts: []
  }),
  mounted () {
    this.posts = posts
    this.$parent.jumbo = false
    this.$parent.pageTitle = 'Newsroom'
  }
}
</script>
