export default function home() {
    const div = document.querySelector("#content");

    div.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent = "Mexican Delicacies: A Taste of Tradition";
    div.appendChild(title);

    const image = document.createElement("img");
    image.setAttribute('src', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/43/46/49/bar.jpg?w=600&h=-1&s=1');
    div.appendChild(image)

    const description = document.createElement("p");
    description.textContent = "Welcome to Mexican Delicacies, where the vibrant flavors of Mexico come to life. Nestled in the heart of the city, our restaurant is a celebration of authentic Mexican cuisine, offering a delightful escape to the rich culinary traditions of Mexico.";
    div.appendChild(description)
}