<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    <section title="presentation">
    <h1>Hello, world!</h1>

    <p>
      Mon nom est Michael Labrecque, diplômé du baccalauréat en science 
      de l'Université de Sherbrooke en sciences. Je suis un développeur 
      cloud et web, passionné par la programmation, la cyber-sécurité et
      les nouvelles technologies. 
    </p>

    </section>
    <section title="formations">
      <h2>Formations</h2>
      <Scholarship />
    </section>
    <section title="certifications">
    </section>
    <section title="experiences">
      <h2>Expériences</h2>
      <VueTimeline />
    </section>
    <section title="distinctions">
      <h2>Distinctions</h2>
      <Distinction/>
    </section>
    <section title="interests">
      <h2>Loisir et intérêt</h2>
      <Interest />
    </section>
    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
      <a href="https://www.growthbunker.dev/vuetimeline/?ref=madewithvuejs.com" target="_blank" rel="noopener">Vue Timeline</a>
    </p>

  </Layout>
</template>

<script>
import Scholarship from '../components/formation.vue'
import VueTimeline from '../components/experience.vue'
import Interest from '../components/interest.vue'
import Distinction from '../components/distinction.vue'
export default {
    metaInfo: {
        title: "Hello, world!"
    },
    components: { Scholarship,VueTimeline,Interest, Distinction }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

</style>
