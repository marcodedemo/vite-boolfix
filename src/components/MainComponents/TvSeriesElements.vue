
/* --------------------------------- script --------------------------------- */
<script >

import { getInnerRange } from '@vue/compiler-core';
import {store} from '../../store.js';
import MediaItem from './MediaItem.vue';

export default{
  name:"FilmElements",

  data(){
    return{
      store,

      slideMinIndex:0,
      slideMaxIndex:5,
    }
  },

  components:{
  MediaItem,
  },

  methods:{

    // funzione per mostrare nel dom solo 5 serie alla volta
    showSeries(index){
      if(index > this.slideMinIndex && index <= this.slideMaxIndex){
        return true;
      }
    },

    // funzione che stampa le successive 5 serie
    showNextSeries(){

      // se l'index massimo è compreso tra la lunghezza dell'array di serie e la lunghezza dell'array +4 (in caso ci fossero 6-11-16 serie)
      if(this.slideMaxIndex >= store.series.length && this.slideMaxIndex <= store.series.length + 4){

        // gli indici massimo e minimo rimangono invariati
        this.slideMinIndex = this.slideMinIndex;
        this.slideMaxIndex = this.slideMaxIndex;
      // altrimenti
      }else{

        // gli indici massimo e minimo aumentano di 5
        this.slideMinIndex +=5;
        this.slideMaxIndex +=5;
      }

    },

    // funzione che stampa le precedenti 5 serie
    showPrevSeries(){
      
      if(this.slideMinIndex == 0){

        // gli indici massimo e minimo rimangono invariati
        this.slideMinIndex = this.slideMinIndex;
        this.slideMaxIndex = this.slideMaxIndex;

      // altrimenti
      }else{
        // gli indici massimo e minimo diminuiscono di 5
        this.slideMinIndex -=5;
        this.slideMaxIndex -=5;
      }

    }

  }

}

</script>

/* -------------------------------- template -------------------------------- */

<template>
<div id="container">

  <div id="media-container">

    <MediaItem v-for="(serie,index) in store.series" :media="serie" v-show="showSeries(index)"></MediaItem>

    <div id="right" @click="showNextSeries()">
      <i class="fa-solid fa-chevron-right"></i>
    </div>

    <div id="left" @click="showPrevSeries()">
      <i class="fa-solid fa-chevron-left"></i>
    </div>

  </div>

    

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

</style>
