//* Module global centralisant les autres modules de l'application

const app = {
    //* Méthode init lançant toutes les autres méthodes inits des autres modules
    init: function () {
        //* Le module gérant les couleurs : dark / light et bleu / vert
        color.init();
        //* Le module gérant le slider
        slider.init();
        //* Le module gérant la newsletter
        newsletter.init();
        //* Le module gérant les articles (qui fait lui même appel au module messages)
        trips.init();
    },
};

//* On attend le chargement complet de la page (document) avant de lancer la méthode init. On pose alors un écouteur d'événement DOMContentLoaded

document.addEventListener("DOMContentLoaded", app.init);
