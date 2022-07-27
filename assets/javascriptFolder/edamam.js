console.log('hello');
var appid = '&app_id=e6094091';
var appkey ='&app_key=998bd7f197846f5a6ef876a82bf64a36';
var edamamurl = 'https://api.edamam.com/search?q=oats&app_id=e6094091&app_key=9885703d5ed639adced50ead66ba1a1c&mealtype=lunch&calories=500-700';
var searchid = 'chicken';

var q = '';
var totalurl = edamamurl + searchid + appid + appkey;
console.log(totalurl);

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