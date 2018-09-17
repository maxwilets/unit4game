



$(document).ready(function() {

    attacker= true

  

    var seph = $(".sephiroth");
// console.log(seph); 


var light = $(".lightning");
// console.log(light)

var bea = $(".beatrix");
// console.log(bea);

var vin = $(".vincent");
// console.log(vin);
//setting an array for the characters
var heroes = [seph, light, bea, vin];
var enemy;
var damage = 0;
var defeated = false
     
         $(this).on("click", ".hero", function(event) {
    console.log(event.currentTarget.attributes.value.value);
   //pulls value from html this value is equal to the selected
   //array index
    var cardValue = event.currentTarget.attributes.value.value;
    hhp = parseInt(event.currentTarget.attributes.hp.value)
    attack= parseInt(event.currentTarget.attributes.atk.value);
    hero = this
    console.log(hhp);
   
    console.log(attack);
    // heroes = [seph, light, bea, vin];

    $(".character").after(hero);
    //removes the selected card form the array
    heroes.splice(parseInt(cardValue),1);
    
    
    
    attacker = false;
    
    // console.log(defenders);
    //buts the new array in the attack1 div
    $(".attackl").append(heroes);

    //  console.log($(".def"));
    for (var i=0; i <= heroes.length; i++) {
        heroes[i].removeClass("hero");
        heroes[i].addClass("def");
         
     }
    
    })
    $(this).on("click", ".def", function (event) {
        // console.log(this);
       $(".enemy").after(this);
       badGuy = (this);
     
 
        badHp = parseInt(event.currentTarget.attributes.hp.value);
       badName = (event.currentTarget.attributes.name.value);
       badCounter= (event.currentTarget.attributes.counter.value);
       console.log($(badGuy));
       console.log(badHp);
       console.log(badCounter);
     
       
       
      // enemys = event.currentTarget.attribues.value.value;
      // heroes.splice(parseInt(enemys),1);
        // console.log(enemy);
     //  show = event.currentTarget.attribues.value.data;
     //  console.log(show);
        
      
       $("button").on("click", function() {
        console.log(badGuy);
        badCHP = badHp;
       
       var fight = true;
       //  damage = attack + .atk;
          if (fight) {
            //damage the character does  
            
            damage = damage + attack
              
              console.log(damage);
              //remaining hp for enemy
              badHp = badHp - damage;
             //remaining hp for hero
             hhp = hhp -badCounter;
             console.log("the character has" + hhp + "left");
             defeated = true;
              console.log(badHp);
              
              
                

          };
          fight = false;
          if (badHp <= 0) {
              alert("Congratulations you have defeated " + badName + "! Choose a new opponent");
              badGuy.remove();
              delete badHp;
    
              delete badCounter;
              
              delete badGuy;

              delete badName;
              
          }
          
          
        // if (fight === true) {
          //   attack = attack + beaCard.atk;
            // fight = false;
             
        // };
    })
        
    })

   


    })
 



