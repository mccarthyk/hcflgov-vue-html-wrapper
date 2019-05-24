<template lang="html">
  <main class="py-4 bg-white flex-grow-1" :aria-labelledby="`levelThree${_uid}`">
    <div class="container">

      <h2 :id="`levelThree${_uid}`" class="sr-only">Permits</h2>

      <div class="row">

        <div class="col-md-8">

          <!--  -->
          <div class="rte">
            <p class="lead">
              Here you can research, apply for and track the status of permits for residential and commercial development in Hillsborough County.
            </p>
          </div>

          <!--  -->
          <div class="card mb-3">
            <div class="card-header bg-secondary text-white">
              <span aria-label="hidden" class="fas fa-exclamation-triangle"></span>
              New Code Requirements
            </div>
            <div class="card-body">
              The new 6th edition (2017) of the Florida Building Code took effect on December 31, 2017. Permit applications and construction plans submitted after the effective date must demonstrate compliance with the new code.
            </div>
          </div>

          <!--  -->
          <div class="sticky-top bg-white">

            <ul is="hc-accordion" ref="filters" flush class="border mb-3">
              <li is="hc-accordion-item">
                <strong slot="header">Filter Actions</strong>
                <form>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div class="form-group small">
                    <label for="exampleFormControlSelect1">Type</label>
                    <select class="form-control form-control-sm" id="exampleFormControlSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div class="form-group small">
                    <label for="exampleFormControlSelect1">Category</label>
                    <select class="form-control form-control-sm" id="exampleFormControlSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div class="form-group small">
                    <label for="exampleFormControlSelect1">Keyword</label>
                    <input class="form-control form-control-sm" id="inlineFormInputName2" placeholder="Filter" type="text">
                  </div>
                  <a aria-controls="collapseExample" aria-expanded="false" class="btn btn-secondary btn-sm" data-toggle="collapse" href="#collapseExample" role="button">Apply Filters</a>
                </form>
              </li>
            </ul>

          </div>

          <!--  -->
          <div class="list-group">

            <a v-for="n in 25" class="list-group-item list-group-item-action rounded-0 mb-4" href="#">
              <div class="row align-items-center">
                <div class="col-3 col-md-2 col-xl-1">
                  <div class="d-flex flex-column text-primary py-3">
                    <span class="fa fa-fw fa-clipboard fa-2x mx-auto">
                    </span> <small class="mx-auto">Apply</small>
                  </div>
                </div>
                <div class="col-9 col-md-10 col-xl-11">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Building Permit</h5>
                    <small class="text-muted">General Building</small>
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </div>
            </a>

          </div>

        </div>

        <div class="col-md-4">

          <div class="sticky">
            <h4 class="text-muted font-weight-bold">Related Information</h4>
            <ul class="nav flex-column small">
              <li class="nav-item">
                <a class="nav-link" href="#">Approved Hedge List</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Approved Tree List</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Building Inspection Codes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Grand Oak Regulations</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Habitat Preservation Area Management Plan Proposal</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Invasive Plant Removal, Disposal and Maintenance Plan</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Invasive Plants in Hillsborough County</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Land Excavation Permits</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Open Burning Restrictions</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Permits for Homeowners</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Rezoning, Plans and Permit Information (PGM) Store</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Protective Barrier Requirements for Existing Trees</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Suggested Tree Replacement Species</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Trees that don't Require a Tree Removal Permit</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">What Permits are Available to Pull Online?</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Work Exempt from Permits</a>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  </main>
</template>

<script>
export default {
  mounted () {
    this.$parent.jumbo = false
    this.$parent.pageTitle = 'Permits'
  }
}
</script>
