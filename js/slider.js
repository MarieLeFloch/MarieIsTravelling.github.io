//* Module permettant de gérer le slider d'images

const slider = {
    // On va stocker un index pour la slide courante
    // Et préparer un tableau qui contiendra les différentes images

    currentImg: 0,
    // currentTitle: 0,
    imgList: [],
    // titleList: [],

    init: function () {
        // On va récupérer les images
        slider.loadImages();

        // On enregistre dans le tableau les éléments contenant les images
        slider.imgList = document.querySelectorAll(".slider__img");
        
        //! TITLES
        // slider.textList = document.querySelectorAll(".slider__title");

        // On place des ecouteurs d'evenement sur les flèches precedant / suivant, 2 éléments 0->previous, 1->suivant
        const arrowBtnList = document.querySelectorAll(".slider__btn");

        // On place l'ecouteur sur le bouton précédant
        const prevArrowElmt = arrowBtnList[0];
        prevArrowElmt.addEventListener("click", slider.handlePreviousClick);

        // On place l'ecouteur sur le bouton suivant
        const nextArrowElmt = arrowBtnList[1];
        nextArrowElmt.addEventListener("click", slider.handleNextClick);

        //* On veut que les images défilent d'office dynamiquement, même sans clic -  on utilise un "timer"
        // Pour ça on va simuler un clic avec click()
        // Et définir un interval de 4 secondes, via setInterval 
        setInterval(function () {
            nextArrowElmt.click();
        }, 4000);

        //* Il faut aussi gérer le fait que l'utilisateur puisse défiler avec le clavier
        // Keyboard event ("touches clavier") : dont flèche gauche / droite
        // Pour les identifier, il faut utiliser les Key Values définies à cet effet! ArrowRight et ArrowLeft
        // On place un écouteur sur cet événément
   
        window.addEventListener("keydown", function (event) {
            if (event.key === "ArrowRight") {
                // si on a cliqué sur la touche "fleche droite" alors on simule le click
                nextArrowElmt.click();
            }
            
            if (event.key === "ArrowLeft") {
                // si on a cliqué sur la touche "fleche gauche" alors on simule le click
                prevArrowElmt.click();
            }
        });
    },

    handlePreviousClick: function () {
        //* Gestion du clic (flèche) pour afficher l'image précédente
        // On déclare une variable pour stocker le numéro de la slide précédente à afficher
        let previousImgNumber;

        // Si l'image courante = 0
        if (slider.currentImg === 0) {
            // L'image qui la précéde est égale à la longueur du tableau -1, soit index : 2  (imgList : [0, 1, 2])
            previousImgNumber = slider.imgList.length - 1;
        }
        //  Si on n'est pas sur l'image 0, on est sur la 1 ou la 2, dans ce cas
        else {
            // On veut aller à l'image courante -1
            previousImgNumber = slider.currentImg - 1;
        }

        // on appelle goToSlide avec le numéro de la slide précédante en param
        slider.goToSlide(previousImgNumber);

        // //! TITLES
        // let previousTitleNumber;
        //         // Si l'image courante = 0
        // if (slider.currentTitle === 0) {
        //     // L'image qui la précéde est égale à la longueur du tableau -1, soit index : 2  (imgList [0, 1, 2])
        //     previousTitleNumber = slider.titleList.length - 1;
        // }
        // //  Si on n'est pas sur l'image 0, on est sur la 1 ou la 2, dans ce cas
        // else {
        //     // On veut aller à l'image courante -1
        //     previousTitleNumber = slider.currentTitle - 1;
        // }

        // // on appelle goToSlide avec le numéro de la slide précédante en param
        // slider.goToSlide(previousTitleNumber);
    },


    handleNextClick: function () {
        //* Gestion du clic (flèche) pour afficher l'image suivante

        let nextImgNumber;
        // Si l'image courante = 2, soit la dernière -1
        if (slider.currentImg === slider.imgList.length-1) {
            // L'image qui suit sera la 0
            nextImgNumber = 0;
        }
        //  Sinon
        else {
            // On veut aller à l'image courante +1
            nextImgNumber = slider.currentImg + 1;
        }

        // on appelle goToSlide avec le numéro de la slide suivante en param
        slider.goToSlide(nextImgNumber);
    

    // //! TITLES
    //     let nextitleNumber;
    //     // Si l'image courante = 2, soit la dernière -1
    //     if (slider.currentImg === slider.titleList.length-1) {
    //         // L'image qui suit sera la 0
    //         nextitleNumber = 0;
    //     }
    //     //  Sinon
    //     else {
    //         // On veut aller à l'image courante +1
    //         nextitleNumber = slider.currentTitle + 1;
    //     }

    //     // on appelle goToSlide avec le numéro de la slide suivante en param
    //     slider.goToSlide(nextitleNumber);
        },
    

    goToSlide: function (nextImgNumber) {
        // et va chercher la slide dont le numéro est passé en paramètre et lui ajoute la classe courante

        // on va chercher la slide courrante
        const currentImg = slider.imgList[slider.currentImg];

        // on lui enleve la class courrante
        currentImg.classList.remove("slider__img--current");

        // on recupère l'image dont le numéro "nextImgNumber" est passé en param
        // on a la liste des images, on prend donc l'image numéro "nextImgNumber" dans la liste
        const nextImg = slider.imgList[nextImgNumber];

        // on lui ajoute la classe courante
        nextImg.classList.add("slider__img--current");

        // on met à jour la propriété qui stocke l'image courante
        // maintenant la nouvelle image courante est celle dont le num est passé en paramètre
        slider.currentImg = nextImgNumber;
    },

    loadImages: function () {
        // fonction qui va inserer dans le DOM des images pour le slider
        const sliderImages = ["colombie1.jpg", "maroc1.jpg", "thailand1.jpg", "grece1.jpg"];
        
        //! title
        // const sliderTitles = ["Colombia, 2020", "Morroco, 2018", "Thailand, 2017", "Greece, 2016"]
        
        // 1 - selectionner l'element slider qui sera le parent dans lequel on va inserer les images
        const sliderElmt = document.querySelector(".slider");

        //! title
        // const sliderTitleElmt = document.querySelector(".slider__title");

        // 2 - BOUCLE : pour chaque element du tableau  :
        for (const image of sliderImages) {
            // creer un element img : createElement
            let imgElmt = document.createElement("img");

            // lui ajouter une class : classList / className
            imgElmt.classList.add("slider__img");

            // lui ajouter une url d'image src : .src
            imgElmt.src = "img/" + image;

            // ajouter l'element image dans le parent slider : appendChild ou prepend
            sliderElmt.prepend(imgElmt);
        }

        // //! title
        // for (const title of sliderTitles) {
            
        //     // creer un element img : createElement
        //     let titleElmt = document.createElement("p");

        //     // lui ajouter une class : classList / className
        //     titleElmt.classList.add("slider__title");

        //     // lui ajouter une url d'image src : .src
        //     titleElmt.content = title;

        //     // ajouter l'element image dans le parent slider : appendChild ou prepend
        //     sliderTitleElmt.prepend(titleElmt);
        // }


        // on va aller chercher la premiere image avec querySelector
        // on lui ajoute la classe current
        const firstImage = document.querySelector(".slider__img");
        firstImage.classList.add("slider__img--current");
    },
};
