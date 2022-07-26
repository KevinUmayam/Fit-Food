const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f113db0565msh6cd5daf8f1b0c64p18f66fjsn72f204a5cdfc",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

fetch("https://exercisedb.p.rapidapi.com/exercises", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
