
/* --------------------------------- script --------------------------------- */
<script >

import {store} from '../../store.js'

export default{
  name:"SearchComponent",

  data(){
    return{
        store,
    }
  },

  emits:['userSearch'],

}

</script>

/* -------------------------------- template -------------------------------- */

<template>
<div id="container" class="centered">

  <input type="text" v-model="store.searchInput" placeholder="Cerca il tuo titolo!" @keyup.enter="$emit('userSearch')">
  <button @click="$emit('userSearch')">Cerca</button>
    

</div>
</template>


/* ---------------------------------- style --------------------------------- */
<style lang="scss" scoped>

  #container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    padding: 50px 0 0;
  }
</style>
