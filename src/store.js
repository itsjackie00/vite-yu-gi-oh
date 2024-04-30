import {reactive} from 'vue';

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    endPoint: {
    //    'name': 'name',
    //    'type': 'type',
    //    'desc': 'desc',
    //    'atk': 'atk',
    //    'def': 'def',
    //    'level': 'level',
    //    'race': 'race',
    //    'attribute': 'attribute'
    cards: 'cardinfo.php',
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
    options: {
        params:{
            num: 20,
            offset: 0,
            status: ''
        }
    },
    statusFilter: '',
    cards: [],
    total: 0,
    archetypeList: [],
    statusFilter: '',
    archetypeList: []
    
});