/**
 * @mixin
 */
export default {
  methods: {
    xLink (item) {
      return (this.crossOrigin) ? this.crossOriginRoot + item.Path : item.Path
    },
  },
  props: {
    /**
     * The [HTML target attribute](https://www.w3schools.com/tags/att_a_target.asp) of the links
     */
    linkTargets: {
      type: String,
      default: '_self'
    },
    /**
     * Prepends the URL set in `crossOriginRoot` to links if set to `true`
     */
    crossOrigin: {
      type: Boolean,
      default: true
    },
    /**
     * Prepend this URL to links if `crossOrigin` is set to `true`
     */
    crossOriginRoot: {
      type: String,
      default: 'https://hillsboroughcounty.org'
    }
  }
}
