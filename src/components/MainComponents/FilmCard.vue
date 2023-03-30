
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
    }
  }

}

</script>

/* -------------------------------- template -------------------------------- */

<template>
<div id="media-card">

    <!-- poster -->
    <div id="media-poster">
        <img v-if="media.poster_path" :src="'https://image.tmdb.org/t/p/w342' + media.poster_path" alt="poster">
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
        <div id="original-title">

            <span v-if="media.original_title"><strong>Titolo Originale: </strong>{{ media.original_title }}</span>
            <span v-else><strong>Titolo Originale: </strong>{{ media.original_name }}</span>

        </div>

        <!-- lingua -->
        <div id="lenguage">

            <span v-if="showFlag() != ''"><strong>Lingua: </strong><span :class="`fi fi-${showFlag()}`"></span></span>
            <span v-else><strong>Lingua: </strong>Unknown</span>


        </div>

        <!-- voto -->
        <div id="vote">

            <span><strong>Voto: </strong>{{ (media.vote_average.toFixed(1) / 2).toFixed(1) }}</span>

        </div>

    </div>
    

</div>
</template>


/* ---------------------------------- style --------------------------------- */
<style lang="scss" scoped>

#media-card{

    width: calc(100% / 4 - 20px * 5 / 6);



    #media-poster{
        width: 100%;
        height: 400px;
        
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
        width: 100%;
        height: auto;
    }
}

</style>
