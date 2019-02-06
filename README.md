# @hcflgov/vue-html-wrapper

> A Vue.js plugin

## Basic Usage

Use the HTML below as a base layout.

```html
<!doctype html>
<html lang="en">
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <link rel="stylesheet" href="./dist/build.css">
  <!-- Vue.use(Hcflgov, { cssViaJs: true })  -->

  <title></title>
</head>
<body>

  <main id="hc-main" class="d-flex flex-column">
    <header>
      <!-- https://www.w3.org/WAI/GL/2016/WD-WCAG20-TECHS-20160105/G1 -->
      <nav is="hc-navbar" logo-href="./" skip-content-link="#main-content"></nav>

      <ol is="hc-banner" title="@hcflgov/vue-html-wrapper">
        <!-- ancestors -->
        <li class="breadcrumb-item"><a href="./">Home</a></li>
      </ol>
    </header>

    <!-- PLACE CONTENT HERE -->

    <footer is="hc-footer" class="mt-auto"></footer>
  </main>

  <script src="https://unpkg.com/vue@2.5.22/dist/vue.js"></script>
  <script src="./dist/build.js"></script>

  <script type="text/javascript">
  Vue.use(Hcflgov);
  new Vue({
    el: '#hc-main'
  });
  </script>
</body>
</html>
```

### Customizations

#### HTML & CSS

Refer to the [Bootstrap documentation](https://getbootstrap.com/).

#### Navigation Component

> the props below show the default values

* `logo-href="https://hillsboroughcounty.org"` - the URL (absolute or relative) that the logo links to.
* `logo-target="_self"` - the [HTML target attribute](https://www.w3schools.com/tags/att_a_target.asp) of the logo.
* `link-targets="_self"` - the [HTML target attribute](https://www.w3schools.com/tags/att_a_target.asp) of the dropdown links.
* `:show-form="true"` - Show the search form dropdown in the navbar.
* `form-action="https://hillsboroughcounty.org/en/search"` - the [HTML form Action attribute](https://www.w3schools.com/tags/att_form_action.asp) of the search form.
* `form-method="get"` - the [HTML form method attribute](https://www.w3schools.com/tags/att_form_method.asp) of the search form.
* `form-target="_self"` - the [HTML form target attribute](https://www.w3schools.com/tags/att_form_target.asp) of the search form.
* `:form-show-filters="true"` - whether or not to show the content type filters below the search form.
* `:cutom-nav="false"` - When set to true a [Vue Slot](https://vuejs.org/v2/guide/components.html#Single-Slot) can be used to populate custom [nav content](https://getbootstrap.com/docs/4.0/components/navbar/#nav). See the example below:

```html
<nav is="hc-navigation" logo-href="/" :custom-nav="true">
  <li class="nav-item active">
    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </li>
</nav>
```

#### Banner Component

A [Vue Slot](https://vuejs.org/v2/guide/components.html#Single-Slot) is used to populate the banner's [breadcrumb](https://getbootstrap.com/docs/4.0/components/breadcrumb/) ancestry.

```html
<ol is="hc-banner" title="Banner Title">
  <!-- ancestors -->
  <li class="breadcrumb-item"><a href="#">Home</a></li>
  <li class="breadcrumb-item"><a href="#">Parent Page</a></li>
</ol>
```

> the props below show the default values

* `title=""` - _(required)_ the title of the current page

#### Footer Component

> the props below show the default values

* `link-targets="_self"` - the [HTML target attribute](https://www.w3schools.com/tags/att_a_target.asp) of the footer links.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
