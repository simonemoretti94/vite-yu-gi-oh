import { reactive } from 'vue';

export const state = reactive({
    //data
    yuGiOhAPI: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    cards: [],
    yuGiOhArchetype: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    selectedArchetype: '',
    archetypeList: [],

    //methods
    cardsMaker(url) {
        for (let i = 0; i < 15; i++) {
            axios.get(url)
                .then((response) => {
                    this.cards.push(response.data.data[i]);
                    console.log('response.data.data', response.data.data);
                })
                .catch(function (err) {
                    console.log(err);
                });
        };
        setTimeout(() => {
            console.log(this.cards);
        }, 5000);
    },

    fetchArchetype(url) {
        axios.get(url)
            .then((response) => {
                //console.log('arch log: ', response.data);
                this.archetypeList = response.data;
            })
            .catch(function (err) {
                console.log(err);
            });

        setTimeout(() => {
            //console.log(this.archetypeList);
        }, 5000);
    },
});