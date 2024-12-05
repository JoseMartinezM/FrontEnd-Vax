const dynamicContent = document.getElementById("dynamic-content");
const toggleContentButton = document.getElementById("toggle-content");
const contentButtonText = document.getElementById("content-button-text");

toggleContentButton.addEventListener("click", () => {
    if (dynamicContent.classList.contains("hidden")) {
        dynamicContent.classList.remove("hidden");
        contentButtonText.textContent = "Cerrar";
    } else {
        dynamicContent.classList.add("hidden");
        contentButtonText.textContent = "Leer más";
    }
});
