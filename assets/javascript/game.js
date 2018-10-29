



$(document).ready(function () {
   alert("Welcome to my Final Fantasy Game Choose a Character")
    attacker = true


    //creates class tags for the choosable characters
    var seph = $(".sephiroth");
    var light = $(".lightning");
    var bea = $(".beatrix");
    var vin = $(".vincent");
    var heroes = [
        seph, light, bea, vin
    ];
    //sets an array to choose the characters from, wins, damage starts at 0
    var wins = 0
    var damage = 0;
    var badGuy;

    $(this).on("click", ".hero", function (event) {

        //pulls value from html this value is equal to the selected
        //array index
        //sets the chosen attackers hp, and attack
        var cardValue = event.currentTarget.attributes.value.value;
        hhp = parseInt(event.currentTarget.attributes.hp.value)
        attack = parseInt(event.currentTarget.attributes.atk.value);
        hero = $(this);

            
        $(".character").after(hero);
        //removes the selected card form the array
        heroes.splice(parseInt(cardValue), 1);


        //buts the new array in the attack1 div
        $(".attackl").html(heroes);
         alert("Now Choose an Enemy");
        //  gives the aray a class of defece instead of hero
        for (var i = 0; i <= heroes.length; i++) {
            heroes[i].removeClass("hero");
            heroes[i].addClass("def");

        }


    })

    $(this).on("click", ".def", function (event) {

        //removes the selected defender from the array
        enemys = event.currentTarget.attributes.value.value;
        heroes.splice(parseInt(enemys), 1);

       
        badGuy = $(this);
        VBadGuy = [];
        //Stats for the enemy
        badHp = parseInt(event.currentTarget.attributes.hp.value);
        badName = (event.currentTarget.attributes.name.value);
        badCounter = parseInt(event.currentTarget.attributes.counter.value);
        (VBadGuy).push(badGuy, badHp, badName, badCounter);
        //put variables in an array
        //move the rest of the characters on a row 
        $(".enemy").html($(badGuy));
        $(badGuy).addClass("opponent");

        //setting variables to span into where the html is on the card to live update remaining HP
       


     
    })
        //Statrs the fight by clicking attack button
        $("button").on("click", function () {

            var look = (badGuy.children($()));

            var look2 = (look.children($("div.card-body")));
    
            var look3 = (look2.children($("span").value));
    
    
            var heroH = $((hero).children($()));
    
            var heroH2 = ($(heroH).children($("div.card-body")));
    
            var heroH3 = ($(heroH2).children($("span").value));
    
    
 

                damage = damage + attack

                console.log(damage);
                //remaining hp for enemy
                VBadGuy[1] = VBadGuy[1] - damage;
                console.log(VBadGuy[1])
                //remaining hp for hero
                hhp = hhp - VBadGuy[3];

                defeated = true;
                $(look3).html("<h5>HP: " + VBadGuy[1] + "</h5>");
                $(heroH3).html("<h5> HP: " + hhp + "</h5");


          //Logic for wins each emeny defeted counts as a win
            if ((VBadGuy[1] <= 0) &&(wins === 2)) {
                alert("You have won!");
                location.reload(true);

            }
            else if (VBadGuy[1] <= 0) {
                wins++; 
                alert("Congratulations you have defeated " + badName + "! But even mountains turn to sand, Choose a new opponent");
               
                badGuy = null;
                badHp = 0;
                badCounter = 0;
                $(".enemy").empty();
                

                console.log(wins);
                


            }
            if (hhp <= 0) {
                   alert("Your hero has fallen, thus is the futility of war! Try again");
                location.reload(true);
                //if your character runs out of hp it resets the game
            }

        


    

    });




})




