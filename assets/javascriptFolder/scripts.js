const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f113db0565msh6cd5daf8f1b0c64p18f66fjsn72f204a5cdfc",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
//fetch request for excersize db
fetch("https://exercisedb.p.rapidapi.com/exercises", options)
  .then((response) => response.json())
  .then((infoArray) => {
    console.log(infoArray);
    //for loop to target all the things we need for the drop menu

    for (let i = 0; i < infoArray.length; i++) {
      //   let bodypartEl = infoArray[i].bodyPart;
      //   console.log(bodypartEl);
      // let equipmentEl = infoArray[i].equipment;
      // console.log(equipmentEl);
    }
  });
