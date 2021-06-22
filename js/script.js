var app = new Vue(
    {
        el: '#root',
        data: {
            indice_immagine: 0,
            immagini: [
                "https://www.cinematographe.it/wp-content/uploads/2019/06/chris-evans-captain-america-difficolta.jpg",
                "https://cdn.bestmovie.it/wp-content/uploads/2021/02/iron-man-3_0c4b8f-696x398.jpg",
                "https://www.cinematographe.it/wp-content/uploads/2019/05/thor.jpg",
                "https://orgoglionerd.it/wp-content/uploads/2021/03/jack-black-hulk.jpeg"
            ]
        },
        methods: {
            next_image() {

                this.indice_immagine += 1;

                if(this.indice_immagine > this.immagini.length - 1) {
                    this.indice_immagine = 0;
                }
            },
            prev_image() {

                this.indice_immagine -= 1;

                if(this.indice_immagine < 0) {
                    this.indice_immagine = this.immagini.length - 1;
                }
            },
            change_image(indice_pallino) {

                this.indice_immagine = indice_pallino;
            }
        },
        created: function() {

            setInterval(this.next_image, 3000);
        }
    }
);