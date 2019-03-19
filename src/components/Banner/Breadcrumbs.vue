<template lang="html">
  <nav aria-label="Breadcrumb Navigation">
    <ol class="breadcrumb hc-banner-breadcrumb mb-0">
      <!-- @slot Use this slot to place breadcrumb items -->
      <slot></slot>
      <li class="breadcrumb-item active" aria-current="page">{{ active }}</li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'hc-banner-breadcrumbs',
  props: {
    /**
     * Sets the active breadcrumb item
     */
    active: {
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
