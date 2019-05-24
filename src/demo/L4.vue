<template lang="html">
  <main class="py-4 bg-white flex-grow-1" :aria-labelledby="`levelFour${_uid}`">
    <div class="container">

      <h2 :id="`levelFour${_uid}`" class="sr-only">A L4</h2>

      <div class="row">
        <div class="col-md-8">
          <!--  -->
          <div class="rte">
            <p class="lead">
              You can adopt dogs and cats at The Pet Resource Center in Tampa. The center is open Tuesday through Sunday from 10 AM to 7 PM and is closed on Mondays. Call (813) 744-5660.
            </p>

            <div class="row mb-3">
              <div class="col-sm-6">
                <a href="#" class="btn btn-lg btn-primary btn-block" target="_blank">Search Dogs</a>
              </div>
              <div class="col-sm-6">
                <a href="#" class="btn btn-lg btn-primary btn-block" target="_blank">Search Cats</a>
              </div>
            </div>

            <p class="text-center small text-muted">Learn more about ADOPT with the <a href="#">ADOPT Tutorial Video</a></p>

            <h3>
              Ready-to-go Adoptions
            </h3>

            <p>
              Animals which have completed their "Stray Hold" time and have been spayed/neutered and fully vaccinated are considered "ready-to-go." Any animal in a "ready-to-go" status can go home with you today. All "ready-to-go" adoptions are $20, unless otherwise noted.
            </p>

            <h3>
              Pre-Adoptions
            </h3>

            <p>
              Animals that are beyond their hold period that are still waiting to be provided with veterinary services are available for early adoption, but cannot be released to the adopter until the necessary vaccinations and procedures have been administered. We can’t hold or reserve any animal outside of the early adoption process. Any animal in a "ready-to-go" status can go home with you today  for $20, **unless otherwise noted. Pre-adoption prices do not include the $20 rabies license fee.
            </p>

            <h3>
              Adoption Pricing
            </h3>

            <p v-for="n in 2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <!--  -->

            <ul is="hc-tabs" class="my-4">
              <li is="hc-tab" title="Tab Link 1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </li>

              <li is="hc-tab" title="Tab Link 2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </li>
            </ul>

            <p v-for="n in 1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <!--  -->

            <ul is="hc-accordion" class="mb-3">
              <li v-for="n in 4" is="hc-accordion-item" :open="(n == 1)" :key="n">
                <span slot="header">Header {{ n }}</span>
                Lorem {{ n }} ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </li>
            </ul>

            <!--  -->

          </div>
        </div>

        <div class="col-md-4">

          <a href="#" class="btn btn-outline-secondary btn-block py-4 mb-3" target="_blank">
            <span aria-hidden="true" class="fa-fw fa-2x far fa-file-alt"></span>
            An Accompanying Document
          </a>

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
