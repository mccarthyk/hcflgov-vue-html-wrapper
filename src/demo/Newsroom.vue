<template lang="html">
  <div class="">

    <!-- htv live -->
    <section v-if="true" is="hc-htv-youtube-live" api-key="AIzaSyCHM69-GIjh_GglzByriM2HTnlxIxM8Mjg"></section>
    <!-- aljazeera -->
    <section v-else is="hc-htv-youtube-live" api-key="AIzaSyCHM69-GIjh_GglzByriM2HTnlxIxM8Mjg" channel-id="UCNye-wNBqNL5ZzHSJj3l8Bg"></section>

    <!-- featured -->
    <section class="py-5 bg-white">
      <div class="container">

        <div v-if="false" class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <h2 class="text-primary text-center font-weight-bold font-serif">Featured News &amp; Events</h2>

        <hr>

        <div class="row align-items-stretch justify-content-center">
          <div v-for="(img, i) in featured" class="col-md-6 col-lg-4 mb-4">

            <div class="card h-100">
              <a href="#" class="card-img-top position-relative">
                <div class="gradient-diag-info position-absolute py-1 px-2 text-white small text-shadow" style="bottom: 0;">
                  Category
                </div>
                <img :src="img" alt="" class="img-fluid">
              </a>

              <div class="card-body">
                <h4 class="text-secondary font-weight-bold font-serif">Title of Article</h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span v-if="i == 1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
              </div>

              <div class="card-footer bg-white border-0">
                <a href="#" class="btn btn-outline-primary btn-block">Continue Reading</a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- all news parallax -->
    <div is="hc-parallax" gradient="warning" :height="175">
      <h2 class="text-center font-serif font-weight-bold text-shadow m-0">All News</h2>
    </div>

    <!-- search results -->
    <section class="py-4 bg-light">
      <div class="container">

        <div class="row align-items-stretch justify-content-center mb-3">
          <div class="col-md-6 col-lg-4 my-3">
            <a is="hc-icon-btn" href="#" icon="fab fa-youtube" class="v-card" stretch>Hillsborough Television</a>
          </div>
          <div class="col-md-6 col-lg-4 my-3">
            <a is="hc-icon-btn" href="#" icon="fas fa-broadcast-tower" class="v-card" stretch>Media Packages</a>
          </div>
        </div>

        <div class="row">

          <div class="col-md-4 order-md-12">

            <div class="d-flex flex-wrap justify-content-around mb-4">
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
              <div class="card border-0 v-card">
                <div class="card-header h6 text-secondary d-flex justify-content-between pr-3">
                  <strong class="font-weight-bold font-serif">Filters</strong>
                  <div class="">
                    <a @click.prevent="filters = !filters" href="#" class="text-dark ml-2"><span class="fa-fw far fa-list-alt"></span></a>
                    <a @click.prevent="$refs.filterAcc.hideAll()" href="#" class="text-dark ml-2"><span class="fa-fw fas fa-chevron-circle-up"></span></a>
                    <a @click.prevent="$refs.filterAcc.showAll()" href="#" class="text-dark ml-2"><span class="fa-fw fas fa-chevron-circle-down"></span></a>
                  </div>
                </div>

                <ul v-show="filters" ref="filterAcc" is="hc-accordion" multiple>
                  <li is="hc-accordion-item" open>
                    <strong class=" text-muted m-0" slot="header">Types</strong>
                    <div v-for="n in 5" class="form-check">
                      <input class="form-check-input" type="checkbox" value="" :id="`defaultCheck${n}`">
                      <label class="form-check-label" :for="`defaultCheck${n}`">
                        Filter checkbox {{ n }}
                      </label>
                    </div>
                  </li>
                  <li is="hc-accordion-item">
                    <strong class=" text-muted m-0" slot="header">Categories</strong>
                    <div v-for="n in 5" class="form-check">
                      <input class="form-check-input" type="checkbox" value="" :id="`defaultCheck${n}`">
                      <label class="form-check-label" :for="`defaultCheck${n}`">
                        Filter checkbox {{ n }}
                      </label>
                    </div>
                  </li>
                  <li is="hc-accordion-item">
                    <strong class=" text-muted m-0" slot="header">Keywords</strong>
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

          <div class="col-md-8 order-md-1">

            <!-- <hr class="mt-0"> -->

            <div class="">
              <!-- posts -->
              <div is="hc-search-result" v-for="post in posts" :key="post.id" :post="post" class="mb-3 v-card" :suggested="post.id == 1"></div>
            </div>

          </div>

        </div>

        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>

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
              <a v-for="post in posts.slice(1,10)" :key="post.id" href="#" class="nav-link">{{ post.title }}</a>
            </nav>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  data: () => ({
    filters: true,
    featured: [
      'https://www.hillsboroughcounty.org/library/hillsborough/creditcard_nr.png',
      'https://www.hillsboroughcounty.org/library/hillsborough/smallkitten_nr.png',
      'https://www.hillsboroughcounty.org/library/hillsborough/campday3.jpg'
    ],
    posts: []
  }),
  methods: {
    fetchPosts () {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=15').then(res => res.json()).then(posts => (this.posts = posts))
    }
  },
  mounted () {
    this.$parent.jumbo = false
    this.$parent.pageTitle = 'Newsroom'
    this.fetchPosts()
  }
}
</script>
