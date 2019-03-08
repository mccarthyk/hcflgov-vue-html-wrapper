<template lang="html">
  <section v-if="isLive" class="py-0 bg-dark gradient-diag-dark" aria-label="HTV Live">
    <div class="container">

      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" :src="emebdUrl" allowfullscreen></iframe>
      </div>

    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    apiKey: {
      type: String,
      required: true
    },
    channelId: {
      type: String,
      default: 'UCvdfJe4Q4u9YudwH89yJkDQ'
    }
  },
  data: () => ({
    response: null,
    isLive: false
  }),
  mounted () {
    this.fetchLiveInfo()
  },
  methods: {
    fetchLiveInfo () {
      let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${this.channelId}&eventType=live&type=video&key=${this.apiKey}`
      axios.get(url).then(json => {
        this.response = json
        this.isLive = (this.response.data.items.length) ? true : false
      }).catch(() => (this.response = null))
    }
  },
  computed: {
    emebdUrl () {
      return (this.isLive) ? `https://www.youtube.com/embed/${this.response.data.items[0].id.videoId}?rel=0` : null
    }
  }
}
</script>
