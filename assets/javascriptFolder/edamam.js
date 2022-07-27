var appid = '&app_id=e6094091';
var appkey ='&app_key=998bd7f197846f5a6ef876a82bf64a36';
var edamamurl = 'https://api.edamam.com/search?q=oats&app_id=e6094091&app_key=9885703d5ed639adced50ead66ba1a1c&mealtype=lunch&calories=500-700';

var baseUrl = 'https://api.edamam.com/search?';
var urlKeys = '&app_id=e6094091&app_key=9885703d5ed639adced50ead66ba1a1c';

//This will be the q= parameter
var baseBreakfast;
var baseLunch;
var baseDinner;

//These will be checkboxes parameters
var calorieBreakfast;
var calorieLunch;
var calorieDinner;

//These will be parameter restrictions
var vegetarian;
var vegan;

//These will be allergy restrictions
var gluten;
var dairy;
var peanut;








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