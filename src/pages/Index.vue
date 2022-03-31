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
      <ul>
        <li>
          <div>KPMG-Egyde conseils</div>
          <div>Automatisation en cybersécurité</div>
          <div>Mars 2021</div>
          <ul>
            <li>Générer des rapports Excel avec l’api de Carbon black et le moteur xlsxwriter</li>
            <li>Développer des actions et des jobs sur la plateforme Siemplify en python</li>
            <li>Aider au déploiement en production sur aws</li>
          </ul>
        </li>
        <li>
          <div>Sideline life (startup)</div>
          <div>Développeur Full-Stack</div>
          <div>Juin 2019 à Décembre 2020</div>
          <ul>
            <li>Développer une plateforme web en .net core 3.1</li>
          </ul>
        </li>
        <li>
          <div>Desjardins Assurance Générale</div>
          <div>Stage Développeur logiciel</div>
          <div>Janvier 2020 à Avril 2020</div>
        </li>
        <li>
          <div>Desjardins sécurité financière</div>
          <div>Stage Développeur logiciel</div>
          <div>Mai 2019 à Août 2019</div>
        </li>
      </ul>
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
    </p>

  </Layout>
</template>

<script>
import Scholarship from '../components/scholarship.vue'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components:{
    Scholarship
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

</style>
