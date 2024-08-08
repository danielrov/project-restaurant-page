export default function menu() {
    const div = document.querySelector("#content");

    div.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent = "Our Menu";
    div.appendChild(title);

    const card = document.createElement("div");
    const cardTitle = document.createElement("h2");
    const cardImage = document.createElement("img");
    const cardDescription = document.createElement("p")
    const cardPrice = document.createElement("p")

    card.classList.add("card")
    cardTitle.textContent = "Beef Tacos";
    cardImage.setAttribute('src', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/43/46/49/bar.jpg?w=600&h=-1&s=1');
    cardDescription.textContent = "3 Beef Tacos with onion, perefil and green salsa."
    cardPrice.textContent = "$5 USDs"
    cardPrice.classList.add("price")

    div.appendChild(card)
    card.appendChild(cardTitle);
    card.appendChild(cardImage);
    card.appendChild(cardDescription);
    card.appendChild(cardPrice);
}