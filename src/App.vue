
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


      // ciclo per i film
      for (let i = 1; i <= 5; i++) {
        
        // eseguo la chiamata all'API
        axios.get(APIfilmAdress + "&page=" + i).then((res)=>{

          
          for (let y = 0; y < res.data.results.length; y++) {
            
            // inserisco nell'array gli elementi generati
            store.films.push(res.data.results[y]);
            
          }
          
        })
        
      }

      // ciclo per le serie
      for (let i = 1; i <= 5; i++) {
        
        // eseguo la chiamata all'API
        axios.get(APIseriesAdress + "&page=" + i).then((res)=>{

          
          for (let y = 0; y < res.data.results.length; y++) {
            
            // inserisco nell'array gli elementi generati
            store.series.push(res.data.results[y]);
            
          }
          
        })
        
      }

      // rimovo la schermata di caricamento
      this.store.isLoading= false;


    },

    // funzione API films call
    APIfilmsCall(APIfilmAdress){

      // eseguo la chiamata all'API
      axios.get(APIfilmAdress).then((res)=>{

        // se la chiamata API mi restituisce un array con lunghezza diversa da 0
        if(res.data.results.length != 0){

          // imposto l'array dei film = all'array dei film generati dall'API
          store.films = res.data.results;

          // imposto la booleana di visulizzazione dell'elemento not-found a false
          this.store.seriesNotFound = false;

        // altrimenti
        }else{

          // imposto la booleana di visulizzazione dell'elemento not-found a true
          this.store.filmsNotFound = true;
        }
        
      });

      // rimovo la schermata di caricamento
      this.store.isLoading = false;

    },

    // funzione API series call
    APIseriesCall(APIseriesAdress){

      // eseguo la chiamata all'API
      axios.get(APIseriesAdress).then((res)=>{
              
      // se la chiamata API mi restituisce un array con lunghezza diversa da 0
      if(res.data.results.length != 0){

        // imposto l'array delle serie = all'array delle serie generate dall'API
        store.series = res.data.results;

        // imposto la booleana di visulizzazione dell'elemento not-found a false
        this.store.seriesNotFound = false;

        
      // altrimenti
      }else{

        // imposto la booleana di visulizzazione dell'elemento not-found a true
        this.store.seriesNotFound = true;
      }

      // rimovo la schermata di caricamento
      this.store.isLoading= false;

    })
    },

    // resetto gli array dei film e richiamo l'api di base
    resetArraysAndRecallAPI(){

      // svuoto gli array di film e serie tv
      store.films = [];
      store.series = [];

      // li riempio con la chiamata di base
      this.APIbaseCall(store.APIfilmBaseCall, store.APIseriesBaseCall);
    },


    /* -------------- funzione cerca media in base all'input utente ------------- */
    searchedMedia(){
      
      // se l'input di ricerca non è vuoto
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

          this.APIseriesCall(store.seriesSearchedInputAPIcall);
          this.APIfilmsCall(store.filmSearchedInputAPIcall);
          
        }


  
      }

      
    },
    
    // cambio la sezione da visualizzare e gli indici di visualizzazione dei media
    changeSection(){
      
      // imposto le due variabili di visualizzazione dell'elemento not-found a falso
      this.store.filmsNotFound = false;
      this.store.seriesNotFound = false;

      // visualizzo la schermata di caricamento
      this.store.isLoading = true;

            
      // azzero l'user input se cambio sezione
      this.store.searchInput ="";

      
      // se la sezione attiva è la 1 (serie) aumento il massimo di serie da visualizzare
      if(this.store.activeSectionIndex == 1){
        this.resetArraysAndRecallAPI();
        this.store.seriesSlideMaxIndex = 19;
        this.store.seriesSlideMinIndex = 0;
        this.store.isLoading = false;



      // altrimenti se la sezione attiva è la 2 (film) aumento il massimo di film da visualizzare
      }else if(this.store.activeSectionIndex == 2){
        this.resetArraysAndRecallAPI();
        this.store.filmsSlideMaxIndex = 19;
        this.store.filmsSlideMinIndex = 0;
        this.store.isLoading = false;



      // altrimenti reimposto il massimo di visualizzazione a 5 per riarrivare lo slideshow
      }else {

        this.resetArraysAndRecallAPI();

        this.store.filmsActivePage = 1;
        this.store.seriesActivePage = 1;

        this.store.seriesSlideMaxIndex = 4;
        this.store.seriesSlideMinIndex = 0;

        this.store.filmsSlideMaxIndex = 4;
        this.store.filmsSlideMinIndex = 0;

        this.store.isLoading = false;


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
