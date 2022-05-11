//* On va regrouper ici les données utilisées dans l'appli 
// Ce qui nous permettra de dynamiser le contenu index.html


    // countriesCards = {

    //     "Colombie" :  ["Colombia","colombie1"],
    //     "Roumanie" :  ["Romania","romania2"],

    // };

    countriesCards = [

        ["Colombia","colombie1"],
        ["Romania","romania2"],

    ];

    console.log(countriesCards[0]);
    
    // countriesCards.forEach((country) => {
    //     console.log(country[0]);
    // });

    for (const country of countriesCards) {console.log(country[0]); }

 

    // countriesCards = [

    //     "Colombie" =  [
    //         "country" = "Colombia",
    //         "img" = "colombie1",
    //     ],
    //     "Roumanie" =  [
    //         "country" = "Romania",
    //         "img" = "romania2",
    //     ],
    //     "Maroc" =  [
    //         "country" = "Morocco",
    //         "img" = "maroc1",
    //     ]

    // ];


    // countriesCards.forEach((country) => {
    //     console.log(country['country']);

    // });