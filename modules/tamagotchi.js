class Tamagotchi {
  #hunger;
  #happiness;
  constructor(hunger, happiness) {
    this.#hunger = hunger;
    this.#happiness = happiness;
  }
  addTamagotchi() {
    this.#hunger = 10;
    this.#happiness = 10;

    let tamaContainer = document.getElementById("tamaContainer");
    let feedButton = document.createElement("button");
    let happinessButton = document.createElement("button");
    let stats = document.createElement("div");

    stats.innerHTML = `Hunger : ${this.#hunger}<br> Happiness : ${
      this.#happiness
    }`;

    happinessButton.innerText = `Play`;
    feedButton.innerText = `Feed`;

    tamaContainer.appendChild(feedButton);
    tamaContainer.appendChild(happinessButton);
    tamaContainer.append(stats);

    feedButton.addEventListener("click", () => {
      console.log(123);
    });
  }
}

export { Tamagotchi };
