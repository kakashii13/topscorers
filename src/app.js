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
      const playersName = players
        .map(({ player }) => player.name)
        .forEach((player) => {
          let liName = document.createElement("li");
          liName.textContent = player;
          liName.classList.add("li-padding");
          listName.appendChild(liName);
        });

      const playersGoals = players
        .map(({ statistics }) => statistics[0].goals.total)
        .forEach((goals) => {
          let liGoals = document.createElement("li");
          liGoals.textContent = goals;
          listGoals.appendChild(liGoals);
        });

      const club = players
        .map(({ statistics }) => statistics[0].team.name)
        .forEach((team) => {
          let liClub = document.createElement("li");
          liClub.textContent = team;
          listClub.appendChild(liClub);
        });
    })
  )
  .catch((err) => {
    console.log(err);
  });
