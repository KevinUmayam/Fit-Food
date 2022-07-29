var submit = document.querySelector('#submit');

//These will be parameter restrictions
var dietVegetarian;
var dietVegan;

var vegetarian = document.querySelector('#vegetarian');
function includeVegetarian() {
    if (vegetarian.checked === true) {
        dietVegetarian = '&health=vegetarian';
        console.log(dietVegetarian);
    } else {
        dietVegetarian = '';
    }
}

var vegan = document.querySelector('#vegan');
function includeVegan() {
    if (vegan.checked === true) {
        dietVegan = '&health=vegan';
        console.log(dietVegan);
    } else {
        dietVegan = '';
    }
}



//These will be allergy restrictions
var allergyGluten;
var allergyDairy;
var allergyPeanut;

//Actually low carb
var gluten = document.querySelector('#gluten');
function includeGluten() {
    if (gluten.checked === true) {
        allergyGluten = '&diet=low-carb';
        console.log(allergyGluten);
    } else {
        allergyGluten = '';
    }
}

//Actually low fat
var dairy = document.querySelector('#dairy');
function includeDairy() {
    if (dairy.checked === true) {
        allergyDairy = '&diet=low-fat';
        console.log(allergyDairy);
    } else {
        allergyDairy = '';
    }
}

//Actually high protein
var peanut = document.querySelector('#peanut');
function includePeanut() {
    if (peanut.checked === true) {
        allergyPeanut = '&diet=high-protein';
        console.log(allergyPeanut);
    } else {
        allergyPeanut = '';
    }
}

//Breakfast for &calories, q= parameter


var lowBreakfast;
var midBreakfast;
var highBreakfast;

var calorieBreakfast = document.querySelector('#caloriesBreakfast');
var calorieBreakfastVal = calorieBreakfast.value;

function breakfastcalorie() {
    var calorieBreakfastVal = calorieBreakfast.value;

    if (calorieBreakfastVal === 'Option 1') {
        lowBreakfast = '&calories=300-600';
        midBreakfast = '';
        highBreakfast = '';
        console.log(lowBreakfast);
    } else if (calorieBreakfastVal === 'Option 2') {
        midBreakfast = '&calories=601-900';
        lowBreakfast = '';
        highBreakfast = '';
        console.log(midBreakfast);
    } else if (calorieBreakfastVal === 'Option 3') {
        highBreakfast = '&calories=901-1200';
        lowBreakfast = '';
        midBreakfast = '';
        console.log(highBreakfast);
    }
}

var eggBreakfast;
var oatBreakfast;
var chickenBreakfast;

var baseBreakfastType = document.querySelector('#baseBreakfast');
var baseBreakfastVal = baseBreakfastType.value;
function breakfastBase() {
    var baseBreakfastVal = baseBreakfastType.value;

    if (baseBreakfastVal === 'Option 1') {
        eggBreakfast = 'q=eggs';
        oatBreakfast = '';
        chickenBreakfast = '';
        console.log(eggBreakfast);
    } else if (baseBreakfastVal === 'Option 2') {
        oatBreakfast = 'q=oats';
        eggBreakfast = '';
        chickenBreakfast = '';
        console.log(oatBreakfast);
    } else if (baseBreakfastVal === 'Option 3') {
        chickenBreakfast = 'q=chicken';
        eggBreakfast = '';
        oatBreakfast = '';
        console.log(chickenBreakfast);
    }
   
}

var baseBreakfast;
var includeBreakfast = document.querySelector('#includeBreakfast');
// includeBreakfast.addEventListener('click', breakfast);
function breakfast() {
    if (includeBreakfast.checked == true) {
        baseBreakfast = '&mealType=breakfast'
        console.log(baseBreakfast);
    } else {
        return;
    }
    breakfastBase();
    breakfastcalorie();
    includeVegetarian();
    includeVegan();
    includeGluten();
    includeDairy();
    includePeanut();
    var testingBreakfastUrl = mainPartUrl + eggBreakfast + oatBreakfast + chickenBreakfast + mainUrlKeys + baseBreakfast + dietVegetarian + dietVegan + allergyGluten + allergyPeanut + allergyDairy + lowBreakfast + midBreakfast + highBreakfast;
    console.log(testingBreakfastUrl);
    function getBreakfastApi() {
        fetch(testingBreakfastUrl)
            .then(function (response){
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                if (data.more === false) {
                    console.log("Your breakfast search has returned zero recipes, please modify your search criteria");
                    return;
                }
                var randomNumber = Math.floor(Math.random() * 10);
                console.log(data.hits[randomNumber].recipe.label);
                console.log(data.hits[randomNumber].recipe.shareAs);
            })
    }
    getBreakfastApi();
    
}

//Lunch &calories and q= parameters

var lowLunch;
var midLunch;
var highLunch;

var calorieLunch = document.querySelector('#caloriesLunch');
var calorieLunchVal = calorieLunch.value;

function lunchCalories() {
    var calorieLunchVal = calorieLunch.value;
    if (calorieLunchVal === 'Option 1') {
        lowLunch = '&calories=300-600';
        midLunch = '';
        highLunch = '';
        console.log(lowLunch);
    } else if (calorieLunchVal === 'Option 2') {
        midLunch = '&calories=601-900';
        lowLunch = '';
        highLunch = '';
        console.log(midLunch);
    } else if (calorieLunchVal === 'Option 3') {
        highLunch = '&calories=901-1200';
        lowLunch = '';
        midLunch = '';
        console.log(highLunch);
    }
}

var chickenLunch;
var beefLunch;
var beansLunch;

var baseLunchType = document.querySelector('#baseLunch');
var baseLunchVal = baseLunchType.value;
function lunchBase() {
    var baseLunchVal = baseLunchType.value;
    if (baseLunchVal === 'Option 1') {
        chickenLunch = 'q=chicken';
        beefLunch = '';
        beansLunch = '';
        console.log(chickenLunch);
    } else if (baseLunchVal === 'Option 2') {
        beefLunch = 'q=beef';
        chickenLunch = '';
        beansLunch = '';
        console.log(beefLunch);
    } else if (baseLunchVal === 'Option 3') {
        beansLunch = 'q=beans';
        chickenLunch = '';
        beefLunch = '';
        console.log(beansLunch);
    }
}

var baseLunch;
var includeLunch = document.querySelector('#includeLunch');
// includeLunch.addEventListener('click', lunch);
function lunch() {
    if (includeLunch.checked == true) {
        baseLunch = '&mealtype=lunch';
        console.log(baseLunch);
    } else {
        return;
    }
    lunchCalories();
    lunchBase();
    includeVegetarian();
    includeVegan();
    includeGluten();
    includeDairy();
    includePeanut();
    var testingLunchUrl = mainPartUrl + chickenLunch + beefLunch + beansLunch + mainUrlKeys + baseLunch + dietVegetarian + dietVegan + allergyGluten + allergyPeanut + allergyDairy + lowLunch + midLunch + highLunch;
    console.log(testingLunchUrl);
    function getLunchApi() {
        fetch(testingLunchUrl)
            .then(function (response){
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                if (data.more === false) {
                    console.log("Your lunch search has returned zero recipes, please modify your search criteria");
                    return;
                }
                var randomNumber = Math.floor(Math.random() * 10);
                console.log(data.hits[randomNumber].recipe.label);
                console.log(data.hits[randomNumber].recipe.shareAs);
            })
    }
    getLunchApi();
}


//Dinner &calories and q= parameters

var caloriesDinner = document.querySelector('#caloriesDinner');
var caloriesDinnerVal = caloriesDinner.value;
var lowDinner;
var midDinner;
var highDinner;

function dinnerCalories() {
    var caloriesDinnerVal = caloriesDinner.value;
    if (caloriesDinnerVal === 'Option 1') {
        lowDinner = '&calories=300-600';
        midDinner = '';
        highDinner = '';
        console.log(lowDinner);
    } else if (caloriesDinnerVal === 'Option 2') {
        midDinner = '&calories=601-900';
        lowDinner = '';
        highDinner = '';
        console.log(midDinner);
    } else if (caloriesDinnerVal === 'Option 3') {
        highDinner = '&calories=901-1200';
        lowDinner = '';
        midDinner = '';
        console.log(highDinner);
    }
}

var chickenDinner;
var beefDinner;
var beansDinner;
var baseDinnerType = document.querySelector('#baseDinner');
var baseDinnerVal = baseDinnerType.value;
function dinnerBase() {
    var baseDinnerVal = baseDinnerType.value;
    if (baseDinnerVal === 'Option 1') {
        chickenDinner = 'q=chicken';
        beefDinner = '';
        beansDinner = '';
        console.log(chickenDinner);
    } else if (baseDinnerVal === 'Option 2') {
        beefDinner = 'q=beef';
        chickenDinner = '';
        beansDinner = '';
        console.log(beefDinner);
    } else if (baseDinnerVal === 'Option 3') {
        beansDinner = 'q=beans';
        chickenDinner = '';
        beefDinner = '';
        console.log(beansDinner);
    }
}

var baseDinner;
var includeDinner = document.querySelector('#includeDinner');
// includeDinner.addEventListener('click', dinner);
function dinner() {
    if (includeDinner.checked == true) {
        baseDinner = '&mealtype=dinner';
        console.log(baseDinner);
    } else {
        return;
    }
    dinnerCalories();
    dinnerBase();
    includeVegetarian();
    includeVegan();
    includeGluten();
    includeDairy();
    includePeanut();

    var testingDinnerUrl = mainPartUrl + chickenDinner + beefDinner + beansDinner + mainUrlKeys + baseDinner + dietVegetarian + dietVegan + allergyGluten + allergyPeanut + allergyDairy + lowDinner + midDinner + highDinner;
    console.log(testingDinnerUrl);
    function getDinnerApi() {
        fetch(testingDinnerUrl)
            .then(function (response){
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                if (data.more === false) {
                    console.log("Your dinner search has returned zero recipes, please modify your search criteria");
                    return;
                }
                var randomNumber = Math.floor(Math.random() * 10);
                var recipeName = data.hits[randomNumber].recipe.label;
                console.log(recipeName);
                var recipeUrl = data.hits[randomNumber].recipe.shareAs;
                console.log(recipeUrl);

            })
    }
    getDinnerApi();
}














var testButton = document.querySelector('#testButton');
submit.addEventListener('click', function (test) {
 
    test.preventDefault();
    breakfast();
    lunch();
    dinner();
    includeGluten();
    includeDairy();
    includePeanut();
    includeVegetarian();
    includeVegan();
    
});

var appid = '&app_id=e6094091';
var appkey ='&app_key=998bd7f197846f5a6ef876a82bf64a36';
var edamamurl = 'https://api.edamam.com/search?q=oats&app_id=e6094091&app_key=9885703d5ed639adced50ead66ba1a1c&mealtype=lunch&calories=500-700';




var mainPartUrl = 'https://api.edamam.com/search?';
var mainUrlKeys = '&app_id=e6094091&app_key=9885703d5ed639adced50ead66ba1a1c';
var testingBreakfastUrl = mainPartUrl + eggBreakfast + mainUrlKeys + baseBreakfast + lowBreakfast;



function getApi() {
    fetch(testingBreakfastUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

