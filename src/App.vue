
/* --------------------------------- script --------------------------------- */
<script >

import AppHeader from './components/AppHeader.vue';
import AppLoader from './components/AppLoader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';


import axios from 'axios';


import {store} from './store';


export default{
  data(){
    return{
      store,
    }
  },

  components:{
    AppHeader,
    AppLoader,
    AppMain,
    AppFooter,

  },

  created() {
    
    this.APIbaseCall(store.APIfilmBaseCall, store.APIseriesBaseCall);

  },

  methods:{


    /* ---------------------------- funzione API standard call --------------------------- */
    APIbaseCall(APIfilmAdress, APIseriesAdress){

      this.APIfilmsCall(APIfilmAdress);
      this.APIseriesCall(APIseriesAdress);

    },

    // funzione API films call
    APIfilmsCall(APIfilmAdress){

      // eseguo la chiamata all'API
      axios.get(APIfilmAdress).then((res)=>{

      // imposto l'array dei film = all'array dei film generati dall'API
      store.films = res.data.results;

      this.store.isLoading= false;

      })
    },

    // funzione API series call
    APIseriesCall(APIseriesAdress){

      // eseguo la chiamata all'API
      axios.get(APIseriesAdress).then((res)=>{
              
      // imposto l'array delle serie = all'array delle serie generate dall'API
      store.series = res.data.results;

      this.store.isLoading= false;
    })
    },


    /* -------------- funzione cerca media in base all'input utente ------------- */
    searchedMedia(){
      
      if(store.searchInput != ''){
        
        // se la sezione da visualizzare è quella dei film
        if(this.store.activeSectionIndex == 2){

          // eseguo la ricerca solo tra i film
          store.filmSearchedInputAPIcall = "https://api.themoviedb.org/3/search/movie?api_key=f4c054f1775af08e79e52d3d329cea32&query=" + store.searchInput;

          this.APIfilmsCall(store.filmSearchedInputAPIcall);


        // altrimenti se la sezione da visualizzare è quella delle serie
        }else if(this.store.activeSectionIndex == 1){

          // eseguo la ricerca solo tra le serie
          store.seriesSearchedInputAPIcall = "https://api.themoviedb.org/3/search/tv?api_key=f4c054f1775af08e79e52d3d329cea32&query=" + store.searchInput;

          this.APIseriesCall(store.seriesSearchedInputAPIcall);


        // altrimenti se la sezione è "home"
        }else{

          // eseguo la ricerca in entrambi i media
          store.filmSearchedInputAPIcall = "https://api.themoviedb.org/3/search/movie?api_key=f4c054f1775af08e79e52d3d329cea32&query=" + store.searchInput;

          store.seriesSearchedInputAPIcall = "https://api.themoviedb.org/3/search/tv?api_key=f4c054f1775af08e79e52d3d329cea32&query=" + store.searchInput;

          this.APIbaseCall(store.filmSearchedInputAPIcall, store.seriesSearchedInputAPIcall);

        }
  
      }

      
    },
    
    // cambio la sezione da visualizzare e gli indici di visualizzazione dei media
    changeSection(){
      
      // eseguo la chiamata base delle API al cambio della sezione
      this.APIbaseCall(store.APIfilmBaseCall, store.APIseriesBaseCall);
      
      // azzero l'user input se cambio sezione
      this.store.searchInput ="";

      
      // se la sezione attiva è la 1 (serie) aumento il massimo di serie da visualizzare
      if(this.store.activeSectionIndex == 1){
        this.store.seriesSlideMaxIndex = 20;

      // altrimenti se la sezione attiva è la 2 (film) aumento il massimo di film da visualizzare
      }else if(this.store.activeSectionIndex == 2){
        this.store.filmsSlideMaxIndex = 20;

      // altrimenti reimposto il massimo di visualizzazione a 5 per riarrivare lo slideshow
      }else {
        this.store.seriesSlideMaxIndex = 4;
        this.store.filmsSlideMaxIndex = 4;

      }
    }
  }

}

</script>

/* -------------------------------- template -------------------------------- */

<template>
<div>

  <AppHeader @user-search="searchedMedia()" @userChangeSection="changeSection()"></AppHeader>
  <AppLoader v-if="this.store.isLoading"></AppLoader>
  <AppMain v-else></AppMain>
  <AppFooter></AppFooter>

</div>
</template>


/* ---------------------------------- style --------------------------------- */
<style lang="scss" scoped>

</style>
