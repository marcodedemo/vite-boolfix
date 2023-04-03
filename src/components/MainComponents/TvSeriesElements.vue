
/* --------------------------------- script --------------------------------- */
<script >

import {store} from '../../store.js';
import MediaItem from './MediaItem.vue';

export default{
  name:"FilmElements",

  data(){
    return{
      store,

      pageNumbers:[
        "1",
        "2",
        "3",
        "4",
        "5",
      ],

    }
  },

  components:{
  MediaItem,
  },

  methods:{

    // funzione per mostrare nel dom solo 5 serie alla volta
    showSeries(index){
      if(index >= this.store.seriesSlideMinIndex && index <= this.store.seriesSlideMaxIndex){
        return true;
      }
    },

    // funzione che stampa le successive 5 serie
    showNextSeries(){

      // se l'index massimo è maggiore o uguale a 
      if(this.store.seriesSlideMaxIndex >= this.store.series.length - 1){

        // gli indici massimo e minimo rimangono invariati e fermo lo scroll delle serie
        this.store.seriesSlideMinIndex = this.store.seriesSlideMinIndex;
        this.store.seriesSlideMaxIndex = this.store.seriesSlideMaxIndex;

      // altrimenti
      }else{

        // gli indici massimo e minimo aumentano di 5
        this.store.seriesSlideMinIndex +=5;
        this.store.seriesSlideMaxIndex +=5;
      }

    },

    // funzione che stampa le precedenti 5 serie
    showPrevSeries(){
      
      if(this.store.seriesSlideMinIndex == 0){

        // gli indici massimo e minimo rimangono invariati
        this.store.seriesSlideMinIndex = this.store.seriesSlideMinIndex;
        this.store.seriesSlideMaxIndex = this.store.seriesSlideMaxIndex;

      // altrimenti
      }else{
        // gli indici massimo e minimo diminuiscono di 5
        this.store.seriesSlideMinIndex -=5;
        this.store.seriesSlideMaxIndex -=5;
      }

    },

    // next page
    nextPage(){
      if(this.store.seriesSlideMaxIndex < this.store.series.length - 18){

        this.store.seriesActivePage++;

        this.store.seriesSlideMinIndex += 20;
        this.store.seriesSlideMaxIndex += 20;
      }
    },

    // prev page
    prevPage(){
      if(this.store.seriesSlideMinIndex >= 20){

        this.store.seriesActivePage--;

        this.store.seriesSlideMaxIndex -= 20;
        this.store.seriesSlideMinIndex -= 20;
      }
    },

    // select page
    changePage(number){

      if(this.store.searchInput == ''){

        this.store.seriesActivePage = number;
        this.store.seriesSlideMaxIndex = 20 * number - 1;
        this.store.seriesSlideMinIndex = this.store.seriesSlideMaxIndex + 1 - 20;
      }

    }

  }

}

</script>

/* -------------------------------- template -------------------------------- */

<template>
<div id="container" v-if="store.seriesNotFound == false">

  <div id="media-container">

    <MediaItem v-for="(serie,index) in store.series" :media="serie" v-show="showSeries(index)"></MediaItem>

    <div id="arrows" v-if="store.activeSectionIndex == 0">

      <div id="right" @click="showNextSeries()">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
      
      <div id="left" @click="showPrevSeries()">
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      
    </div>

  </div>

  <div id="pages" v-if="store.activeSectionIndex == 1">

    <a href="#">
      <i class="fa-solid fa-caret-left" @click="prevPage()"></i>
    </a>

    <div id="pageNumbers">
      <a href="#" id="pageNumber" v-for="number in this.pageNumbers" @click="changePage(number)" :class="store.seriesActivePage == number ? 'active' : ''">{{ number }}</a>
    </div>

    <a href="#">
      <i class="fa-solid fa-caret-right" @click="nextPage()"></i>
    </a>


  </div>

</div>

<div v-else id="not-found">
  Nessun risultato trovato.
</div>

</template>


/* ---------------------------------- style --------------------------------- */
<style lang="scss" scoped>

  @mixin arrow(){

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 3em;
    transition: scale .2s;
    padding: 20px;

    &:hover{
      scale: 1.2;

      cursor: pointer;
    }

  }


  #media-container{
    display: flex;
    flex-flow: row wrap;
    gap: 20px;

    position: relative;

    #right{

      @include arrow();
      right: -70px;

    }

    #left{
      
      @include arrow();
      left: -70px;
    }
    
  }

  #pages{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    margin-top: 20px;

    #pageNumbers{
      display: flex;
      gap: 20px;
      font-weight: bold;

      font-size: 1.4em;

      a{
        color: white;

        &.active{
          color: red;
        }
      }
    }
    & > a{
      font-size: 1.8em;
      color: white;
      padding: 0 15px;

    }



  }

  #not-found{
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
