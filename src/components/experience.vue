<template>
    <div class="container">
        <timeline 
        v-for="exp in experiences"
        :key="exp.id"
        :date="exp.date"
        :title="exp.business"
        :description="exp.description"
        :category="exp.category"
        :color="exp.color"
        :icon="exp.icon"
        />
    </div>
</template>
<script>
import timeline from '~/components/timeline.vue'
export default {
    components:{
        timeline
    },
    data(){
    return {
      experiences: [
        {
          id:1,
          date: '2021-03-04',
          business:'KPMG-Egyde services conseil',
          title:'Analyste - Automatisation',
          description:"<h3>Analyste - Automatisation</h3><div class='description'><ul><li>Générer des rapports Excel avec l’api de Carbon black et le moteur xlsxwriter</li><li>Développer des actions et des jobs sur la plateforme Siemplify en python</li><li>Aider au déploiement en production sur aws</li></ul></div>",
          category:'Job',
          color:"red",
          icon:"code"
        },
        {
          id:2,
          date: '2019-06-01',
          business:'Sideline life (startup)',
          title:'Développeur Full-Stack',
          description:"<h3>Développeur Full-Stack</h3><div class='description'><ul><li>Développer une plateforme web en .net core 3.1</li></ul></div>",
          category:'Job',
          color:"red",
          icon:"code"
        },
        {
          id:3,
          date: new Date('2020-01-01'),
          business:'Desjardins Assurance Générale',
          title:'Stage Développeur logiciel',
          description:"<h3>Stage Développeur logiciel</h3><div class='description'><ul><li></li></ul></div>",
          category:'Job',
          color:"red",
          icon:"code"
        },
        {
          id:4,
          date: new Date('2019-05-01'),
          business:'Desjardins sécurité financière',
          title:'Stage Développeur logiciel',
          description:"<h3>Stage Développeur logiciel</h3><div class='description'><ul><li></li></ul></div>",
          category:'Job',
          color:"red",
          icon:"code"
        }
        ]
    }
}
}
</script>
<style></style>