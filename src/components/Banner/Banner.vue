<template lang="html">
  <div class="hc-banner jumbotron jumbotron-fluid bg-info text-white my-0 py-4">
    <div class="container">

      <h1 class="hc-banner-title font-weight-bold m-0">
        {{ title }}
      </h1>

      <!-- @slot Content passed to the default slot will not be renderd -->
      <slot v-if="false"></slot>

      <!-- @slot Use this slot to place breadcrumb items in the banner -->
      <slot name="breadcrumbs"></slot>

    </div>
  </div>
</template>

<script>
export default {
  name: 'hc-banner',
  props: {
    /**
     * Sets and styles the H1 of the banner
     */
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<docs>
  ```html
  <div is="hc-banner" title="The Page Title">
    <!-- accessibility fallback for when Javascript is disabled -->
    <h1>The Page Title</h1>

    <ol slot="breadcrumbs" is="hc-banner-breadcrumbs" active="The Page Title">
      <li class="breadcrumb-item"><a href="./">Home</a></li>
    </ol>
  </div>
  ```
</docs>
