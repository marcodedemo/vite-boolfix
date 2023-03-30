
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
    
    this.APIcall(store.APIbaseCall);

  },

  methods:{


    /* ---------------------------- funzione API call --------------------------- */
    APIcall(APIadress){

      // eseguo la chiamata all'API
      axios.get(APIadress).then((res)=>{

      // imposto l'array dei film = all'array dei film generati dall'API
      store.medias = res.data.results;

      console.log(store.medias)

    })

    },

    /* -------------- funzione cerca media in base all'input utente ------------- */
    searchedMedia(){
      
      store.searchedInputAPIcall = "https://api.themoviedb.org/3/search/movie?api_key=f4c054f1775af08e79e52d3d329cea32&query=" + store.searchInput;

      this.APIcall(store.searchedInputAPIcall);
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
