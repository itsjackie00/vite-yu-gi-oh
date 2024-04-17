import {reactive} from 'vue';

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    endPoint: {
       cards: 'cardinfo.php',
       archetype: 'archetypes.php'
    },
    options: {
        params: {
            num: 20,
            offset: 0,
            status:''
        }
    },
    cards: [],
    statusFilter: '',
    archetypeList: []
    
});