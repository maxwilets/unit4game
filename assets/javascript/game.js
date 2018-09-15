



$(document).ready(function() {
    var sephCard = {
        name: "sephiroth",
        hp: 180,
        counter: 30,
        atk: 14
    };
    
    var vinCard = {
        name: "vincent",
        hp: 140,
        counter: 20,
        atk: 10
    };
    var lightCard = {
        name: "lightning",
        hp: 120,
        counter: 15,
        atk: 8
    }
    var beaCard = {
        name: "beatrix",
        hp: 160,
        counter: 25,
        atk: 12
    };
    attacker= true

    var charactersAr = [sephCard, lightCard, beaCard, vinCard];

    var seph = $(".sephiroth");
// console.log(seph); 


var light = $(".lightning");
// console.log(light)

var bea = $(".beatrix");
// console.log(bea);

var vin = $(".vincent");
// console.log(vin);

var heroes = [seph, light, bea, vin];
var enemy;



     
         $(this).on("click", ".hero", function(event) {
    console.log(event.currentTarget.attributes.value.value);
    var cardValue = event.currentTarget.attributes.value.value;
    // heroes = [seph, light, bea, vin];

    $(".character").after(this);
    heroes.splice(parseInt(cardValue),1);
    

    attacker = false;
    
    // console.log(defenders);
    
    $(".attackl").append(heroes);

    //  console.log($(".def"));
    for (var i=0; i <= heroes.length; i++) {
        heroes[i].removeClass("hero");
        heroes[i].addClass("def");
        console.log(heroes.class)
     }
    attack= beaCard.atk;
    damage = attack + beaCard.atk;})
    $(this).on("click", ".def", function (event) {
        // console.log(this);
       $(".enemy").after(this);
      // enemys = event.currentTarget.attribues.value.value;
      // heroes.splice(parseInt(enemys),1);
        // console.log(enemy);
       
      
       $("button").on("click", function() {
           
        console.log("bad guy")
       //  fight = true;
       //  damage = attack + .atk;
 
          console.log(damage);
         if (fight === true) {
             attack = attack + beaCard.atk;
             fight = false;
             
         };
    })
        
    })

   


    })
 



