//* Module global centralisant les autres modules de l'application

const app = {
    //* Méthode init lançant toutes les autres méthodes inits des autres modules
    init: function () {
        //* Le module gérant les couleurs : dark / light et bleu / vert
        color.init();
        //* Le module gérant la newsletter
        // On l'active juste à la première page
        let firstPage = document.querySelector(".presentation");
        if (firstPage){
            newsletter.init();
        }
        // newsletter.init();
        //* Le module gérant le slider
        // On ne le charge que s'il y a un slider dans la page courante
        let sliderExists = document.querySelector(".slider");
        if (sliderExists){
            slider.init();
        }
        //* Le module gérant les articles (qui fait lui même appel au module messages)
        trips.init();
        // Le module gérant l'accordéon des tips
        let accorderonExists = document.querySelector(".tips__accordeon__part");
        if (accorderonExists){
            tips.init();
        }
    },
};

//* On attend le chargement complet de la page (document) avant de lancer la méthode init. On pose alors un écouteur d'événement DOMContentLoaded

document.addEventListener("DOMContentLoaded", app.init);
