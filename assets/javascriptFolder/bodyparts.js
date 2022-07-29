//dropdown options
var dropdownEl = document.querySelector("#muscleTarget");

var submitBtn = document.querySelector("#exercise-submit");
var muscle = "";

function muscleSlection() {
  if (dropdownEl.value === "biceps") {
    muscle = "biceps";
    console.log("biceps");
  } else if (dropdownEl.value === "triceps") {
    muscle = "triceps";
  }
  // else if (dropdownEl === "forearms") {
  // } else if (dropdownEl === "calves") {
  // } else if (dropdownEl === "quadriceps") {
  // } else if (dropdownEl === "abdominals") {
  // } else if (dropdownEl === "chest") {
  // } else if (dropdownEl === "lower_back") {
  // } else if (dropdownEl === "middle_back") {
  // } else if (dropdownEl === "lats") {
  // }
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(dropdownEl.value);
  console.log("hello");
  muscleSlection();
  getApi();
});

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
    });
}
