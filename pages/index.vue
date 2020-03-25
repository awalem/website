<template>
  <div class="container is-fluid">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-6">
              <h1 class="title is-spaced">...من نحن</h1>
              <p class="subtitle">
                هنا عوالم المجتمع الافتراضي الأول ليكون مركزاً لبيئة تعاونية
                للمعنيين بريادة الأعمال وبيئة ريادة الأعمال من حاضنات ومسرعات
                وممكنات ومستثميرن ومجتمعات تقنية حتى انه يوفر معمل ومختبر لرواد
                الأعمال .
              </p>
              <div class="buttons">
                <a class="button is-success" href="http://playjs.org/groups"
                  >الدخول الى عوالم</a
                >
              </div>
            </div>
            <div class="column is-6">
              <img src="~assets/images/22.png" alt />
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="container has-text-centered">
        <div class="buttons are-small is-centered">
          <a class="button" href="#">
            <img src="~assets/placeholder/icons/twitter.svg" alt />
          </a>
          <a class="button" href="#">
            <img src="~assets/placeholder/icons/facebook-f.svg" alt />
          </a>
          <a class="button" href="#">
            <img src="~assets/placeholder/icons/instagram.svg" alt />
          </a>
          <a class="button" href="#">
            <img src="~assets/placeholder/icons/linkedin-in.svg" alt />
          </a>
        </div>
        <p>
          <a class="subtitle is-7 is disabled" href="http://xyz.dev">
            <img
              class="image is-32x32 is-inline-flex"
              src="https://cdn.xyz.dev/assets/xyz/logo-v2.1.png"
            />
          </a>
        </p>
        <p>
          <a class="subtitle is-7 is disabled" href="https://xyz.dev"
            >© 2020 XYZ. All right reserved.</a
          >
        </p>
        <p></p>
      </div>
    </footer>
  </div>
</template>

<script>
// import 'fullpage.js/dist/fullpage.css'

export default {}
</script>
<style>
.button.is-success {
  background-color: #6dd400;
}
.ui.basic.button:hover {
  border: 1px solid #6dd400;
}
.button:hover:not(:active),
.button.is-hoverable:not(:active) {
  /* box-shadow: 0 0 0 0.125em #6DD400; */
  border: 1px solid #6dd400;
}
</style>
