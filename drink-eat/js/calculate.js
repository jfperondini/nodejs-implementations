

function calculateEatDrinkBy() {
   
    princeDrink = document.getElementById("priceFood").value
    personDrink = document.getElementById("food").value
    resultDrink = document.getElementById("resultFood").innerHTML = princeDrink / personDrink;
    
    priceFood = document.getElementById("priceDrink").value
    personFood = document.getElementById("drink").value
    resultDrink = document.getElementById("resultFoodDrink").innerHTML = (priceFood / personFood) + resultDrink;

};

