<template>
  <div class="distinction_container">
    <div
      class="distinction_card"
      v-for="distinction in distinctions"
      :key="distinction.id"
      v-on:click="show_Description(distinction)"
    >
      <div
        class="distinction_card_background"
        :style="{
          backgroundImage: 'url(' + distinction.image + ')',
          backgroundSize: '306px 206px',
        }"
      ></div>
      <div class="distinction_card_background_filter"></div>
      <div class="distinction_card_content">
        <h3 class="distinction_name" v-show="!distinction.showDescription">
          {{ distinction.name }}
        </h3>
        <div class="distinction_year" v-show="!distinction.showDescription">
          {{ distinction.year }}
        </div>
        <div
          class="distinction_description"
          v-show="distinction.showDescription"
        >
          {{ distinction.description }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import image1 from "@/assets/LRC.jpg";
import image2 from "@/assets/Médaille-Service1.jpg";
import image3 from "@/assets/philippe-Lauzanne.webp";
import image4 from "@/assets/fondation.webp";
import image5 from "@/assets/peloton_young.webp";
import image6 from "@/assets/peloton_thompson.webp";
const Distinction = {
  name: "distinction-component",
  methods: {
    show_Description: function (distinction) {
      distinction.showDescription = !distinction.showDescription;
    },
  },
  data() {
    return {
      distinctions: [
        {
          id: 1,
          name: "Médaille de service des cadets de l'armée 5 ans",
          description:
            "Décerné au cadet ayant complété 5 années au sein du mouvement des cadets de l’armée",
          showDescription: false,
          year: "2016",
          image: image2,
        },
        {
          id: 2,
          name: "Médaille de la Légion Royale Canadienne",
          description:
            "Décerné au cadet (te) ayant démontré un sens civique hors pair et pour son implication dans la vie communautaire.",
          showDescription: false,
          year: "2014",
          image: image1,
          ref: "https://www.canada.ca/fr/ministere-defense-nationale/services/cadets-rangers-juniors-canadiens/politique-crjc/oaic/volume1/serie-13/13-16/13-16-e.html",
        },
        {
          id: 3,
          name: "Trophée Philippe-Lauzanne",
          description:
            "Décerné au cadet (te) qui démontre de nombreuses aptitudes dans le domaine de l’exercice aventurier",
          showDescription: false,
          year: "2013",
          image: image3,
        },
        {
          id: 4,
          name: "Trophée de la Fondation",
          description:
            "Le cadet a atteint un niveau supérieur dans l’utilisation des techniques d’instruction et l’art du \
commandement. Il est aussi remis au cadet (te) qui suscite l’intérêt de ses pairs et qui est un modèle \
exemplaire pour tous les cadettes et cadets de l’unité",
          showDescription: false,
          year: "2014",
          image: image4,
        },
        {
          id: 5,
          name: "Trophée de la Fondation",
          description:
            "Le cadet a atteint un niveau supérieur dans l’utilisation des techniques d’instruction et l’art du \
commandement. Il est aussi remis au cadet (te) qui suscite l’intérêt de ses pairs et qui est un modèle \
exemplaire pour tous les cadettes et cadets de l’unité",
          showDescription: false,
          year: "2016",
          image: image4,
        },
        {
          id: 6,
          name: "Meilleur Cadet du peloton",
          description:
            "Le cadet s’est démarquer comme étant le meilleur cadet de son peloton par sa droiture, sa tenue \
vestimentaire exemplaire, sa discipline, son leadership, sa participation aux activités, c’est aptitude à \
l’exercice militaire, etc.",
          showDescription: false,
          year: "2012",
          image: "",
        },
        {
          id: 7,
          name: "Meilleur Cadet du peloton",
          description:
            "Le cadet s’est démarquer comme étant le meilleur cadet de son peloton par sa droiture, sa tenue \
vestimentaire exemplaire, sa discipline, son leadership, sa participation aux activités, c’est aptitude à \
l’exercice militaire, etc.",
          showDescription: false,
          year: "2013",
          image: image6,
        },
        {
          id: 8,
          name: "Meilleur Cadet du peloton",
          description:
            "Le cadet s’est démarquer comme étant le meilleur cadet de son peloton par sa droiture, sa tenue \
vestimentaire exemplaire, sa discipline, son leadership, sa participation aux activités, c’est aptitude à \
l’exercice militaire, etc.",
          showDescription: false,
          year: "2014",
          image: image5,
        },
      ],
    };
  },
};
export default Distinction;
</script>
<style>
.distinction_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.distinction_card {
  position: relative;
  justify-content: center;
  flex: 0 0 300px;
  width: 300px;
  height: 200px;
  margin: 2% 2% 2% 2%;
  border-style: solid;
  border-radius: 10px;
  border-width: 3px;
}
.distinction_card_title {
  font-size: 1.5em;
  font-weight: bold;
}
.distinction_card_background {
  position: relative;
  border-radius: 7px;
  border-width: 0px;
  width: 300px;
  height: 200px;
  filter: blur(3px) grayscale(20%);
}
.distinction_card_background_filter {
  position: absolute;
  top: 0%;
  border-radius: 7px;
  border-width: 0px;
  width: 300px;
  height: 200px;
  background-color: white;
  opacity: 50%;
}
.distinction_card_content {
  position: absolute;
  height: 182px;
  width: 276px;
  top: 0%;
  padding: 2% 2% 2% 2%;
  margin: 1% 2% 1% 2%;
}
.distinction_card_container {
  position: absolute;
  top: 45%;
  width: 300px;
}
</style>
