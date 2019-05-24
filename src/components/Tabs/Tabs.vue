<template lang="html">
  <div :class="(card) ? 'card' : null">

    <div :class="(card) ? 'card-header pt-1' : 'mb-1'">
      <ul v-if="tabLinks.length" class="nav nav-tabs" :class="listClass" role="tablist">
        <li v-for="(tab, i) in tabLinks" class="nav-item">
          <a :class="linkClass(i)" v-bind="linkAttrs(tab, i)">
            {{ tab.title }}
          </a>
        </li>
      </ul>
    </div>

    <div class="tab-content" :class="(this.card) ? 'card-body' : null">
      <!-- @slot Place `hc-tab` items here -->
      <slot></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: 'hc-tabs',
  props: {
    /**
    * Centers the tab links
    */
    center: {
      type: Boolean,
      default: false
    },
    /**
    * Wraps the tabs in a card, see [Bootstrap Card Navigation](https://getbootstrap.com/docs/4.3/components/card/#navigation)
    */
    card: {
      type: Boolean,
      default: false
    },
    /**
    * Disables the [Fade Effect](https://getbootstrap.com/docs/4.3/components/navs/#fade-effect)
    */
    noFade: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.tabLinks = this.getTabs()
  },
  data: () => ({
    tabLinks: []
  }),
  computed: {
    tabs () {
      return this.$slots.default.filter(x => x.componentOptions && x.componentOptions.tag == 'hc-tab')
    },
    firstChildId () {
      return this.tabs[0].componentInstance._uid
    },
    listClass () {
      return [
        (this.center) ? 'justify-content-center' : null,
        (this.card) ? 'card-header-tabs' : null
      ]
    }
  },
  methods: {
    getTabs () {
      return this.tabs.map(x => ({
        id: x.componentInstance._uid,
        title: x.componentOptions.propsData.title
      }))
    },
    linkClass (index) {
      return [
        'nav-link text-decoration-none border-bottom-0',
        (index == 0) ? 'active' : null
      ]
    },
    linkAttrs (tab, index) {
      return {
        href: `#pane-${this._uid}-${tab.id}`,
        id: `tab-${this._uid}-${tab.id}`,
        role: 'tab',
        'data-toggle': 'tab',
        'aria-controls': `pane-${this._uid}-${tab.id}`,
        'aria-selected': (index == 0) ? 'true' : 'false'
      }
    }
  }
}
</script>
