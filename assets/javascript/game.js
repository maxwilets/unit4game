

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


$(document).ready(function() {
var seph = $(".sephiroth");
console.log(seph); 

var light = $(".lightning");
console.log(light);

var bea = $(".beatrix");
console.log(bea);

var vin = $(".vincent");
console.log(vin);

heroB= bea.on("click", function() {
    console.log("69");
    
    $(".character").after(bea);
    var defenders = [];
    defenders.push(vin, light, seph);
    $(".attackl").append(defenders).addClass("def");
    
    attack= beaCard.atk;
    damage = attack + beaCard.atk;
    $(".def").on("click", function () {
        console.log(defenders[0]);
        append$(".enemy")
    })

    $("button").on("click", function() {
       
        fight = true;
        damage = attack + beaCard.atk;

        console.log(damage);
        if (fight === true) {
            attack = attack + beaCard.atk;
            fight = false;
            
        };


    })
 

})

});