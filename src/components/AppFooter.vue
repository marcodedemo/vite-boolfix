
/* --------------------------------- script --------------------------------- */
<script >

export default{
  name:"AppFooter",

  data(){
    return{

      footerLinks:[
        "Audiodescrizione",
        "Rapporto con gli investitori",
        "Note legali",
        "Centro assistenza",
        "Opportunità di lavoro",
        "Preferenze per i cookie",
        "Carte regalo",
        "Condizioni di utilizzo",
        "Informazioni sull'azienda",
        "Media Center",
        "Privacy",
        "Contattaci",

      ],

    }
  },

}

</script>

/* -------------------------------- template -------------------------------- */

<template>
<footer class="centered">

  <!-- footer icons -->
  <div id="icons">
    <a href="#">
      <i class="fa-brands fa-facebook-f"></i>
    </a>

    <a href="#">
      <i class="fa-brands fa-instagram"></i>
    </a>

    <a href="#">
      <i class="fa-brands fa-twitter"></i>
    </a>

    <a href="#">
      <i class="fa-brands fa-youtube"></i>
    </a>

  </div>

  <!-- footer links -->
  <div id="links">

    <!-- link list -->
    <ul>

      <li v-for="link in this.footerLinks"><a href="#">{{ link }}</a></li>

    </ul>

  </div>

  <div id="footer-bottom">
    <button>Codice di servizio</button>
    <span>© 1997-2023 Boolflix, Inc.</span>
  </div>

</footer>
</template>


/* ---------------------------------- style --------------------------------- */
<style lang="scss" scoped>

  footer{
    margin-top: 100px;

    #icons{
      display: flex;
      gap: 30px;

      a{
        color: white;

        i{
          font-size: 1.6em;
        }
      }
    }

    #links{
      height: 100px;

      margin-top: 20px;
      ul{
        display: flex;
        flex-flow: column wrap;
        gap: 8px;
        

        height: 100%;

        a{
          color: #808080;

          &:hover{
            text-decoration: underline;
          }
        }
      }
    }

    #footer-bottom{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;

      color: #808080;

      margin: 20px 0;


      button{

        background-color: transparent;
        color: #808080;

        padding: 6px;

        border-radius: 0%;
        border: 1px solid #808080;;

        &:hover{
          color: white;
        }

      }

      span{
        font-size: .8em;
      }
    }
  }
</style>
