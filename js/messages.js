//* Module gérant l'affichage de messages

const messages = {

    addMessageToElement: function (parentElement, textToDisplay) {
        //* 1.Méthode permettant d'ajout l'élément contenant le message 

        // Paramètre 1 : l'élément contenant, paramètre 2 : le contenu
        // Pour éviter d'avoir des doublons, on supprime s'il y en a les messages déjà existants -> via méthode 2.
        messages.removeMessagesFromElmt(parentElement);

        // On cible et on ajoute l'élément <p>
        const messageElement = document.createElement("p");
        // On lui ajoute la classe .message
        messageElement.classList.add("message");
        // Et on lui ajoute le contenu avec textContent
        messageElement.textContent = textToDisplay;
        // Puis, on l'ajoute dans le DOM, à l'endroit qui aura été ciblé lors de l'appel de la fonction
        parentElement.append(messageElement);
    },

    removeMessagesFromElmt: function (parentElement) {
        //* 2.Méthode permettant de supprimer un éventuel message déjà présent

        // On checke s'il existe déjà la classe .message
        // Pour ça on cible cet éventuel élément
        const pElement = parentElement.querySelector(".message");

        // Si il est null, c'est qu'il n'y a pas l'élément cherché donc on n'a rien à faire
        if (pElement !== null) {
            // Mais il c'est différent de null il y en a un donc on le supprime
            pElement.remove();
        }
    },
};
