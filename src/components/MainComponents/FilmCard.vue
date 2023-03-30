
/* --------------------------------- script --------------------------------- */
<script >

import {store} from '../../store.js';

import "/node_modules/flag-icons/css/flag-icons.min.css";



export default{
  name:"FilmCard",

  data(){
    return{
        store,
        

        
    }
  },

  props:{
    media: Object,
  },

  methods:{

    showFlag(){

        let languageAlphaCode = this.media.original_language;

        // cambio le lingue per visualizzare la bandiera corrispondente

        // inglese
        if(languageAlphaCode == "en"){
            languageAlphaCode = "gb";
        // giapponese
        }else if(languageAlphaCode == "ja"){
            languageAlphaCode = "jp"
        // koreano
        }else if(languageAlphaCode == "ko"){
            languageAlphaCode = "kr"
        // cinese
        }else if(languageAlphaCode == "zh"){
            languageAlphaCode = "cn"
        // ebreo
        }else if(languageAlphaCode == "he"){
            languageAlphaCode = "il"
        // greco
        }else if(languageAlphaCode == "el"){
            languageAlphaCode = "gr"

        }

        return languageAlphaCode;
    },

    showFilledStars(){
        let filmVotes = parseInt((this.media.vote_average / 2).toFixed());

        return filmVotes;

    },

  }

}

</script>

/* -------------------------------- template -------------------------------- */

<template>
<div id="media-card">

    
    <!-- poster -->
    <div id="media-poster">
        <img v-if="media.poster_path" :src="'https://image.tmdb.org/t/p/w342' + media.poster_path" alt="poster" >
        <div id="poster-replace" v-else>Copertina non disponibile.</div>
    </div>

    <!-- media info -->
    <div id="media-info">

        <!-- titolo -->
        <div id="title">

            <span v-if="media.title"><strong>Titolo: </strong>{{ media.title }}</span>
            <span v-else><strong>Titolo: </strong>{{ media.name}}</span>

        </div>

        <!-- titolo originale -->
        <div id="original-title" v-if="media.title != media.original_title">

            <span v-if="media.original_title"><strong>Titolo Originale: </strong>{{ media.original_title }}</span>
            <span v-else><strong>Titolo Originale: </strong>{{ media.original_name }}</span>

        </div>

        <!-- lingua -->
        <div id="lenguage">

            <span v-if="showFlag() != ''"><strong>Lingua: </strong> <span :class="`fi fi-${showFlag()}`"></span></span>
            <span v-else><strong>Lingua: </strong> Unknown</span>


        </div>

        <!-- voto -->
        <div id="vote">
            
            <span><strong>Voto: </strong><i v-for="vote in showFilledStars()" class="fa-solid fa-star"></i></span>
            <span><i v-for="n in (5-showFilledStars())" class="fa-regular fa-star"></i></span>
            
        </div>

        <!-- overview -->
        <div id="overview">

            <span v-if="media.overview"><strong>Overview: </strong>{{ media.overview }}</span>
            <span v-else><strong>Overview: </strong>Attualmente non disponibile.</span>

        </div>

    </div>
    

</div>
</template>


/* ---------------------------------- style --------------------------------- */
<style lang="scss" scoped>

#media-card{

    position: relative;

    width: calc(100% / 4 - 20px * 5 / 6);
    height: 400px;


    #media-poster{
        position: absolute;
        top: 0;

        width: 100%;
        height: 100%; 
        
        img{
            width: 100%;
            height: 100%;
            
            object-fit: cover;

        }

        #poster-replace{
            width: 100%;
            height: 100%;

            display: flex;
            justify-content: center;
            align-items: center;

            background-color: black;
            font-weight: bold;
        }
    }

    #media-info{

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;

        position: absolute;
        top: 0;

        width: 100%;
        height: 100%;

        padding: 10px;

        text-align: center;
        background-color: rgba(0, 0, 0, 0.900);
        opacity: 0;

        transition: opacity .4s;

        overflow-y: auto;

        &:hover{
            opacity: 1;
        }
    }
}

</style>
