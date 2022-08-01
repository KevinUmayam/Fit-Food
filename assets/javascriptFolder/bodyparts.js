//dropdown options
var dropdownEl = document.querySelector("#muscleTarget");
//submit button
var submitBtn = document.querySelector("#exercise-submit");
var muscle = "";
//element to which we will append created elements
var intructionContainerEL = document.querySelector("#hide-stuff");
// function to know which body part to show
function muscleSlection() {
  if (dropdownEl.value === "biceps") {
    muscle = "biceps";
    console.log("biceps");
  } else if (dropdownEl.value === "triceps") {
    muscle = "triceps";
  } else if (dropdownEl.value === "forearms") {
    muscle = "forearms";
  } else if (dropdownEl.value === "calves") {
    muscle = "calves";
  } else if (dropdownEl.value === "quadriceps") {
    muscle = "quadriceps";
  } else if (dropdownEl.value === "abdominals") {
    muscle = "abdominals";
  } else if (dropdownEl.value === "chest") {
    muscle = "chest";
  } else if (dropdownEl.value === "lower_back") {
    muscle = "lower_back";
  } else if (dropdownEl.value === "middle_back") {
    muscle = "middle_back";
  } else if (dropdownEl.value === "lats") {
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

      //for look to create and display instruction boxes.
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
        nameEl.innerText = workoutName;
        //create h2 with instructions
        var instructionsEl = document.createElement("h2");
        instructionsEl.setAttribute("class", "instructionStyling");
        instructionsEl.innerText = "Instructions: " + instructionsText;
        //append created elements to container
        workoutDiv.appendChild(nameEl);
        workoutDiv.appendChild(instructionsEl);
        intructionContainerEL.appendChild(workoutDiv);
      }
    });
}

//click event excecutes functions
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(dropdownEl.value);
  console.log("hello");
  muscleSlection();
  getApi();
});
