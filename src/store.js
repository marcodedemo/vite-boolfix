
import {reactive} from 'vue';

export const store = reactive({

    // array contenente i film da visualizzare
    films:[],

    // array contenente le serie da visualizzare
    series:[],

    // richiesta api standard senza ricerche dei film
    APIfilmBaseCall: "https://api.themoviedb.org/3/trending/movie/week?api_key=f4c054f1775af08e79e52d3d329cea32",

    // richiesta api standard senza ricerche delle serie
    APIseriesBaseCall:"https://api.themoviedb.org/3/trending/tv/week?api_key=f4c054f1775af08e79e52d3d329cea32",

    // richiesta API in base all'input utente dei film
    filmSearchedInputAPIcall:"",

    // richiesta API in base all'input utente delle serie
    seriesSearchedInputAPIcall:"",

    // booleana per il controllo del caricamento della risposta dell' API
    isLoading: true,

    // input di ricerca 
    searchInput:"",

    // indice di visualizzazione delle sezioni
    activeSectionIndex: 0,

    // indice di visualizzazione dei films
    filmsSlideMinIndex:0,
    filmsSlideMaxIndex:4,

    // indice di visualizzazione dei series
    seriesSlideMinIndex:0,
    seriesSlideMaxIndex:4,

    mediaToSearch:'0',

    // indici corrispondenti alla pagina attiva dei film e delle serie
    filmsActivePage:1,
    seriesActivePage:1,

    // booleani per la visualizzazione del messaggio di ricerca fallita
    filmsNotFound: false,
    seriesNotFound:false,

});





// encodeURIComponent()