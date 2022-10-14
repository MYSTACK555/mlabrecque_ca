<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <a href="/">Home</a>
      </nav>
    </header>
    <Homepage />
    <footer class="footer">
      <FooterLinks />
    </footer>
  </div>
</template>

<script>
import Homepage from "@/views/Homepage.vue";
import FooterLinks from "@/components/home-links.vue";

export default {
  name: 'App',
  components: {
    Homepage,
    FooterLinks,
  }
}
</script>

<style >
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background-color: rgb(240, 240, 240);
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
.home-links a {
  margin-right: 1rem;
}
</style>
