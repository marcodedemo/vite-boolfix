
/* --------------------------------- script --------------------------------- */
<script >

import {store} from '../../store.js';
import FilmCard from './FilmCard.vue';

export default{
  name:"SearchComponent",

  data(){
    return{
        store,
    }
  },

  components:{
    FilmCard,
  }

}

</script>

/* -------------------------------- template -------------------------------- */

<template>
<div id="container">

  <div id="media-container" class="centered">

    <FilmCard v-for="media in store.medias" :media="media"></FilmCard>
  </div>

    

</div>
</template>


/* ---------------------------------- style --------------------------------- */
<style lang="scss" scoped>

  #container{
    margin: 50px 0;
  }

  #media-container{
    display: flex;
    flex-flow: row wrap;
    gap: 20px;

    
  }

</style>
