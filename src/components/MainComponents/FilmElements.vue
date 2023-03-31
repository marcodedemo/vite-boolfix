
/* --------------------------------- script --------------------------------- */
<script >

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

    showFilms(index){
      if(index > this.slideMinIndex && index <= this.slideMaxIndex){
        return true;
      }
    },

    showNextFilm(){

      // se l'index massimo è compreso tra la lunghezza dell'array di film e la lunghezza dell'array +4 (in caso ci fossero 6-11-16 film)
      if(this.slideMaxIndex >= store.films.length && this.slideMaxIndex <= store.films.length + 4){

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

    showPrevFilm(){

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

    <MediaItem v-for="(film, index) in store.films" :media="film" v-show="showFilms(index)"></MediaItem>

    <div id="right" @click="showNextFilm()">
      <i class="fa-solid fa-chevron-right"></i>
    </div>

    <div id="left" @click="showPrevFilm()">
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
