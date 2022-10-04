<template>
    <div class="interest_container">
        <div class="interest_card" v-for="interest in interests" :key="interest.id">
            <div class="interest_icon">{{ interest.icon }}</div>
            <div class="interest_name">{{ interest.name }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            interests: [
                {
                    id: 1,
                    name: 'Jeux vidéo',
                    icon: '🎮'
                },
                {
                    id:2,
                    name: 'Cyber-Sécurité',
                    icon: '🔐'
                },
                {
                    id:3,
                    name: 'Pêche',
                    icon: '🎣'
                },
                {
                    id:4,
                    name: 'Chasse',
                    icon: '🏹'
                },
                {
                    id:5,
                    name: 'Guitare',
                    icon: '🎸'
                },
                {
                    id:6,
                    name: 'Vélo',
                    icon: '🚴'
                },
                {
                    id: 7,
                    name: 'Randonnées en montagne',
                    icon: '🥾'
                },
                {
                    id: 8,
                    name: 'Tir de précision',
                    icon: '🎯'
                }
            ]
        }
    },
}
</script>

<style>
.interest_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.interest_card {
    position: relative;
    justify-content: center;
    flex: 0 0 150px;
    height: 150px;
    margin: 2% 2% 2% 2%;
    border-style: solid;
    border-width: 0px;
    background-color: white;
}
.interest_icon {
    position: absolute;
    padding-top: 10%;
    text-align: center;
    font-size: 3em;
    height: 40%;
    width: 100%;
}
.interest_name {
    position: absolute;
    top: 50%;
    height: 40%;
    text-align: center;
    width: 100%;
    padding-top: 10%;
    font-size: 1em;
}

</style>