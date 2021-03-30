Vue.config.devtools = true;
var app = new Vue({
    el: "#app",
    data: {
        cards: {}
    },
    methods: {

    },
    mounted() {
        axios
            .get("https://flynn.boolean.careers/exercises/api/array/music")
            .then((response) => {
                this.cards = response.data.response;
            });
    }
});