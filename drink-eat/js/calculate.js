

function calculateEatDrinkBy() {

    princeDrink = document.getElementById("priceFood").value
    personDrink = document.getElementById("food").value
    
    resultDrink = document.getElementById("resultFood").innerHTML = parseFloat
    ((princeDrink / personDrink).toFixed(2))


    priceFood = document.getElementById("priceDrink").value
    personFood = document.getElementById("drink").value
    
    resultDrinkFood = document.getElementById("resultFoodDrink").innerHTML = parseFloat
    (((priceFood / personFood) + resultDrink).toFixed(2))

    if(resultDrink.value != 0) {
        return resultDrink
    } return 0

};

