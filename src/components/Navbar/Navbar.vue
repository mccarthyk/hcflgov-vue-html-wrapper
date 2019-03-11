<template>
  <nav id="hc-nav" aria-label="Site Navigation" class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">

      <!-- https://www.w3.org/WAI/GL/2016/WD-WCAG20-TECHS-20160105/G1 -->
      <a :href="skipContentLink" class="sr-only">Skip to Main Content</a>

      <a class="navbar-brand" :href="logoHref" :target="logoTarget">
        <img src="../../assets/hc-logo-horizontal-RGB.png" alt="Hillsborough County Logo" class="logo">
      </a>

      <button ref="navToggler" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav ml-auto">

          <li id="hc-nav-search-nav-item" ref="navSearchDropdown" v-if="showForm" class="nav-item order-lg-12 dropdown">
            <a @click="focusSearch" href="#" class="nav-link dropdown-toggle d-none d-lg-inline-block" title="Search" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="fas fa-fw fa-search" aria-hidden="true"></span>
              <span class="sr-only">Search</span>
            </a>

            <div class="dropdown-menu hc-nav-search-dropdown-menu">

              <!-- search -->
              <SearchForm ref="searchForm" :action="formAction" :method="formMethod" :target="formTarget" :show-filters="showFormFilters" />

            </div>
          </li>

          <!-- @slot When `customNav` is set to true custom [Bootstrap `.nav-items`](https://getbootstrap.com/docs/4.3/components/navbar/) can be used -->
          <slot v-if="customNav"></slot>

          <li v-else v-for="link in navLinks" class="nav-item order-lg-1 dropdown">
            <a href="#" class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{ link.Name }}
            </a>
            <div class="dropdown-menu">
              <h4 class="d-none d-lg-block text-info font-serif font-weight-bold">{{ link.Name }}</h4>
              <div class="dropdown-menu-2-col">
                <a v-for="child in link.Children" class="dropdown-item" :href="xLink(child)" :target="linkTargets">
                  {{ child.Name }}
                </a>
              </div>
            </div>
          </li>

        </ul>

      </div>

    </div>
  </nav>
</template>

<script>
import axios from 'axios'
import Links from '../../mixins/links'
import SearchForm from './SearchForm'

export default {
  name: 'hc-navbar',
  mixins: [Links],
  components: { SearchForm },
  mounted () {
    if (!this.customNav) {
      this.fetchNavLinks()
    }
  },
  data () {
    return {
      navLinks: []
    }
  },
  methods: {
    fetchNavLinks () {
      axios.get(this.$hcHtmlWrapper.navbarEndpoint).then(res => this.navLinks = res.data)
    },
    /**
    * Focus the search input
    * @public
    */
    focusSearch () {
      this.$nextTick(() => {
        this.$refs.searchForm.focusSearch()
      })
    }
  },
  props: {
    /**
    * The URL (absolute or relative) that the logo links to
    */
    logoHref: {
      type: String,
      default: 'https://hillsboroughcounty.org'
    },
    /**
    * The [HTML target attribute](https://www.w3schools.com/tags/att_a_target.asp) of the logo
    */
    logoTarget: {
      type: String,
      default: '_self'
    },
    /**
    * Shows or hides the search form dropdown in the navbar
    */
    showForm: {
      type: Boolean,
      default: true
    },
    /**
    * The [HTML form Action attribute](https://www.w3schools.com/tags/att_form_action.asp) of the search form
    */
    formAction: {
      type: String,
      default: 'https://hillsboroughcounty.org/search'
    },
    /**
    * The [HTML form method attribute](https://www.w3schools.com/tags/att_form_method.asp) of the search form
    */
    formMethod: {
      type: String,
      default: 'get'
    },
    /**
    * The [HTML form target attribute](https://www.w3schools.com/tags/att_form_target.asp) of the search form
    */
    formTarget: {
      type: String,
      default: '_self'
    },
    /**
    * Shows or hides the content type filters below the search form
    */
    showFormFilters: {
      type: Boolean,
      default: true
    },
    /**
    * When set to true the  can be used to populate custom [nav content](https://getbootstrap.com/docs/4.0/components/navbar/#nav)
    */
    customNav: {
      type: Boolean,
      default: false
    },
    /**
    * The [W3C G1](https://www.w3.org/WAI/GL/2016/WD-WCAG20-TECHS-20160105/G1) identifier that skips to the main content of a page
    */
    skipContentLink: {
      type: String,
      default: '#main-content'
    }
  }
}
</script>

<docs>
  ```html
  <!-- use Hillsborough County navigation links -->
  <header>
    <nav is="hc-navbar" logo-href="./" class="v-card"></nav>
  </header>
  ```

  ```html
  <!-- use custom navigation links -->
  <header>
    <nav is="hc-navbar" custom-nav logo-href="./" class="v-card">
      <li class="nav-item">
        <a class="nav-link" href="#">A Custom Link</a>
      </li>
    </nav>
  </header>
  ```
</docs>
