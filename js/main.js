Vue.config.devtools = true;
var app = new Vue({
    el: "#app",
    data: {
        cards: {},
        genres: [],
        selected: "All"
    },
    methods: {
        genreArray() {
            for(let i = 0; i < this.cards.length; i++) {
                if(!this.genres.includes(this.cards[i].genre))
                this.genres.push(this.cards[i].genre);
            }
            this.genres.sort();
        }
    },
    mounted() {
        axios
            .get("https://flynn.boolean.careers/exercises/api/array/music")
            .then((response) => {
                this.cards = response.data.response;
                this.genreArray();
            });
    }
});