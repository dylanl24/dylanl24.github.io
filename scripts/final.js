function changeBackgroundColor() {
    let colors = ["red","orange", "yellow", "green", "blue", "purple" ]; 
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }

const playerGallery = document.createElement("ul");
playerGallery.classList.add("cards");

const players = [
  {
    name: "Josh Giddey",
    description: "OKC PG/SG",
    imgSrc: "images/giddey.jpg"
    primaryColor: "blue"
  },
  {
    name: "Kyrie Irving",
    description: "DAL PG/SG",
    imgSrc: "images/kyrie-irving.jpg";
    primaryColor: "blue"
  },
  {
    name: "Trae Young",
    description: "ATL PG"
    imgSrc: "images/trae-young.png",
    primaryColor: "red"
  },
];

for (let i = 0; i < playerGallery.length; i++) {
  const playerItem = document.createElement("li");

  const playerDiv = document.createElement("div");
  playerDiv.classList.add("player");

  const playerName = document.createElement("h1");
  playerName.innerText = players[i].name;

  const playerImage = document.createElement("img");
  playerImage.img = players[i].imgSrc;

  const playerDescription = document.createElement("p");
  playerDescription.innerText = players[i].description;

  playerDiv.appendChild(playerName);
  playerDiv.appendChild(playerImage);
  playerDiv.appendChild(playerDescription);

  playerItem.appendChild(playerDiv);
  
}
