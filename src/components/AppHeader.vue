
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

  <div id="container" class="centered">

    <!-- header logo -->
    <div id="header-logo">
      <img src="../../public/img/logo.png" alt="boolfix logo">
    </div>
    
    <!-- header search -->
    <div id="search">
      <SearchComponent @user-search="$emit('userSearch')"></SearchComponent>
    </div>
    
  </div>
</header>
</template>


/* ---------------------------------- style --------------------------------- */
<style lang="scss" scoped>

#container{
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 10px;

  #header-logo{
    width: 250px;


    img{
      width: 100%;
    }
  }
}

</style>
