function premier(){
  fetch(
    "https://v3.football.api-sports.io/players/topscorers?season=2021&league=39",
  {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "01f1ae44cfd82962ecc9c156bd0f9f9c",
    },
  }
  )
  .then((result) =>
  result.json().then((data) => {
    const players = data.response;
    console.log(players);
    
    const listClub = document.getElementById("list-club");
    const listName = document.getElementById("list-name");
    const listGoals = document.getElementById("list-goals");

    let liName = `<p>Player</p>`;
    const playersName = players
    .map(({ player }) => player.name).slice(0,5).forEach((player) => {
      liName += `
        <li>${player}</li>
      `
    });
    listName.innerHTML = liName;
    
    let liGoals = `<p>Goals</p>`;
    const playersGoals = players
    .map(({ statistics }) => statistics[0].goals.total).slice(0,5)
    .forEach((goals) => {
      liGoals += `
      <li>${goals}</li>
      `
    });
    listGoals.innerHTML = liGoals;
    
    let liClub = `<p>Club</p>`;
    const club = players
    .map(({ statistics }) => statistics[0].team.name).slice(0,5)
    .forEach((team) => {
          // let liClub = document.createElement("li");
          // liClub.textContent = team;
          liClub += `
          <li>${team}</li>
          `;
        });
        listClub.innerHTML = liClub;
      })
      )
      .catch((err) => {
        console.log(err);
      });
    }
function spain(){
   fetch(
        "https://v3.football.api-sports.io/players/topscorers?season=2021&league=140",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": "01f1ae44cfd82962ecc9c156bd0f9f9c",
        },
      }
      )
      .then((result) =>
      result.json().then((data) => {
        const players = data.response;
        console.log(players);
        
        const listClub = document.getElementById("list-club");
        const listName = document.getElementById("list-name");
        const listGoals = document.getElementById("list-goals");
        let liName = `<p>Player</p>`;
    const playersName = players
    .map(({ player }) => player.name).slice(0,5).forEach((player) => {
      liName += `
        <li>${player}</li>
      `
    });
    listName.innerHTML = liName;
    
    let liGoals = `<p>Goals</p>`;
    const playersGoals = players
    .map(({ statistics }) => statistics[0].goals.total).slice(0,5)
    .forEach((goals) => {
      liGoals += `
      <li>${goals}</li>
      `
    });
    listGoals.innerHTML = liGoals;
        
        let liClub = `<p>Club</p>`;
        const club = players
        .map(({ statistics }) => statistics[0].team.name).slice(0,5)
        .forEach((team) => {
              // let liClub = document.createElement("li");
              // liClub.textContent = team;
              liClub += `
              <li>${team}</li>
              `;
            });
            listClub.innerHTML = liClub;
          })
          )
          .catch((err) => {
            console.log(err);
          });
        } 

function italy(){
  fetch(
    "https://v3.football.api-sports.io/players/topscorers?season=2021&league=135",
  {
    method: "GET",
    headers: {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": "01f1ae44cfd82962ecc9c156bd0f9f9c",
   },
 }
 )
 .then((result) =>
 result.json().then((data) => {
   const players = data.response;
   console.log(players);
   
   const listClub = document.getElementById("list-club");
   const listName = document.getElementById("list-name");
   const listGoals = document.getElementById("list-goals");

   let liName = `<p>Player</p>`;
    const playersName = players
    .map(({ player }) => player.name).slice(0,5)
    .forEach((player) => {
      liName += `
        <li>${player}</li>
      `
    });
    listName.innerHTML = liName;
    
    let liGoals = `<p>Goals</p>`;
    const playersGoals = players
    .map(({ statistics }) => statistics[0].goals.total).slice(0,5)
    .forEach((goals) => {
      liGoals += `
      <li>${goals}</li>
      `
    });
    listGoals.innerHTML = liGoals;
   
   let liClub = `<p>Club</p>`;
   const club = players
   .map(({ statistics }) => statistics[0].team.name).slice(0,5)
   .forEach((team) => {
         // let liClub = document.createElement("li");
         // liClub.textContent = team;
         liClub += `
         <li>${team}</li>
         `;
       });
       listClub.innerHTML = liClub;
     })
     )
     .catch((err) => {
       console.log(err);
     });
   }        
      
const select = document.getElementById("select");
select.addEventListener("click", () => {
  if(select.value === "england") premier();
  if(select.value === "spain") spain();
  if(select.value === "italy") italy();
})
      