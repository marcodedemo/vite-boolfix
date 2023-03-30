
import {reactive} from 'vue';

export const store = reactive({

    // array contenente i film da visualizzare
    films:[],

    // richiesta api standard senza ricerche
    APIbaseCall: "",

    // booleana per il controllo del caricamento della risposta dell' API
    isLoading: false,

    // input di ricerca 
    searchInput:"",

});