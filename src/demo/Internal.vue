<template lang="html">
  <div class="">
    <!-- demo -->
    <section v-if="true" class="bg-white py-5" aria-labelledby="dynamicallyGeneratedSectionId">
      <div class="container">

        <!-- PLACE CONTENT HERE -->

        <h2 id="dynamicallyGeneratedSectionId">Section Heading with White Background</h2>

        <!-- Vue `v-for` -->
        <div class="rte">
          <p v-for="n in 2">
            Lorem {{ n }} ipsum dolor sit amet, <a href="#">consectetur</a> adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div class="row align-items-center justify-content-center">
          <div v-for="n in 5" class="col-lg-4 col-md-6r mb-4">
            <a is="hc-icon-btn" href="#icon-btn" icon="fas fa-paw">
              Icon Button {{ n }} Lorem ipsum dolor sit amet
            </a>
          </div>
        </div>

      </div>
    </section>

    <section class="py-5" aria-labelledby="dynamicallyGeneratedSectionId2">
      <div class="container">

        <h2 class="text-center text-secondary mb-4" id="dynamicallyGeneratedSectionId2">Unspecified Background, Styled Heading</h2>

        <hr>

        <div class="row">
          <div class="col-md-8">
            <!-- rte -->
            <div class="rte">

              <p class="lead">Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              <div class="row"><div class="col-6"><p><a href="#" class="btn btn-primary btn-block">Search Dogs</a></p></div> <div class="col-6"><p><a href="#" class="btn btn-primary btn-block">Search Cats</a></p></div></div>

              <p v-for="n in 2">Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p class="text-center">
                <a v-for="n in 5" href="#" class="btn" :class="(n == 5) ? 'btn-outline-primary' : 'btn-primary'">Button {{ n }}</a>
              </p>
              <p v-for="n in 2">Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              <!-- accordion -->
              <ul is="hc-accordion" class="mb-3 mb-md-0">
                <li is="hc-accordion-item" open>
                  <div slot="header">Open Accordion Header</div>
                  <p>
                    Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </li>
                <li is="hc-accordion-item" v-for="n in 4" :key="n">
                  <div slot="header">Item {{ n + 1 }}</div>
                  <p>
                    Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </li>
              </ul>

              <!-- input group -->
              <div class="input-group my-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
                <div class="input-group-append">
                  <button class="btn btn-secondary" type="button" id="button-addon2">Button</button>
                </div>
              </div>

            </div>
          </div>

          <div class="col-md-4">

            <div class="mb-3 card v-card">
              <div class="card-header py-3 text-secondary h5 font-weight-bold font-accent">
                Contact Communications & Digital Media
              </div>
              <div class="liust-group list-group-flush">
                <div class="list-group-item d-flex align-items-center">
                  <span class="fa-fw mr-3 text-muted fas fa-user"></span>
                  <span>
                    <strong>Annete Spina</strong> <em>Director Communications & Digital Media</em>
                  </span>
                </div>
                <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                  <span class="fa-fw mr-3 text-muted fas fa-envelope"></span>
                  Email Communications & Digital Media
                </a>
                <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                  <span class="fa-fw mr-3 text-muted fas fa-phone"></span>
                  (813) 272-5314
                </a>
                <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                  <span class="fa-fw mr-3 text-muted fas fa-map-marker-alt"></span>
                  County Center, 21st Floor<br>
                  601 E. Kennedy Blvd.,<br>
                  Tampa, FL 33602
                </a>
              </div>
            </div>


            <!-- sticky -->
            <div class="sticky">
              <!-- nav links -->
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
}
</script>
