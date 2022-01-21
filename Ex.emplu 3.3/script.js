                                
let styles = ["Jazz", "Blues"];         // Creem masivul
        console.log(styles);
        
    styles.push("Rock-and-Roll");        //Adaugam la sfirsitul masivului
        console.log(styles);

    styles.splice(1, 1, "Clasica");     //Inlocuim valoarea in mijloc
        console.log(styles);

    alert(styles.shift());              //Stergem primiul element din masiv si il afisam   

    styles.unshift("Reggae", "Rap");    //Adaugam 2 elemente la inceput de masiv
        console.log(styles);

        