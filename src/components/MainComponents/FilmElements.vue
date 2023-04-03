
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

    showFilms(index){
      if(index >= this.store.filmsSlideMinIndex && index <= this.store.filmsSlideMaxIndex){
        return true;
      }
    },

    showNextFilm(){

      // se l'index massimo è maggiore o uguale a 19
      if(this.store.filmsSlideMaxIndex >= this.store.films.length - 1){

      // gli indici massimo e minimo rimangono invariati e blocco lo scroll dei film
      this.store.filmsSlideMinIndex = this.store.filmsSlideMinIndex;
      this.store.filmsSlideMaxIndex = this.store.filmsSlideMaxIndex;
      // altrimenti
      }else{

      // gli indici massimo e minimo aumentano di 5
      this.store.filmsSlideMinIndex +=5;
      this.store.filmsSlideMaxIndex +=5;
}
    },

    showPrevFilm(){

      if(this.store.filmsSlideMinIndex == 0){

      // gli indici massimo e minimo rimangono invariati
      this.store.filmsSlideMinIndex = this.store.filmsSlideMinIndex;
      this.store.filmsSlideMaxIndex = this.store.filmsSlideMaxIndex;

      // altrimenti
      }else{
      // gli indici massimo e minimo diminuiscono di 5
      this.store.filmsSlideMinIndex -=5;
      this.store.filmsSlideMaxIndex -=5;
}
    },


    // next page
    nextPage(){
      if(this.store.filmsSlideMaxIndex < this.store.films.length - 18){

        this.store.filmsActivePage++;

        this.store.filmsSlideMinIndex += 20;
        this.store.filmsSlideMaxIndex += 20;
      }
    },

    // prev page
    prevPage(){
      if(this.store.filmsSlideMinIndex >= 20){

        this.store.filmsActivePage--;

        this.store.filmsSlideMaxIndex -= 20;
        this.store.filmsSlideMinIndex -= 20;
      }
    },

    // select page
    changePage(number){

      if(this.store.searchInput == ''){

        this.store.filmsActivePage = number;
        this.store.filmsSlideMaxIndex = 20 * number - 1;
        this.store.filmsSlideMinIndex = this.store.filmsSlideMaxIndex + 1 - 20;
        
      }
    }
    
  }

}

</script>

/* -------------------------------- template -------------------------------- */

<template>
<div id="container" v-if="store.filmsNotFound == false">

  <div id="media-container">

    <MediaItem v-for="(film, index) in store.films" :media="film" v-show="showFilms(index)"></MediaItem>

    <div id="arrows" v-if="store.activeSectionIndex == 0">

      <div id="right" @click="showNextFilm()">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
      
      <div id="left" @click="showPrevFilm()">
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      
    </div>
    
  </div>

  <div id="pages" v-if="store.activeSectionIndex == 2">

    <a href="#">
      <i class="fa-solid fa-caret-left" @click="prevPage()"></i>
    </a>

    <div id="pageNumbers">
      <a href="#" id="pageNumber" v-for="number in this.pageNumbers" @click="changePage(number)" :class="store.filmsActivePage == number ? 'active' : ''">{{ number }}</a>
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
