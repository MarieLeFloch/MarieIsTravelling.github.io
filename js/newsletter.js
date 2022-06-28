//* Module permettant de gérer l'affichage de l'encart de la newsletter

const newsletter = {
    //* On cible l'élément avec la classe .newsletter avant init pour qu'elle soit accessible dans tout le module

    newsletterElement: document.querySelector(".newsletter"),
    
    init: function () {

        //* 1. On veut afficher / supprimer l'encart "newsletter" quand l'utilisateur clique sur le lien du menu / sur la croix de l'encart
        // On cible le lien du menu newsletter
        const menuNewsletterElmt = document.querySelector(".menu__item--newsletter");

        // On pose l'ecouteur d'evenement
        menuNewsletterElmt.addEventListener("click", newsletter.handleNewsletterClick);

        // On cible le bouton fermer de l'encart
        const closeBtnElmt = document.querySelector(".newsletter__close");

        // On pose l'ecouteur d'evenement
        closeBtnElmt.addEventListener("click", newsletter.handleNewsletterClick);

        //* 2. Gérer l'envoi du formulaire
        //* 2a. A l'envoi du formulaire
        // On cible le form contenant le bouton de validation de l'email
        const formElement = document.querySelector(".newsletter__form");

        // On pose l'ecouteur d'evenement "submit"
        formElement.addEventListener("submit", newsletter.handleNewsletterSubmit);

        //* 2b. Après un certain temps / lorsque l'utilisateur scrolle
        // On pose un écouteur d'événement "scroll" sur la fenêtre !
        window.addEventListener("scroll", newsletter.handleScroll);

        // Au bout de 5 secondes, si la newsletter n'a pas été appelée avant via handleScroll, on appelle quand même la méthode display ci-dessous
        //setTimeout(newsletter.display, 5000);
    },

    handleScroll: function () {
        //* 2b. Méthode affichant la newsletter si l'utilisateur scrolle
        // Si avant les 5 secondes, l'utilisateur scrolle
        if (window.scrollY > 250) {
            // Affichage e le newsletter via méthode display
            newsletter.display();
            // Et dans ce cas on retire l'écouteur d'événement
            window.removeEventListener("scroll", newsletter.handleScroll);
        }
    },

    handleNewsletterClick: function (event) {
        //* Méthode gérant la fermeture de l'encart / appuie sur le lien newsletter
        // Normalement clique sur lien : rafraichissement ou redirection donc on stoppe ce comportement
        event.preventDefault();

        // On ajoute (ou retire si avait déjà été ajouté) la classe newsletter--on
        newsletter.newsletterElement.classList.toggle("newsletter--on");
    },

    handleNewsletterSubmit: function (event) {
        const forbiddenDomains = [
            "@yopmail.com",
            "@yopmail.fr",
            "@yopmail.net",
            "@cool.fr.nf",
            "@jetable.fr.nf",
            "@courriel.fr.nf",
            "@moncourrier.fr.nf",
            "@monemail.fr.nf",
            "@monmail.fr.nf",
            "@hide.biz.st",
            "@mymail.infos.st",
        ];

        // On cible l'input où est entrée l'adrese mail
        const newsletterFieldElmt = document.querySelector(".newsletter__field");
        // On récupère sa valeur
        const newsletterFieldValue = newsletterFieldElmt.value;

        // On va checker si la valeur entrée contient une des adresses non acceptées du tableau
        for (let forbiddenDomain of forbiddenDomains) {

            const isForbidden = newsletterFieldValue.includes(forbiddenDomain);
            // Si l'email contient une adresse jetable, isForbidden sera true
            // Sinon sera false

            if (isForbidden) { // si true : email jetable
                // On stoppe le comportement par defaut du submit de form (rechargement - redirection) avec preventDefault
                event.preventDefault();
                // On utilise le module messages pour afficher un message d'erreur
                messages.addMessageToElement(newsletter.newsletterElement, "Invalid email address");

                break;
            }
        }
    },
    display: function () {
        // *Ajout de la classe newsletter--on sur le aside pour l'afficher
        newsletter.newsletterElement.classList.add("newsletter--on");
    },
};
