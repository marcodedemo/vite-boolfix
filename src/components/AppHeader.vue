
/* --------------------------------- script --------------------------------- */
<script >

import SearchComponent from './HeaderComponents/SearchComponent.vue';

export default{
  name:"AppHeader",

  data(){
    return{

    }
  },

  components:{
    SearchComponent,
  }

}

</script>

/* -------------------------------- template -------------------------------- */

<template>
<header>

    
  <SearchComponent @user-search="$emit('userSearch')"></SearchComponent>

</header>
</template>


/* ---------------------------------- style --------------------------------- */
<style lang="scss" scoped>



</style>
