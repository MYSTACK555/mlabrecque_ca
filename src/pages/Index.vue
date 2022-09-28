<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    <section title="presentation">
    <h1>Hello, world!</h1>

    <p>
      Mon nom est Michael Labrecque,
    </p>

    </section>
    <section title="formations">
      <h2>Formation</h2>
      <Scholarship />
    </section>
    <section title="experiences">
      <h2>Expériences</h2>
      <VueTimeline />
    </section>
    <section title="interests">
    </section>
    <section title="certifications">
    </section>
    <section title="distinctions">
    </section>
    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
      <a href="https://www.growthbunker.dev/vuetimeline/?ref=madewithvuejs.com" target="_blank" rel="noopener">Vue Timeline</a>
    </p>

  </Layout>
</template>

<script>
import Scholarship from '../components/scholarship.vue'
import VueTimeline from '../components/experience.vue'
export default {
    metaInfo: {
        title: "Hello, world!"
    },
    components: { Scholarship,VueTimeline}
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

</style>
