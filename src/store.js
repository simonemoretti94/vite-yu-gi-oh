import { reactive } from 'vue';

export const store = reactive({
    //data
    yuGiOhAPI: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    cards: [],

    //methods
    cardsMaker(url) {
        for (let i = 0; i < 15; i++) {
            axios.get(this.yuGiOhAPI)
                .then((response) => {
                    this.cards.push(response.data.data[i]);
                    //console.log('response.data.data[i].card_images[0]', response.data.data[i].card_images[0]);
                })
                .catch(function (err) {
                    console.log(err);
                });
        };

    },

    typeSelect(evento) {

        //Filter section
        evento.preventDefault();
        console.log('event value: ', evento.target.value);
        this.cards.forEach((element, index) => {

            if (evento.target.value === '') { }
            else if (element.archetype === evento.target.value) {
                console.log(`card[${index}] element: `, element, 'type of element: ', typeof (element));
            }
            else if (!'archetype' in element) { console.log('archetype not in object!'); }
            else {
                this.cards.splice(index, 1);
            }
        });
    },
});