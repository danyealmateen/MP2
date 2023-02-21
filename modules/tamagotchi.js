class Tamagotchi {
  #hunger;
  #happiness;
  constructor(hunger, happiness) {
    this.#hunger = hunger;
    this.#happiness = happiness;
  }
  addTamagotchi() {
    //Hunger & Happiness stats
    this.#hunger = 10;
    this.#happiness = 10;

    //Creatar & Hämtar element
    let select = document.getElementById("select").value;
    let tamaContainer = document.getElementById("tamaContainer");
    let tamaTitle = document.getElementById("tamaTitle");
    let feedButton = document.createElement("button");
    let happinessButton = document.createElement("button");
    let stats = document.createElement("div");

    //Statsen innerText
    stats.innerHTML = `Hunger : ${this.#hunger}<br> Happiness : ${
      this.#happiness
    }`;
    tamaTitle.innerText = `Testing title`;

    happinessButton.innerText = `Play`;
    feedButton.innerText = `Feed`;

    //Append
    tamaContainer.appendChild(feedButton);
    tamaContainer.appendChild(happinessButton);
    tamaContainer.append(stats);

    //Eventlistener
    feedButton.addEventListener("click", () => {
      console.log(123);
    });
  }
}

export { Tamagotchi };
