fetch("https://v3.football.api-sports.io/players/topscorers?season=2021&league=39", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": "01f1ae44cfd82962ecc9c156bd0f9f9c",
  },
})
  .then((result) =>
    result.json().then((data) => {
      const players = data.response;
      console.log(players)

      const listPhoto = document.getElementById("list-photo");
      const listName = document.getElementById("list-name");
      const listGoals = document.getElementById("list-goals");
      const titleLeague = document.getElementById("title-league");
      const playersName = players.map(({player}) => player.name).forEach(player => {
        let liName = document.createElement("li");
        liName.textContent = player;
        liName.classList.add("li-padding")
        listName.appendChild(liName);
      });

      const playersGoals = players.map(({statistics}) => statistics[0].goals.total).forEach(goals => {
          let liGoals = document.createElement("li");
          liGoals.textContent = goals;
          liGoals.classList.add("li-padding")
          listGoals.appendChild(liGoals);
      })

      const playerPhoto = players.map(({player}) => player.photo).forEach(photo => {
          let photoPlayer = document.createElement("img");
          photoPlayer.setAttribute("src", photo);
          let liPhoto = document.createElement("li");
          liPhoto.appendChild(photoPlayer);
          photoPlayer.classList.add("photo-player")
          listPhoto.appendChild(liPhoto);
      })

      const nameLeague = players[0].statistics[0].league.name;
      titleLeague.textContent = `Top Scorers ${nameLeague}`;
    })
  )
  .catch((err) => {
    console.log(err);
  });
