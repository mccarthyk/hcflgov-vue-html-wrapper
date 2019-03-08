<template lang="html">
  <section class="py-3" :aria-labelledby="`newsArticle${_uid}`">
    <div class="container">

      <div class="row">

        <div class="col-md-8">

          <div class="">
            <img src="https://www.hillsboroughcounty.org/library/hillsborough/america-saves_nr.jpg" alt="" class="img-fluid v-card">

            <div class="d-sm-flex align-items-center justify-content-between my-2">
              <div>
                <strong class="font-weight-bold font-serif h6 text-uppercase">Posted:</strong>
                February 26, 2019 | 3:15 PM
              </div>
              <div>
                <strong class="font-weight-bold font-serif h6 text-uppercase">Share:</strong>
                <a href="#" class="text-primary">
                  <span class="fab fa-facebook"></span>
                </a>
                <a href="#" class="text-primary">
                  <span class="fab fa-twitter"></span>
                </a>
                <a href="#" class="text-primary">
                  <span class="fab fa-linkedin"></span>
                </a>
              </div>

            </div>

            <hr class="bg-info mt-0">
          </div>

          <div :id="`newsArticle${_uid}`" class="text-primary h2 font-weight-bold font-serif">{{ $parent.bannerTitle }}</div>

          <h2 class="text-secondary h5">Tagline Lorem Ipsum Dolar</h2>

          <div class="rte">
            <p v-for="n in 3">Lorem ipsum dolor sit amet, <a href="#">consectetur adipisicing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

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

        </div>

        <div class="col-md-4">
          <div class="sticky">
            <div class="card v-card mb-3">
              <div class="card-header py-3 text-secondary h5 font-weight-bold font-serif">
                Tagged
              </div>
              <div class="card-body small">
                No Tags
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  mounted () {
    this.$parent.jumbo = false
    this.$parent.pageTitle = 'A News Article with a Longer Title'
  }
}
</script>
