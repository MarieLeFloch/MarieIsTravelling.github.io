// Module travels gérant l'affichage des articles

const trips = {
    init: function () {
        // On cible les boutons "see more"
        const moreButtons = document.querySelectorAll(".btn__more");

        // On place un écouteur sur chaque bouton pour l'événement click
        for (const moreButton of moreButtons) {
            moreButton.addEventListener("click", trips.handleLikeClick);
        }
    },
    handleLikeClick: function (event) {
        //* Méthode de gestion du click

        // On cible l'élément ayant subi l'événement
        const buttonElement = event.currentTarget;

        // On cible ensuite la balise parente article (classe card) de cet élément
        const cardElement = buttonElement.closest(".card");

        // on fait appel à la méthode d'affichage des messages du module message
        // paramètre 1 : l'élément contenant, paramètre 2 : le contenu
        messages.addMessageToElement(cardElement, "Coming soon ;-)");
    },
};
