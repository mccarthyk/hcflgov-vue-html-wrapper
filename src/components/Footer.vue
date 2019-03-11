<template>
  <footer id="hc-footer" class="bg-secondary text-white py-5">
    <div class="container">

      <div class="row align-items-center text-center">
        <div class="col-lg-6 col-md-12 mb-4 order-md-2">
          <ul class="list-inline mb-0">
            <li v-for="link in footerLinks" class="list-inline-item mx-3">
              <a :href="link.href" class="text-white" :target="linkTargets">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 order-lg-1 order-md-3">
          <a href="https://hillsboroughcounty.org" :target="linkTargets">
            <img src="../assets/hc-logo-horizontal-RGB_drkbgrd.png" alt="Hillsborough County Logo" class="logo img-fluid">
          </a>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 order-md-12">
          <ul class="list-inline my-2 hide-external-indicator">
            <li v-for="link in socialLinks" class="list-inline-item">
              <a :href="link.href" :title="link.name" class="text-white" target="_blank" :aria-label="link.name">
                <span class="fa-fw" :class="link.iconClass" aria-hidden="true"></span>
              </a>
            </li>
          </ul>

          <!-- google translate -->
          <div id="google_translate_element" class="my-2"></div>

          <!-- website feedback -->
          <a href="https://hcflgov.formstack.com/forms/website_feedback" target="_blank" class="hide-external-indicator small text-white">
            Provide Website Feedback
          </a>

        </div>
      </div>

      <p class="text-center small mt-3 mb-0">
        <a href="https://goo.gl/maps/jetXJdK71mu" class="text-white hide-external-indicator" target="_blank">
          601 E. Kennedy Blvd.<br>
          Tampa, FL 33602
        </a>
      </p>

    </div>
  </footer>
</template>

<script>
import Links from '../mixins/links'

window.googleTranslateElementInit = function () {
  new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'ar,de,en,es,fr,ht,pt,vi', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element')
}

export default {
  name: 'hc-footer',
  mixins: [Links],
  mounted () {
    this.initGoogTranslate()
  },
  methods: {
    initGoogTranslate (a, b) {
      a = document.createElement('script')
      b = document.getElementsByTagName('script')[0]
      a.async = 1
      a.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      b.parentNode.insertBefore(a, b)
    }
  },
  data: () => ({
    footerLinks: [
      {
        text: 'Board of County Commissioners',
        href: 'https://hillsboroughcounty.org/government/board-of-county-commissioners'
      },
      {
        text: 'Contact Us',
        href: 'https://hillsboroughcounty.org/about-hillsborough/contact-us'
      },
      {
        text: 'County Locations',
        href: 'https://hillsboroughcounty.org/residents/citizens/county-locations'
      },
      {
        text: 'Jobs',
        href: 'https://hillsboroughcounty.org/about-hillsborough/jobs'
      },
      {
        text: 'HCFL Alert Information',
        href: 'https://hillsboroughcounty.org/residents/public-safety/emergency-management/hcfl-alert'
      },
      {
        text: 'Accessibility',
        href: 'https://hillsboroughcounty.org/government/departments/ada'
      }
    ],
    socialLinks: [
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/HillsboroughFL/',
        iconClass: 'fab fa-facebook'
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/HillsboroughFL',
        iconClass: 'fab fa-twitter'
      },
      {
        name: 'YouTube',
        href: 'https://www.youtube.com/user/HillsboroughCounty',
        iconClass: 'fab fa-youtube'
      },
      {
        name: 'InstaGram',
        href: 'https://www.instagram.com/hillsboroughfl/',
        iconClass: 'fab fa-instagram'
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/hillsborough-county',
        iconClass: 'fab fa-linkedin'
      }
    ]
  })
}
</script>

<docs>
  ```html
  <footer is="hc-footer" class="mt-auto"></footer>
  ```
</docs>
