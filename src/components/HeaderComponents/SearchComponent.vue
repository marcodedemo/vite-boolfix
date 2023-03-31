
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

    input{
      width: 300px;
      height: 30px;
      padding: 0 5px;

      border: 1px solid white;
      border-radius: 8px;

      outline: none;

      &:focus{
        outline: 1px solid red;
        border: 1px solid red;

      }
    }

    button{
      padding: 6px 10px;

      border: 1px solid white;
      border-radius: 8px;

      &:hover{
        border: 1px solid red;
        background-color: hsla(0, 100%, 50%, 0.300);
      }
    }
  }
</style>
