export default function contact() {
    const div = document.querySelector("#content");

    div.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent = "Contact Us";
    div.appendChild(title);

    const description = document.createElement("p");
    description.textContent = "Send us a mail at dani@mexicandelicacies.com";
    div.appendChild(description);

    const address = document.createElement("p");
    address.textContent = "You can find us at: Insurgentes 123, Col. Nápoles.";
    div.appendChild(address);
}