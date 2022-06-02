// Module gérant la partie tips (accordéon)

const tips = {
    init : function() {
        // On pose un écouteur d'événement click sur les titres
        // Les h3 sont considérés comme des "boutons", grace à cursor:pointer mis dans le CSS
        // Comme il y en a plusieurs on utilise selectorAll, puis on fera une boucle pour poser les écouteurs sur chaque titre
        titlesButtons = document.querySelectorAll('.tip__title');

        // titlesButtons étant un array, on utilise la boucle forEach
        // tab.forEach(element => instructions);
        titlesButtons.forEach(titleButton => {
            //console.log(titleButton);
            titleButton.addEventListener('click', tips.handleTitlesButtonsClick);
            }
        );  
    },

    handleTitlesButtonsClick : function (event) {
        // 1- Gestion de l'affichage du contenu
        // La class "open" sur un h3 est celle qui induit l'affichage

        // SI un contenu ouvert, on le ferme
        // On supprime la class open

        const responseAlreadyOpen = document.querySelector(".open");
        responseAlreadyOpen.classList.remove("open");
        //console.log(responseAlreadyOpen);

        // ET on affiche le contenu du titre cliqué
        // On ajoute la class open

        const titleButtonClicked = event.currentTarget;
        //console.log(titleButtonClicked);
        titleButtonClicked.classList.add("open");
        //console.log(titleButtonClicked);

        // 2- On modifie l'apparence de la flèche

        // La flèche du dernier contenu cliqué est retournée comme initialement
        arrowAlreadyOpen = responseAlreadyOpen.querySelector(".tip__arrow");
        arrowAlreadyOpen.style.transform = 'rotate(360deg)';


        // La flèche du contenu cliqué est tournée à 90degrés
        arrowButtonCLicked = titleButtonClicked.querySelector(".tip__arrow");
        arrowButtonCLicked.style.transform = 'rotate(90deg)';
    },

}
