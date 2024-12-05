const missionDynamicContent = document.getElementById("mission-dynamic-content");
const toggleMissionButton = document.getElementById("toggle-mission-content");
const missionButtonText = document.getElementById("mission-button-text");

toggleMissionButton.addEventListener("click", () => {
    if (missionDynamicContent.classList.contains("hidden")) {
        missionDynamicContent.classList.remove("hidden");
        missionButtonText.textContent = "Cerrar";
    } else {
        missionDynamicContent.classList.add("hidden");
        missionButtonText.textContent = "Ver detalles";
    }
});
