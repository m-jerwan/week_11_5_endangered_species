document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript loaded");
    let allAnimals = [];

    const theForm = document.querySelector("#form");
    theForm.addEventListener('submit', handleFormSubmition);
})

const handleFormSubmition = function (event) {
    event.preventDefault();
    const thisFormSubmition = event.target;

    const commonName = thisFormSubmition.common_name.value;
    const scientificName = thisFormSubmition.scientific_name.value;
    const population = thisFormSubmition.population.value;
    const habitat = thisFormSubmition.habitat.value;
    const conservationStatus = thisFormSubmition.conservation_status.value;

    


}