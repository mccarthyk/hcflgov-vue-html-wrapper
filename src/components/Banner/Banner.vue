<template lang="html">
  <div class="jumbotron-bg-cover" :style="backgroundStyle">
    <div class="gradient-diag-danger pt-sm-5 d-flex align-items-end h-100">
      <div class="container pt-4 px-sm-4 bg-white">

        <h1 class="mt-0 text-left text-dark font-weight-bold display-3" id="dynamicallyGeneratedSectionId1">
          {{ title }}
        </h1>

        <hr class="bg-dark m-0 pt-1">

        <nav aria-label="Breadcrumb Navigation">
          <ol class="breadcrumb small mb-0">
            <!-- @slot Use this slot to place breadcrumb items in the banner -->
            <slot></slot>
            <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
          </ol>
        </nav>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hc-banner',
  props: {
    /**
    * Sets the H1 of the banner
    */
    title: {
      type: String,
      required: true
    },
    /**
    * The image source of the background image
    */
    imgSrc: {
      type: String,
      default: 'https://commbocc.github.io/hc-templates-jekyll/assets/images/JoeChilluraPark.jpg'
    }
  },
  computed: {
    backgroundStyle () {
      return `background: url(${this.imgSrc});`
    }
  }
}
</script>
