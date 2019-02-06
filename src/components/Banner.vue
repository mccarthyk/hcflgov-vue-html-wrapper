<template lang="html">
  <div class="hc-banner jumbotron jumbotron-fluid bg-info text-white my-0 py-4">
    <div class="container">

      <h1 class="hc-banner-title font-weight-bold m-0">
        {{ title }}
      </h1>

      <nav aria-label="Breadcrumb Navigation">
        <ol class="breadcrumb hc-banner-breadcrumb mb-0">
          <slot></slot>
          <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
        </ol>
      </nav>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
