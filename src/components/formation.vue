<template>
<div class="formation_container">
  <div class="formation_card"  v-for="study in studies" :key="study.id">
        <div class="formation_card_background" :style="{ backgroundImage: 'url('+study.image+')', backgroundSize:'306px 206px'}"></div>  
        <div class="formation_card_background_filter"></div>  
        <div class="formation_card_content">
            <div class="formation_card_title">{{ study.level }}</div>
            <div class="formation_card_container">
                <div>{{ study.program }}</div>
                <div>{{ study.etablissement }}</div>
                <div>{{ study.emplacement }}</div>
                <div>{{ study.date }}</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import image1 from "~/241208906_10159878130857049_3729368319539169165_n.png"
import image2 from "~/C_gep_Limoilou_Portes_ouvertes_dans_les_c_geps_de_Qu_bec_et_de_L.jpg"
export default {
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
  justify-content: center;
}
.formation_card{
    position: relative;
    justify-content: center;
    flex: 0 0 300px;
    width: 300px;
    height: 200px;
    margin: 2% 2% 2% 2% ;
    border-style: solid;
    border-radius: 10px;
    border-width: 3px;
}
.formation_card_title{
    font-size: 1.5em;
    font-weight:bold ;
}
.formation_card_background{
    position: relative;
    border-radius: 7px;
    border-width: 0px;
    width: 300px;
    height: 200px;
    filter: blur(3px) grayscale(20%);
}
.formation_card_background_filter{
    position: absolute;
    top:0%;
    border-radius: 7px;
    border-width: 0px;
    width: 300px;
    height: 200px;
    background-color: white;
    opacity: 50%;
}
.formation_card_content{
    position: absolute;
    height:182px;
    width:276px;
    top:0%;
    padding: 2% 2% 2% 2%;
    margin: 1% 2% 1% 2% ;
}
.formation_card_container{
    position:absolute;
    top:45%;
    width: 300px;
}
</style>