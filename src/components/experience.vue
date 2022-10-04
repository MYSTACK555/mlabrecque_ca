<template>
  <div class="experience_container">
    <vue-timeline-update  v-for="exp in experiences"
    :key="exp.id"
    :date="new Date(exp.date)"
    :title="exp.title" 
    :business="exp.business" 
    :description="exp.description"
    :category="exp.category" 
    :icon="exp.icon" 
    :color="exp.color" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      experiences: [
        {
          id: 1,
          date: '',
          business: '',
          title: 'Analyste - Automatisation',
          description: "\
          <h3>KPMG-Egyde services conseil</h3>\
          <div class='description'>\
            <ul>\
              <li>Générer des rapports Excel avec l’api de Carbon black et le moteur xlsxwriter</li>\
              <li>Développer des actions et des jobs sur la plateforme Siemplify en python</li>\
              <li>Aider au déploiement en production sur aws</li>\
              <li>\
                Développement d'un portail client\
                <ul>\
                  <li>Création d’une API REST avec Django REST Framework comme Backend</li>\
                  <li>Maintenir et améliorer les configurations d'infrastructure as code (IAC) avec terraform</li>\
                  <li>Déployer les nouvelles versions sur les différents environnement</li>\
                  <li>Migrer la base de code vers une infrastructure serverless</li>\
                  <li>Corriger les vulnérabilités détecté par différents outils et test d'intrusions</li>\
                </ul>\
              </li>\
            </ul>\
          </div>",
          category: 'Emploie',
          color: "blue",
          icon: "code"
        },
        {
          id: 2,
          date: '2020-12-16',
          business: '',
          title: 'Développeur Full-Stack',
          description: "\
          <h3>Sideline life (Startup)</h3>\
          <div class='description'>\
            <ul>\
              <li>Développer une plateforme web en .net core 3.1</li>\
            </ul>\
          </div>",
          category: 'Emploie',
          color: "blue",
          icon: "code"
        },
        {
          id: 3,
          date: '2020-12-20',
          business: '',
          title: 'Développeur en recherche',
          description: "\
          <h3>AMI Lab - Bessam Abdulrazak (Université de Sherbrooke)</h3>\
          <div class='description'>\
            <ul>\
              <li>Analyser de logiciels libres</li>\
              <li>Développer une interface utilisateur web pour la conception de processus métier</li>\
              <li>Développer un module d’application python pour la gestion et l’exécution des processus</li>\
              <li>Développer un model JSON pour la communication entre l’interface utilisateur et le module python</li>\
            </ul>\
          </div>",
          category: 'Stage',
          color: "green",
          icon: "code"
        },
        {
          id: 4,
          date: '2020-04-16',
          business: '',
          title: 'Développeur logiciel',
          description: "\
          <h3>Desjardins Assurance Générale</h3>\
          <div class='description'>\
            <ul>\
              <li>Développer, améliorer et maintenir les solutions logicielles</li>\
              <li>Développement agile/Scrum</li>\
            </ul>\
          </div>",
          category: 'Stage',
          color: "green",
          icon: "code"
        },
        {
          id: 5,
          date: new Date('2019-08-17'),
          business: '',
          title: 'Développeur logiciel',
          description: "\
          <h3>Desjardins sécurité financière</h3>\
          <div class='description'>\
            <ul>\
              <li>Développer, améliorer et maintenir les solutions logicielles</li>\
              <li>Développement agile/Scrum</li>\
            </ul>\
          </div>",
          category: 'Stage',
          color: "green",
          icon: "code"
        }
      ]
    }
  }
}
</script>
<style>
.gb-vue-timeline-update--light {
    color: #000000 !important ;
}
.experience_container {
justify-content: center;
}
.gb-vue-timeline-update--light .gb-vue-timeline-update__right .gb-vue-timeline-update__description {
  color: #000000 !important ;
}
</style>