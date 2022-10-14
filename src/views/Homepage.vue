<template>
  <div class="page_content">
    <img alt="Example image" src="@/assets/favicon.png" width="135" />
    <section title="presentation">
      <h1>Hello, world!</h1>
      <p>
        Mon nom est Michael Labrecque, diplômé du baccalauréat en science de
        l'Université de Sherbrooke en sciences. Je suis un développeur cloud et
        web, passionné par la programmation, la cyber-sécurité et les nouvelles
        technologies.
      </p>
    </section>
    <section title="formations">
      <h2>Formations</h2>
      <Formation />
    </section>
    <section title="certifications"></section>
    <section title="experiences">
      <h2>Expériences</h2>
      <Experience />
    </section>
    <section title="distinctions">
      <h2>Distinctions</h2>
      <Distinction />
    </section>
    <section title="interests">
      <h2>Loisir et intérêt</h2>
      <Interest />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Formation from "@/components/formation.vue";
import Experience from "@/components/experience.vue";
import Interest from "@/components/interest.vue";
import Distinction from "@/components/distinction.vue";
export default {
  name: "HomeView",
  title: "Accueil",
  components: { Formation, Experience, Interest, Distinction },
};
</script>
