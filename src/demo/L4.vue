<template lang="html">
  <main class="py-5 bg-white flex-grow-1" :aria-labelledby="`levelFour${_uid}`">
    <div class="container">

      <h2 :id="`levelFour${_uid}`" class="sr-only">A L4</h2>


      <div class="row">
        <div class="col-md-8">
          <!--  -->
          <div class="rte">
            <p class="lead">
              Here you can research, apply for and track the status of permits for residential and commercial development in Hillsborough County.
            </p>

            <div class="row mb-3">
              <div class="col-sm-6">
                <a href="#" class="btn btn-lg btn-primary btn-block">Search Dogs</a>
              </div>
              <div class="col-sm-6">
                <a href="#" class="btn btn-lg btn-primary btn-block">Search Cats</a>
              </div>
            </div>

            <p v-for="n in 3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <ul is="hc-accordion">
              <li v-for="n in 4" is="hc-accordion-item" :open="(n == 1)" :key="n">
                <span slot="header">Header {{ n }}</span>
                Lorem {{ n }} ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </li>
            </ul>

          </div>
        </div>

        <div class="col-md-4">

          <a href="#" is="hc-icon-btn">Pet Resource Center</a>

        </div>
      </div>

    </div>
  </main>
</template>

<script>
export default {
  mounted () {
    this.$parent.jumbo = false
    this.$parent.pageTitle = 'Adopt a Dog or Cat'
  }
}
</script>
