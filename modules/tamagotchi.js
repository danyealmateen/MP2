class Tamagotchi {
  #hunger;
  #happiness;
  constructor(hunger, happiness) {
    this.#hunger = hunger;
    this.#happiness = happiness;
  }
  addTamagotchi() {
    //Buttons
    let tamaContainer = document.getElementById("tamaContainer");
    let feedButton = document.createElement("button");
    let happinessButton = document.createElement("button");
    happinessButton.innerText = `Play`;
    feedButton.innerText = `Feed`;
    tamaContainer.appendChild(feedButton);
    tamaContainer.appendChild(happinessButton);

    this.#hunger = `Hunger: ${10}`;
    this.#happiness = `Happiness ${10}`;
  }
}

export { Tamagotchi };
