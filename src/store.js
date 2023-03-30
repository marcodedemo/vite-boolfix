
import {reactive} from 'vue';

export const store = reactive({

    // array contenente i film da visualizzare
    medias:[],

    // richiesta api standard senza ricerche
    APIbaseCall: "https://api.themoviedb.org/3/trending/all/week?api_key=f4c054f1775af08e79e52d3d329cea32",

    // richiesta API in base all'input utente
    searchedInputAPIcall:"",

    // booleana per il controllo del caricamento della risposta dell' API
    isLoading: false,

    // input di ricerca 
    searchInput:"",

});