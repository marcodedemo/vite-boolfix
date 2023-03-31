
/* --------------------------------- script --------------------------------- */
<script >

import SearchComponent from './HeaderComponents/SearchComponent.vue';

export default{
  name:"AppHeader",

  data(){
    return{

      headerLinks:[
        "Home",
        "Serie TV",
        "Film",
      ],

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

    <!-- header left side -->
    <div id="header-left-side">

      <!-- header logo -->
      <div id="header-logo">
        <img src="../../public/img/logo.png" alt="boolfix logo">
      </div>
      
      <div id="header-links">
        <ul id="links">
          <li v-for="link in this.headerLinks"><a href="#">{{ link }}</a></li>
        </ul>
      </div>

    </div>
      
    <!-- header right side -->
    <div id="header-right-side">

      <!-- header search -->
      <div id="search">
        <SearchComponent @user-search="$emit('userSearch')"></SearchComponent>
      </div>

      <div id="notifications">
        <i class="fa-regular fa-bell"></i>
        <div id="notifications-number">7</div>
      </div>

      <!-- user img -->
      <div id="user-img">
        <img src="../../public/img/user-img.png" alt="user img">
      </div>
      
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

  padding: 10px 0;


  #header-left-side{
    display: flex;
    align-items: center;
    gap: 50px;
    
    #header-logo{
      width: 250px;
      
      
      img{
        width: 100%;
      }
    }
    
    #links{
      display: flex;
      gap: 20px;

      a{
        color: white;

        &:hover{
          text-decoration: underline;
        }
      }
    }

  }

  #header-right-side{
    display: flex;
    gap: 30px;

    #search{

      display: flex;
      justify-content: center;
      align-items: center;
    }

    #user-img{
      width: 60px;

      img{
        width: 100%;
        border-radius: 10px;
      }
    }

    #notifications{
      display: flex;
      justify-content: center;
      align-items: center;
      
      position: relative;
      
      i{
        font-size: 2em;

      }

      #notifications-number{
        position: absolute;
        top: 8px;
        right: -8px;

        display: flex;
        justify-content: center;
        align-items: center;

        height: 20px;
        width: 20px;

        background-color: red;
        padding: 2px;
        border-radius: 50%;
      }
    }
  }

}

</style>
