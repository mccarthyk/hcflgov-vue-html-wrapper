export default {
  methods: {
    xLink (item) {
      return (this.crossOrigin) ? this.crossOriginRoot + item.Path : item.Path
    },
  },
  props: {
    linkTargets: {
      type: String,
      default: '_self'
    },
    crossOrigin: {
      type: Boolean,
      default: true
    },
    crossOriginRoot: {
      type: String,
      default: 'https://hillsboroughcounty.org'
    }
  }
}
