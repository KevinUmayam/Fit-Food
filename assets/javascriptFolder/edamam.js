var appid = '&app_id=e6094091';
var appkey ='&app_key=998bd7f197846f5a6ef876a82bf64a36';
var edamamurl = 'https://api.edamam.com/search?q=oats&app_id=e6094091&app_key=9885703d5ed639adced50ead66ba1a1c&mealtype=lunch&calories=500-700';

var baseUrl = 'https://api.edamam.com/search?';
var urlKeys = '&app_id=e6094091&app_key=9885703d5ed639adced50ead66ba1a1c';

var submit = document.querySelector('#submit');

//This will be the q= parameter
var baseBreakfast;
var baseLunch;
var baseDinner;

var includeBreakfast = document.querySelector('#includeBreakfast');
// includeBreakfast.addEventListener('click', breakfast);
function breakfast() {
    if (includeBreakfast.checked == true) {
        baseBreakfast = '&mealType=breakfast'
        console.log(baseBreakfast);
    }
}

var includeLunch = document.querySelector('#includeLunch');
// includeLunch.addEventListener('click', lunch);
function lunch() {
    if (includeLunch.checked == true) {
        baseLunch = '&mealType=lunch';
        console.log(baseLunch);
    }
}

var includeDinner = document.querySelector('#includeDinner');
// includeDinner.addEventListener('click', dinner);
function dinner() {
    if (includeDinner.checked == true) {
        baseDinner = '&mealType=dinner';
        console.log(baseDinner);

    }
}


var lowBreakfast;
var midBreakfast;
var highBreakfast;




var calorieBreakfast = document.querySelector('#caloriesBreakfast');
var calorieBreakfastVal = calorieBreakfast.value;

function breakfastcalorie() {
    var calorieBreakfastVal = calorieBreakfast.value;

    if (calorieBreakfastVal === 'Option 1') {
        lowBreakfast = '&calories=300-600';
        console.log(lowBreakfast);
    } else if (calorieBreakfastVal === 'Option 2') {
        midBreakfast = '&calories=601-900';
        console.log(midBreakfast);
    } else if (calorieBreakfastVal === 'Option 3') {
        highBreakfast = '&calories=901-1200';
        console.log(highBreakfast);
    }
}

var eggBreakfast;
var oatBreakfast;
var chickenBreakfast;

var baseBreakfast = document.querySelector('#baseBreakfast');
var baseBreakfastVal = baseBreakfast.value;
function breakfastBase() {
    var baseBreakfastVal = baseBreakfast.value;
    if (baseBreakfastVal === 'Option 1') {
        eggBreakfast = 'q=eggs';
        console.log(eggBreakfast);
    } else if (baseBreakfastVal === 'Option 2') {
        oatBreakfast = 'q=oats';
        console.log(oatBreakfast);
    } else if (baseBreakfastVal === 'Option 3') {
        chickenBreakfast = 'q=chicken';
        console.log(chickenBreakfast);
    }
}

var lowLunch;
var midLunch;
var highLunch;

var calorieLunch = document.querySelector('#caloriesLunch');
var calorieLunchVal = calorieLunch.value;

function lunchCalories() {
    var calorieLunchVal = calorieLunch.value;
    if (calorieLunchVal === 'Option 1') {
        lowLunch = '&calories=300-600';
        console.log(lowLunch);
    } else if (calorieLunchVal === 'Option 2') {
        midLunch = '&calories=601-900';
        console.log(midLunch);
    } else if (calorieLunchVal === 'Option 3') {
        highLunch = '&calories=901-1200';
        console.log(highLunch);
    }
}

var chickenLunch;
var beefLunch;
var beansLunch;

var baseLunch = document.querySelector('#baseLunch');
var baseLunchVal = baseLunch.value;
function lunchBase() {
    var baseLunchVal = baseLunch.value;
    if (baseLunchVal === 'Option 1') {
        chickenLunch = 'q=chicken';
        console.log(chickenLunch);
    } else if (baseLunchVal === 'Option 2') {
        beefLunch = 'q=beef';
        console.log(beefLunch);
    } else if (baseLunchVal === 'Option 3') {
        beansLunch = 'q=beans';
        console.log(beansLunch);
    }
}

var caloriesDinner = document.querySelector('#caloriesDinner');
var caloriesDinnerVal = caloriesDinner.value;
var lowDinner;
var midDinner;
var highDinner;

function dinnerCalories() {
    var caloriesDinnerVal = caloriesDinner.value;
    if (caloriesDinnerVal === 'Option 1') {
        lowDinner = '&calories=300-600';
        console.log(lowDinner);
    } else if (caloriesDinnerVal === 'Option 2') {
        midDinner = '&calories=601-900';
        console.log(midDinner);
    } else if (caloriesDinnerVal === 'Option 3') {
        highDinner = '&calories=901-1200';
        console.log(highDinner);
    }
}

var chickenDinner;
var beefDinner;
var beansDinner;
var baseDinner = document.querySelector('#baseDinner');
var baseDinnerVal = baseDinner.value;
function dinnerBase() {
    var baseDinnerVal = baseDinner.value;
    if (baseDinnerVal === 'Option 1') {
        chickenDinner = 'q=chicken';
        console.log(chickenDinner);
    } else if (baseDinnerVal === 'Option 2') {
        beefDinner = 'q=beef';
        console.log(beefDinner);
    } else if (baseDinnerVal === 'Option 3') {
        beansDinner = 'q=beans';
        console.log(beansDinner);
    }
}


//These will be parameter restrictions
var dietVegetarian;
var dietVegan;

var vegetarian = document.querySelector('#vegetarian');
function includeVegetarian() {
    if (vegetarian.checked === true) {
        dietVegetarian = '&health=vegetarian';
        console.log(dietVegetarian);
    }
}

var vegan = document.querySelector('#vegan');
function includeVegan() {
    if (vegan.checked === true) {
        dietVegan = '&health=vegan';
        console.log(dietVegan);
    }
}



//These will be allergy restrictions
var allergyGluten;
var allergyDairy;
var allergyPeanut;

var gluten = document.querySelector('#gluten');
function includeGluten() {
    if (gluten.checked === true) {
        allergyGluten = '&health=gluten';
        console.log(allergyGluten);
    }
}

var dairy = document.querySelector('#dairy');
function includeDairy() {
    if (dairy.checked === true) {
        allergyDairy = '&health=dairy';
        console.log(allergyDairy);
    }
}
var peanut = document.querySelector('#peanut');
function includePeanut() {
    if (peanut.checked === true) {
        allergyPeanut = '&health=peanuts';
        console.log(allergyPeanut);
    }
}







function getApi() {
    fetch(edamamurl)
        .then(function (response){
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

getApi();

var testButton = document.querySelector('#testButton');
testButton.addEventListener('click', test);
// submit.addEventListener('click', test);
function test() {
    breakfast();
    lunch();
    dinner();
    breakfastcalorie();
    breakfastBase();
    lunchBase();
    lunchCalories();
    dinnerCalories();
    dinnerBase();
    includeGluten();
    includeDairy();
    includePeanut();
    includeVegetarian();
    includeVegan();

}