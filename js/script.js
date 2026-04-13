const button = document.getElementById("transformBtn");
const title = document.getElementById("title");
const description = document.getElementById("description");

button.addEventListener("click", function () {
    document.body.classList.toggle("night");

    if (document.body.classList.contains("night")) {
        title.textContent = "Electric Night";
        description.textContent = "The page transformed into a bold nighttime atmosphere.";
        button.textContent = "Return to Day";
    } else {
        title.textContent = "Peaceful Day";
        description.textContent = "Everything feels calm, bright, and relaxed.";
        button.textContent = "Transform";
    }
});
