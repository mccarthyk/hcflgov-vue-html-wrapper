<template lang="html">
  <main aria-labelledby="home-h1">

    <!--  -->
    <section v-if="true" class="py-5" aria-labelledby="dynamicallyGeneratedSectionId1">
      <div class="container my-0 my-lg-5">

        <h2 class="mt-0 text-center text-secondary font-serif font-weight-bold" id="dynamicallyGeneratedSectionId1">Common Resources</h2>

        <hr>

        <div class="row no-gutters align-items-stretch justify-content-center">
          <div v-for="(link, i) in qLinks" class="col-md-6 col-lg-4 col-xl p-1">
            <a href="#" class="card v-card card-body list-group-item-action text-center d-flex flex-column h-100">

              <div class="mb-3">
                <span class="fa-3x fa-fw text-secondary" :class="link.icon"></span>
              </div>

              <div class="h5 font-serif">
                {{ link.name }}
              </div>

              <div class="text-muted">
                <em>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </em>
              </div>

              <div v-if="i == 0 || i == 3" class="badge badge-primary text-white rounded px-2 position-absolute" style="right: 1rem;">
                <span class="fas fa-exclamation"></span>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>

    <!--  -->
    <section class="bg-white py-5" aria-labelledby="dynamicallyGeneratedSectionId2">
      <div class="container">

        <h2 class="text-center text-primary font-serif font-weight-bold" id="dynamicallyGeneratedSectionId2">Featured Links</h2>

        <hr>

        <div class="row align-items-stretch justify-content-around">
          <div v-for="(link, i) in fLinks" class="col-md-6 col-lg-4 mb-4">
            <a is="hc-icon-btn" href="#" :icon="link.icon" stretch>
              {{ link.name }}
            </a>
          </div>
        </div>

      </div>
    </section>

    <!--  -->
    <section class="row no-gutters align-items-stretch" aria-label="Featured News Articles">
      <div v-for="(post, i) in gradCards" class="col-sm-6 d-flex">
        <a href="#" is="hc-gradient-card" :sitecore-item="post" :date="new Date" :gradient="gradients[i]" :right="(i % 2 == 0)">
        </a>
      </div>
    </section>

    <!--  -->
    <section class="py-5 bg-light">
      <div class="container">

        <p class="text-center">
          <a href="#" class="btn btn-lg btn-primary">
            Visit the Newsroom
          </a>
        </p>

        <hr class="my-4">

        <!-- commissioners -->
        <div class="row align-items-top justify-content-around">
          <div v-for="commissioner in commissioners" class="col-md-3 my-2">
            <a href="#" :title="commissioner.name" class="text-dark text-decoration-none">
              <div class="embed-responsive embed-responsive-1by1 rounded-circle v-card" :style="`background-image: url(${commissioner.imgSrc}); background-size: cover;`"></div>
              <div class="text-center small mt-1">
                <strong class="h6 d-block">{{ commissioner.name }}</strong>
                {{ commissioner.title }}
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>

  </main>
</template>

<script>
import posts from './posts'

export default {
  mounted () {
    this.gradCards = posts.slice(0,4)
    this.$parent.jumbo = true
    this.$parent.pageTitle = 'Hillsborough County Florida'
  },
  computed: {
    gradients () {
      return ['info','warning','danger','success']
    }
  },
  data: () => ({
    qLinks: [
      { name: 'At Your Service', icon: 'far fa-handshake' },
      { name: 'Newsroom', icon: 'far fa-newspaper' },
      { name: 'Events', icon: 'far fa-calendar-alt' },
      { name: 'County Locations', icon: 'far fa-building' },
      { name: 'Jobs', icon: 'fas fa-briefcase' }
    ],
    fLinks: [
      { name: 'Adopt a Dog or Cat', icon: 'fas fa-paw' },
      { name: 'Visit the Pet Resource Center', icon: 'fas fa-building' },
      { name: 'Lost & Found Pets', icon: 'fas fa-search' },
      { name: 'Nuisance Animal Noise Ordinance', icon: 'fas fa-volume-up' },
      { name: 'Pet Adoption', icon: 'fas fa-paw' },
      { name: 'Pet Advocacy', icon: 'fas fa-heart' },
      { name: 'Pet Ownership', icon: 'fas fa-user' },
      { name: 'Report Animal Emergency or Cruelty', icon: 'fas fa-exclamation-triangle' },
      { name: 'Volunteer & Help Pet Resources', icon: 'fas fa-plus' },
    ],
    gradCards: [],
    commissioners: [
      {
        name: 'Sandra Murman',
        title: 'District 1',
        imgSrc: 'https://www.hillsboroughcounty.org/library/hillsborough/commissioners/murman-profile.jpg'
      },
      {
        name: 'Ken Hagan',
        title: 'District 2',
        imgSrc: 'https://www.hillsboroughcounty.org/library/hillsborough/commissioners/hagan-k-3.jpg'
      },
      {
        name: 'Lesley "Les" Miller, Jr.',
        title: 'District 3, Chairman',
        imgSrc: 'https://www.hillsboroughcounty.org/library/hillsborough/commissioners/miller-l-2/les-miller.jpg'
      },
      {
        name: 'Stacy White',
        title: 'District 4, Chaplain',
        imgSrc: 'https://www.hillsboroughcounty.org/library/hillsborough/commissioners/stacy-white-headshot.jpg'
      },
      {
        name: 'Mariella Smith',
        title: 'District 5, Countywide',
        imgSrc: 'https://www.hillsboroughcounty.org/library/hillsborough/media-center/images/commissioners/mariella-smith-web.jpg'
      },
      {
        name: 'Pat Kemp',
        title: 'District 6, Countywide, Vice Chair',
        imgSrc: 'https://www.hillsboroughcounty.org/library/hillsborough/commissioners/becknerk-3/pat-kemp-portrait.jpg'
      },
      {
        name: 'Kimberly Overman',
        title: 'District 7, Countywide',
        imgSrc: 'https://www.hillsboroughcounty.org/library/hillsborough/media-center/images/commissioners/overman-full-hcflgovnet.jpg'
      },
    ]
  })
}
</script>
