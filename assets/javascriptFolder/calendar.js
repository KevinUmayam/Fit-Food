var url = new URL(window.location);
var params = new URLSearchParams(url.search);
var breakfastName = (params.getAll('breakfastName'));
var breakfastUrl = (params.getAll('breakfastUrl'));
var lunchName = (params.getAll('lunchName'));
var lunchUrl = (params.getAll('lunchUrl'));
var dinnerName = (params.getAll('dinnerName'));
var dinnerUrl = (params.getAll('dinnerUrl'));

// console.log(goose);
// console.log(fox);

// console.log(goose.length);
// console.log(fox.length);
console.log(breakfastName.length);
console.log(lunchName.length);
console.log(dinnerName.length);

meal(breakfastName, breakfastUrl, 'b') //breakfast();
meal(lunchName, lunchUrl, 'l') //lunch();
meal(dinnerName, dinnerUrl, 'd')// dinner();

function meal(name, url, letter) {
    if (name.length === 0) { return; } 
    for (var i = 0; i < 7; i++) {
        var meal = document.getElementsByClassName(letter + '-ttl');
        meal[i].textContent = name[i];
        var recipe = document.getElementsByClassName(letter + '-btn');
        var button = document.createElement('button');
        button.textContent = 'Click for recipe';
        var aMeal = document.createElement('a');
        aMeal.href = url[i];
        aMeal.appendChild(button);
        recipe[i].appendChild(aMeal);
    }
}

