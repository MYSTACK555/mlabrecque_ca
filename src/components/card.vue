<template>
    <div class="card">
        <div class="card_background" :style="{ backgroundImage: 'url('+image+')', backgroundSize:'306px 206px'}"></div>  
        <div class="card_background_filter"></div>  
        <div class="card_content">
            <div class="card_title">{{ level }}</div>
            <div class="card_container">
                <div>{{ program }}</div>
                <div>{{ etablissement }}</div>
                <div>{{ emplacement }}</div>
                <div>{{ date }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
props:['level','program','etablissement','emplacement','date','image']
}
</script>

<style>
.card{
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
.card_title{
    font-size: 1.5em;
    font-weight:bold ;
}
.card_background{
    position: relative;
    border-radius: 7px;
    border-width: 0px;
    width: 300px;
    height: 200px;
    filter: blur(3px) grayscale(20%);
}
.card_background_filter{
    position: absolute;
    top:0%;
    border-radius: 7px;
    border-width: 0px;
    width: 300px;
    height: 200px;
    background-color: white;
    opacity: 50%;
}
.card_content{
    position: absolute;
    height:182px;
    width:276px;
    top:0%;
    padding: 2% 2% 2% 2%;
    margin: 1% 2% 1% 2% ;
}
.card_container{
    position:absolute;
    top:45%;
    width: 300px;
}
</style>