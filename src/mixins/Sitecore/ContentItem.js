/**
 * @mixin
 */
export default {
  props: {
    /**
     * A Sitecore Content Item
     */
    sitecoreItem: {
      type: Object,
      required: true
    },
    /**
     * Override the Item's Date, useful for items such as events where the publish date is less relevant than the event's start date
     */
    date: {
      type: Date
    }
  },
  computed: {
    heading () {
      return this.sitecoreItem["Heading"]
    },
    subHeading () {
      return this.sitecoreItem["SubHeading"]
    },
    publishDate () {
      return (this.date) ? this.date : this.sitecoreItem["PublishDate"]
    },
    body () {
      return this.sitecoreItem["Body"]
    },
    excerpt () {
      return this.sitecoreItem["Excerpt"]
    },
    image () {
      return this.sitecoreItem["Image"]
    },
    imgSrc () {
      return this.image["Src"]
    },
    url () {
      return this.sitecoreItem["DestinationUrl"]
    },
    icon () {
      return this.sitecoreItem["Icon"]
    },
    category () {
      return this.sitecoreItem["Category"]
    },
    tags () {
      return this.sitecoreItem["Tags"]
    },
    keywords () {
      return this.sitecoreItem["Keywords"]
    },

  }
}
