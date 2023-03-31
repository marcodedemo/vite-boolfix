
/* --------------------------------- script --------------------------------- */
<script >

import FilmElements from './MainComponents/FilmElements.vue';
import TvSeriesElements from './MainComponents/TvSeriesElements.vue';

import {store} from '../store.js';


export default{
  name:"AppMain",

  data(){
    return{
      store,
    }
  },

  components:{
    FilmElements,
    TvSeriesElements,
  },
  

}

</script>

/* -------------------------------- template -------------------------------- */

<template>
<div>

  <main class="centered">

    <div id="films" v-show="store.activeSectionIndex == 0 || store.activeSectionIndex == 2">

      
      <h2>Films</h2>
      <FilmElements></FilmElements>
      
    </div>

    <div id="series" v-show="store.activeSectionIndex == 0 || store.activeSectionIndex == 1">

      <h2>Tv Series</h2>
      <TvSeriesElements></TvSeriesElements>
      
    </div>

  </main>

</div>
</template>


/* ---------------------------------- style --------------------------------- */
<style lang="scss" scoped>

  main{

    display: flex;
    flex-direction: column;
    gap: 100px;

    margin-top: 30px;

    h2{
      font-size: 2em;
      text-align: center;
      padding-bottom: 10px;
    }
    
  }
</style>
