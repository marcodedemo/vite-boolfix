
/* --------------------------------- script --------------------------------- */
<script >

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

import axios from 'axios';


import {store} from './store';


export default{
  data(){
    return{

    }
  },

  components:{
    AppHeader,
    AppMain,
    AppFooter,

  },

  created() {
    
    this.APIcall(store.APIfilmBaseCall, store.APIseriesBaseCall);

  },

  methods:{


    /* ---------------------------- funzione API call --------------------------- */
    APIcall(APIfilmAdress, APIseriesAdress){

      // eseguo la chiamata all'API
      axios.get(APIfilmAdress).then((res)=>{

      // imposto l'array dei film = all'array dei film generati dall'API
      store.films = res.data.results;

      console.log(store.films);
      }),

      // eseguo la chiamata all'API
      axios.get(APIseriesAdress).then((res)=>{

      // imposto l'array dei film = all'array dei film generati dall'API
      store.series = res.data.results;

      console.log(store.series)

    })
  

    },

    /* -------------- funzione cerca media in base all'input utente ------------- */
    searchedMedia(){
      
      store.filmSearchedInputAPIcall = "https://api.themoviedb.org/3/search/movie?api_key=f4c054f1775af08e79e52d3d329cea32&query=" + store.searchInput;

      store.seriesSearchedInputAPIcall = "https://api.themoviedb.org/3/search/tv?api_key=f4c054f1775af08e79e52d3d329cea32&query=" + store.searchInput;

      this.APIcall(store.filmSearchedInputAPIcall, store.seriesSearchedInputAPIcall);
    }
  }

}

</script>

/* -------------------------------- template -------------------------------- */

<template>
<div>

  <AppHeader @user-search="searchedMedia()"></AppHeader>
  <AppMain></AppMain>
  <AppFooter></AppFooter>

</div>
</template>


/* ---------------------------------- style --------------------------------- */
<style lang="scss" scoped>

</style>
