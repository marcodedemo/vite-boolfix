
/* --------------------------------- script --------------------------------- */
<script >

import {store} from '../../store.js';
import MediaItem from './MediaItem.vue';

export default{
  name:"FilmElements",

  data(){
    return{
        store,
    }
  },

  components:{
    MediaItem,
}

}

</script>

/* -------------------------------- template -------------------------------- */

<template>
<div id="container">

  <div id="media-container">

    <MediaItem v-for="media in store.films" :media="media"></MediaItem>
  </div>

    

</div>
</template>


/* ---------------------------------- style --------------------------------- */
<style lang="scss" scoped>

  #media-container{
    display: flex;
    flex-flow: row wrap;
    gap: 20px;

    
  }

</style>
