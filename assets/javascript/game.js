



$(document).ready(function() 
{
alert("Welcome to my Final Fantasy Game Choose a Character")
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
var heroes = [
    seph, light, bea, vin
];

var damage = 0;

     
         $(this).on("click", ".hero", function(event) {
    
   //pulls value from html this value is equal to the selected
   //array index
  
    var cardValue = event.currentTarget.attributes.value.value;
    hhp = parseInt(event.currentTarget.attributes.hp.value)
    attack= parseInt(event.currentTarget.attributes.atk.value);
    hero = $(this);
    console.log(hhp);
   
    console.log(attack);
    // heroes = [seph, light, bea, vin];

    $(".character").after(hero);
    //removes the selected card form the array
    heroes.splice(parseInt(cardValue),1);
    

   
    attacker = false;
    
    // console.log(defenders);
    //buts the new array in the attack1 div
    $(".attackl").html(heroes);
     alert("Now Choose an Enemy");
    //  console.log($(".def"));
    for (var i=0; i <= heroes.length; i++) 
    {
        heroes[i].removeClass("hero");
        heroes[i].addClass("def");
         
     }
    
    
    })
    $(this).on("click", ".def", function (event)
     {
        // console.log(this);
        badGuy = $(this);
        VBadGuy= [];
       
    
       //Stats for the enemy
       badHp = parseInt(event.currentTarget.attributes.hp.value);
       badName = (event.currentTarget.attributes.name.value);
       badCounter= parseInt(event.currentTarget.attributes.counter.value);
       


      (VBadGuy).push(badGuy, badHp, badName, badCounter);
        //put variables in an array
       //move the rest of the characters on a row 
       $(".enemy").html($(badGuy));
       $(badGuy).addClass("opponent");
       
       //setting variables to span into where the html is on the card to live update remaining HP
       var look = (badGuy.children($()));
       
       var look2 = (look.children($("div.card-body")));
       
       var look3 = (look2.children($("span").value));
       

       var heroH = $((hero).children($()));
    
       var heroH2 = ($(heroH).children($("div.card-body")));
     
       var heroH3 = ($(heroH2).children($("span").value));
      

       
      // enemys = event.currentTarget.attribues.value.value;
      // heroes.splice(parseInt(enemys),1);
        // console.log(enemy);
     //  show = event.currentTarget.attribues.value.data;
     //  console.log(show);
        
      
       $("button").on("click", function() 
       {
        
      
       var fight = true;
       //  damage = attack + .atk;
          if (fight) {
            //damage the character does  
       
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
              
              
              };
          if (hhp <= 0) {
              alert("Your hero has fallen, thus is the futility of war! Try again");
              location.reload(true);
              //if your character runs out of hp it resets the game
          }
          fight = false;
          if (VBadGuy[1] <= 0) {
              alert("Congratulations you have defeated " + badName + "! But even mountains turn to sand, Choose a new opponent");
            //  $(badGuy).removeClass(".opponent")
             // $(badGuy).remove();
              delete VBadGuy;
              $(".enemy").empty();
              
              console.log($(".enemy"));
    
              
          }
          
          
        // if (fight === true) {
          //   attack = attack + beaCard.atk;
            // fight = false;
             
        // };
    })
        
    })

   


    })
 



