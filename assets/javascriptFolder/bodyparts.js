var muscle = "biceps";
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
