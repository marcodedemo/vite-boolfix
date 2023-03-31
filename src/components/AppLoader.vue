
/* --------------------------------- script --------------------------------- */
<script >



export default{
  name:"AppLoader",

  data(){
    return{

    }
  },

  

}

</script>

/* -------------------------------- template -------------------------------- */

<template>
<div id="loader">

  Loading...

</div>
</template>


/* ---------------------------------- style --------------------------------- */
<style lang="scss" scoped>

#loader {
  display: flex;
  justify-content: center;
  align-items: center;



  width: 100%;
  height: calc(100vh - 100px);

  background-color: #242424;

  z-index: 1;
}

</style>
