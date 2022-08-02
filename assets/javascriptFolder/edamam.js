var submit = document.querySelector('#submit');


//Modal
var spanModal = document.querySelector('.closeModal');
var modal = document.querySelector('.modal');
var runModal;
var lunchModal;
var dinnerModal;

function showModal() {
    modal.setAttribute('style', 'display: block;');
    runModal = false;
    // var h1 = document.createElement('h1');
    // var lastOption = document.getElementsByTagName('h1')[2];
    // h1.textContent = 'hello';
    // lastOption.appendChild(h1);
    // var modalTextBreakfast = document.createElement('h1');
    // var position = document.querySelector('.modalPlaceholder');
    // modalTextBreakfast.textContent = 'Your breakfast search has returned zero recipes, please modify your search criteria.';
    // position.appendChild(modalTextBreakfast);
}

function closeModal() {
    modal.setAttribute('style', 'display: none');
    window.location.replace('./index.html');
}

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

var breakfastQueriesName1;
var breakfastQueriesName2;
var breakfastQueriesName3;
var breakfastQueriesName4;
var breakfastQueriesName5;
var breakfastQueriesName6;
var breakfastQueriesName7;
var breakfastQueriesUrl1;
var breakfastQueriesUrl2;
var breakfastQueriesUrl3;
var breakfastQueriesUrl4;
var breakfastQueriesUrl5;
var breakfastQueriesUrl6;
var breakfastQueriesUrl7;
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
        return fetch(testingBreakfastUrl)
            .then(function (response){
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                if (data.more === false) {
                    breakfastModal = 'goose';
                    console.log("Your breakfast search has returned zero recipes, please modify your search criteria");
                    showModal();
                    var modalBreakfastText = document.querySelector('#modalBreakfast');
                    modalBreakfastText.setAttribute('style', 'display: block;');
                    return;
                }
                // var randomNumber = Math.floor(Math.random() * 10);
                for (i = 0; i < 7; i++) {
                    breakfastQueriesName1 = '&breakfastName=' + data.hits[0].recipe.label;
                    breakfastQueriesName2 = '&breakfastName=' + data.hits[1].recipe.label;
                    breakfastQueriesName3 = '&breakfastName=' + data.hits[2].recipe.label;
                    breakfastQueriesName4 = '&breakfastName=' + data.hits[3].recipe.label;
                    breakfastQueriesName5 = '&breakfastName=' + data.hits[4].recipe.label;
                    breakfastQueriesName6 = '&breakfastName=' + data.hits[5].recipe.label;
                    breakfastQueriesName7 = '&breakfastName=' + data.hits[6].recipe.label;

                 
                    breakfastQueriesUrl1 = '&breakfastUrl=' + data.hits[0].recipe.shareAs;
                    breakfastQueriesUrl2 = '&breakfastUrl=' + data.hits[1].recipe.shareAs;
                    breakfastQueriesUrl3 = '&breakfastUrl=' + data.hits[2].recipe.shareAs;
                    breakfastQueriesUrl4 = '&breakfastUrl=' + data.hits[3].recipe.shareAs;
                    breakfastQueriesUrl5 = '&breakfastUrl=' + data.hits[4].recipe.shareAs;
                    breakfastQueriesUrl6 = '&breakfastUrl=' + data.hits[5].recipe.shareAs;
                    breakfastQueriesUrl7 = '&breakfastUrl=' + data.hits[6].recipe.shareAs;
                }
                console.log(breakfastQueriesName1 + breakfastQueriesUrl1);

                // console.log(data.hits[randomNumber].recipe.label);
                // console.log(data.hits[randomNumber].recipe.shareAs);
                // var breakfast1 = document.querySelector('#b-ttl-one');
                // breakfast1.textContent = data.hits[randomNumber].recipe.label;
                // var breakfast1recipe = document.querySelector('#b-btn-one');
                // var breakfastButton = document.createElement('button');
                // var aBreakfast = document.createElement('a');
                // aBreakfast.href = data.hits[randomNumber].recipe.shareAs;
                // breakfastButton.appendChild(aBreakfast);
                // breakfast1recipe.appendChild(breakfastButton);
            })
    }
    return getBreakfastApi();
    
}

//Lunch &calories and q= parameters

var lunchQueriesNames1;
var lunchQueriesNames2;
var lunchQueriesNames3;
var lunchQueriesNames4;
var lunchQueriesNames5;
var lunchQueriesNames6;
var lunchQueriesNames7;
var lunchQueriesUrl1;
var lunchQueriesUrl2;
var lunchQueriesUrl3;
var lunchQueriesUrl4;
var lunchQueriesUrl5;
var lunchQueriesUrl6;
var lunchQueriesUrl7;


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
        return fetch(testingLunchUrl)
            .then(function (response){
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                if (data.more === false) {
                    console.log("Your lunch search has returned zero recipes, please modify your search criteria");
                    showModal();
                    var modalLunchText = document.querySelector('#modalLunch');
                    modalLunchText.setAttribute('style', 'display: block;');
                    return;
                }
                // var randomNumber = Math.floor(Math.random() * 10);
                for (i = 0; i < 7; i++) {
                    lunchQueriesNames1 = '&lunchName=' + data.hits[0].recipe.label;
                    lunchQueriesNames2 = '&lunchName=' + data.hits[1].recipe.label;
                    lunchQueriesNames3 = '&lunchName=' + data.hits[2].recipe.label;
                    lunchQueriesNames4 = '&lunchName=' + data.hits[3].recipe.label;
                    lunchQueriesNames5 = '&lunchName=' + data.hits[4].recipe.label;
                    lunchQueriesNames6 = '&lunchName=' + data.hits[5].recipe.label;
                    lunchQueriesNames7 = '&lunchName=' + data.hits[6].recipe.label;

                 
                    lunchQueriesUrl1 = '&lunchUrl=' + data.hits[0].recipe.shareAs;
                    lunchQueriesUrl2 = '&lunchUrl=' + data.hits[1].recipe.shareAs;
                    lunchQueriesUrl3 = '&lunchUrl=' + data.hits[2].recipe.shareAs;
                    lunchQueriesUrl4 = '&lunchUrl=' + data.hits[3].recipe.shareAs;
                    lunchQueriesUrl5 = '&lunchUrl=' + data.hits[4].recipe.shareAs;
                    lunchQueriesUrl6 = '&lunchUrl=' + data.hits[5].recipe.shareAs;
                    lunchQueriesUrl7 = '&lunchUrl=' + data.hits[6].recipe.shareAs;
                }
                // console.log(data.hits[randomNumber].recipe.label);
                // console.log(data.hits[randomNumber].recipe.shareAs);
            })
    }
    return getLunchApi();
}


//Dinner &calories and q= parameters

var dinnerQueriesNames1;
var dinnerQueriesNames2;
var dinnerQueriesNames3;
var dinnerQueriesNames4;
var dinnerQueriesNames5;
var dinnerQueriesNames6;
var dinnerQueriesNames7;
var dinnerQueriesUrl1;
var dinnerQueriesUrl2;
var dinnerQueriesUrl3;
var dinnerQueriesUrl4;
var dinnerQueriesUrl5;
var dinnerQueriesUrl6;
var dinnerQueriesUrl7;

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
        return fetch(testingDinnerUrl)
            .then(function (response){
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                if (data.more === false) {
                    console.log("Your dinner search has returned zero recipes, please modify your search criteria");
                    showModal();
                    var modalDinnerText = document.querySelector('#modalDinner');
                    modalDinnerText.setAttribute('style', 'display: block;');
                    return;
                }
                // var randomNumber = Math.floor(Math.random() * 10);
                // var recipeName = data.hits[randomNumber].recipe.label;
                // console.log(recipeName);
                // var recipeUrl = data.hits[randomNumber].recipe.shareAs;
                // console.log(recipeUrl);
                for (i = 0; i < 7; i++) {
                    dinnerQueriesNames1 = '&dinnerName=' + data.hits[0].recipe.label;
                    dinnerQueriesNames2 = '&dinnerName=' + data.hits[1].recipe.label;
                    dinnerQueriesNames3 = '&dinnerName=' + data.hits[2].recipe.label;
                    dinnerQueriesNames4 = '&dinnerName=' + data.hits[3].recipe.label;
                    dinnerQueriesNames5 = '&dinnerName=' + data.hits[4].recipe.label;
                    dinnerQueriesNames6 = '&dinnerName=' + data.hits[5].recipe.label;
                    dinnerQueriesNames7 = '&dinnerName=' + data.hits[6].recipe.label;

                
                    dinnerQueriesUrl1 = '&dinnerUrl=' + data.hits[0].recipe.shareAs;
                    dinnerQueriesUrl2 = '&dinnerUrl=' + data.hits[1].recipe.shareAs;
                    dinnerQueriesUrl3 = '&dinnerUrl=' + data.hits[2].recipe.shareAs;
                    dinnerQueriesUrl4 = '&dinnerUrl=' + data.hits[3].recipe.shareAs;
                    dinnerQueriesUrl5 = '&dinnerUrl=' + data.hits[4].recipe.shareAs;
                    dinnerQueriesUrl6 = '&dinnerUrl=' + data.hits[5].recipe.shareAs;
                    dinnerQueriesUrl7 = '&dinnerUrl=' + data.hits[6].recipe.shareAs;
                }
                
            })
    }
    return getDinnerApi();
}



// On submit button


var submit = document.querySelector('#submit');
submit.addEventListener('click', function (test) {
 
    test.preventDefault();
    Promise.all([breakfast(), lunch(), dinner()]).then(()=>{
        if (runModal === false) {
            return;
        }
        window.location.href = './htmlFolder/canlendar.html?' + breakfastQueriesName1 + breakfastQueriesUrl1 + breakfastQueriesName2 + breakfastQueriesUrl2 + breakfastQueriesName3 + breakfastQueriesUrl3 + breakfastQueriesName4 + breakfastQueriesUrl4 + breakfastQueriesName5 + breakfastQueriesUrl5 + breakfastQueriesName6 + breakfastQueriesUrl6 + breakfastQueriesName7 + breakfastQueriesUrl7 + lunchQueriesNames1 + lunchQueriesUrl1 + lunchQueriesNames2 + lunchQueriesUrl2 + lunchQueriesNames3 + lunchQueriesUrl3 + lunchQueriesNames4 + lunchQueriesUrl4 + lunchQueriesNames5 + lunchQueriesUrl5 + lunchQueriesNames6 + lunchQueriesUrl6 + lunchQueriesNames7 + lunchQueriesUrl7 + dinnerQueriesNames1 + dinnerQueriesUrl1 + dinnerQueriesNames2 + dinnerQueriesUrl2 + dinnerQueriesNames3 + dinnerQueriesUrl3 + dinnerQueriesNames4 + dinnerQueriesUrl4 + dinnerQueriesNames5 + dinnerQueriesUrl5 + dinnerQueriesNames6 + dinnerQueriesUrl6 + dinnerQueriesNames7 + dinnerQueriesUrl7;
    });
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

console.log(window.location.href);

