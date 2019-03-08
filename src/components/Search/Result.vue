<template lang="html">
  <div class="card" :class="suggestedBorderClass">

    <div v-if="suggested" class="card-header bg-info py-3">
      <span class="text-white h5 m-0 font-weight-bold font-serif">Suggested Result</span>
    </div>

    <div class="media card-body border-left result" :class="gradClass">

      <div class="mr-3 small">
        <span class="text-secondary fa-fw fa-2x" :class="iconsClass"></span>
      </div>

      <div class="media-body">
        <a href="#" class="mt-0 mb-1 h5 text-secondary font-serif font-weight-bold text-capitalize">
          {{ post.title }}
        </a>

        <div class="">
          {{ post.body }}
        </div>

        <div class="d-flex align-items-center justify-content-between">
          <span class="text-muted small">Posted: {{ new Date().toLocaleString() }}</span>
          <a href="#" class="btn btn-outline-primary btn-sm" aria-label="Read more of Article Title">Read More...</a>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
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
    imageSrc () {
      let images = [`https://picsum.photos/70/?image=${Math.floor(Math.random() * (this.post.id + 99))}`, false]
      // images = [false]
      return images[Math.floor(Math.random() * images.length)]
    },
    category () {
      let klasses = ['primary', 'info', 'warning', 'success']
      return klasses[Math.floor(Math.random() * klasses.length)]
    },
    iconsClass () {
      let icons = ['fas fa-newspaper', 'fas fa-globe', 'far fa-file-pdf', 'fas fa-play', 'fas fa-calendar-alt', 'fas fa-bullhorn']
      return icons[Math.floor(Math.random() * icons.length)]
    },
    gradClass () {
      return `border-${this.category}`
    }
  }
}
</script>
