<template lang="html">
  <div class="hc-banner jumbotron jumbotron-fluid bg-info text-white my-0 py-4">
    <div class="container">

      <h1 class="hc-banner-title font-weight-bold m-0">
        {{ title }}
      </h1>

      <nav aria-label="Breadcrumb Navigation">
        <ol class="breadcrumb hc-banner-breadcrumb mb-0">
          <!-- @slot Use this slot to place breadcrumb items in the banner -->
          <slot></slot>
          <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
        </ol>
      </nav>

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
  <ol is="hc-banner" title="The Page Title">
    <li class="breadcrumb-item"><a href="./">Home</a></li>
  </ol>
  ```
</docs>
