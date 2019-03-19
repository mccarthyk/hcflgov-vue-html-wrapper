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

            <p v-for="n in 2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div class="table-responsive">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Cost Each Purchase</th>
                    <th># Per Month</th>
                    <th>Cost Per Month</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Soft Drinks</td>
                    <td>$1</td>
                    <td>30</td>
                    <td>$30</td>
                  </tr>
                  <tr>
                    <td>
                      Television/movie
                      monthly subscription
                    </td>
                    <td>$8.99</td>
                    <td>1</td>
                    <td>$8.99</td>
                  </tr>
                  <tr>
                    <td>Lunches out</td>
                    <td>$6</td>
                    <td>12</td>
                    <td>$72</td>
                  </tr>
                  <tr>
                    <td>E-Book download</td>
                    <td>$9.99</td>
                    <td>3</td>
                    <td>$29.97</td>
                  </tr>
                  <tr>
                    <td>Coffee drive-thru</td>
                    <td>$2.25</td>
                    <td>12</td>
                    <td>$27</td>
                  </tr>
                  <tr>
                    <td>Impulse snacks</td>
                    <td>$3.50</td>
                    <td>10</td>
                    <td>$35</td>
                  </tr>

                  <tr>
                    <td colspan="3"><strong>Total</strong></td>
                    <td><strong>$202.96</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>


            <h3>A Heading</h3>

            <p v-for="n in 3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <ul is="hc-accordion" class="mb-3">
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
