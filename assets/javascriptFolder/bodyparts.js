//dropdown options for each submit button
var dropdownEl1 = document.querySelector("#muscleTarget1");
var dropdownEl2 = document.querySelector("#muscleTarget2");
var dropdownEl3 = document.querySelector("#muscleTarget3");
var dropdownEl4 = document.querySelector("#muscleTarget4");
var dropdownEl5 = document.querySelector("#muscleTarget5");
var dropdownEl6 = document.querySelector("#muscleTarget6");
var dropdownEl7 = document.querySelector("#muscleTarget7");
//submit button

var submitBtn1 = document.querySelector("#exercise-submit1");
var submitBtn2 = document.querySelector("#exercise-submit2");
var submitBtn3 = document.querySelector("#exercise-submit3");
var submitBtn4 = document.querySelector("#exercise-submit4");
var submitBtn5 = document.querySelector("#exercise-submit5");
var submitBtn6 = document.querySelector("#exercise-submit6");
var submitBtn7 = document.querySelector("#exercise-submit7");

var muscle = "";

//element to which we will append created elements
var intructionContainerEL = document.querySelector("#hide-stuff");


// function to know which body part to fetch
function muscleSelection(target) {
  if (target.value === "biceps") {

    muscle = "biceps";
    console.log("biceps");
  } else if (target.value === "triceps") {
    muscle = "triceps";
  } else if (target.value === "forearms") {
    muscle = "forearms";
  } else if (target.value === "calves") {
    muscle = "calves";
  } else if (target.value === "quadriceps") {
    muscle = "quadriceps";
  } else if (target.value === "abdominals") {
    muscle = "abdominals";
  } else if (target.value === "chest") {
    muscle = "chest";
  } else if (target.value === "lower_back") {
    muscle = "lower_back";
  } else if (target.value === "middle_back") {
    muscle = "middle_back";
  } else if (target.value === "lats") {
    muscle = "lats";
  }
}
//api get function
function getApi() {
  var apiKey = "qjqjfEYrc2DD255MR7tPAg==T4xv9JXUfHFTmms1";
  fetch("https://api.api-ninjas.com/v1/exercises?muscle=" + muscle, {
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": apiKey,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      var numberList = [1, 2, 3, 4, 5, 6, 7];
      //to create and display instruction boxes.
      for (let i = 0; i < data.length; i++) {
        //name variable
        var workoutName = data[i].name;
        //instruction var
        var instructionsText = data[i].instructions;

        //create div and add class to it
        var workoutDiv = document.createElement("div");
        workoutDiv.setAttribute("class", "lowc2");
        // create the H1 elements that will contain the name titles
        var nameEl = document.createElement("h1");
        nameEl.setAttribute("class", "nameStyling");
        nameEl.innerText = numberList[i] + ". " + workoutName;
        //create h2 with instructions
        var instructionsEl = document.createElement("h2");
        instructionsEl.setAttribute("class", "instructionStyling");
        instructionsEl.innerText = "Instructions: " + instructionsText;
        //append created elements to container
        workoutDiv.appendChild(nameEl);
        workoutDiv.appendChild(instructionsEl);
        intructionContainerEL.appendChild(workoutDiv);
      }
      localStorage.getItem(muscle);
      //setting data to local storage
      localStorage.setItem(muscle, JSON.stringify(data));
    });
}
//click event excecutes functions

submitBtn1.addEventListener("click", function (e) {
  e.preventDefault();

  console.log("hello");
  muscleSelection(dropdownEl1);

  getApi();
});

submitBtn2.addEventListener("click", function (e) {
  e.preventDefault();

  console.log("hello");
  muscleSelection(dropdownEl2);

  getApi();
});

submitBtn3.addEventListener("click", function (e) {
  e.preventDefault();

  console.log("hello");
  muscleSelection(dropdownEl3);

  getApi();
});

submitBtn4.addEventListener("click", function (e) {
  e.preventDefault();

  console.log("hello");
  muscleSelection(dropdownEl4);

  getApi();
});

submitBtn5.addEventListener("click", function (e) {
  e.preventDefault();

  console.log("hello");
  muscleSelection(dropdownEl5);

  getApi();
});

submitBtn6.addEventListener("click", function (e) {
  e.preventDefault();

  console.log("hello");
  muscleSelection(dropdownEl6);

  getApi();
});

submitBtn7.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("hello");
  muscleSelection(dropdownEl7);
  getApi();
});
