<template>
<div class="formation_container">
  <ScholarshipCard 
    v-for="study in studies"
    :key="study.id"
    :level="study.level"
    :program="study.program"
    :etablissement="study.etablissement"
    :emplacement="study.emplacement"
    :date="study.date"
    :image="study.image"
    />
</div>
</template>

<script>
import ScholarshipCard from '~/components/card.vue'
import image1 from "~/241208906_10159878130857049_3729368319539169165_n.png"
import image2 from "~/C_gep_Limoilou_Portes_ouvertes_dans_les_c_geps_de_Qu_bec_et_de_L.jpg"
export default {
  components:{
    ScholarshipCard
  },    
data(){
    return {
        studies: [
            {
                id:1,
                level:'Baccalauréat',
                program:'Sciences Informatiques',
                etablissement:'Université de Sherbrooke',
                emplacement:'Campus Principale (Sherbrooke)',
                date:'Décembre 2021',
                image:image1
            },
            {
                id:2,
                level:"Diplôme d'études collégiales",
                program:'Technique en informatique industrielle',
                etablissement:'Cégep Lévis-Lauzon*',
                emplacement:'Lévis',
                date:'Juin 2018',
                image:image2
            }
        ]
    }
}
}
</script>

<style>
.formation_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}
</style>