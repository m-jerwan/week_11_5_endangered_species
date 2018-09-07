document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript loaded");

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

    let resultDiv = document.createElement('div');
    let resultH5 = document.createElement('h5');
    let resultUl = document.createElement('ul');
    let resultLiSciName = document.createElement('li');
    let resultLiPopulation = document.createElement('li');
    let resultLiHabitat = document.createElement('li');
    let resultLiStatus = document.createElement('li');


    resultH5.textContent = commonName;
    resultLiSciName.textContent = scientificName;
    resultLiPopulation.textContent = population;
    resultLiHabitat.textContent = habitat;
    resultLiStatus.textContent = conservationStatus;

    resultDiv.appendChild(resultH5);
    resultUl.appendChild(resultLiSciName);
    resultUl.appendChild(resultLiPopulation);
    resultUl.appendChild(resultLiHabitat);
    resultUl.appendChild(resultLiStatus);
    resultDiv.appendChild(resultUl);

    const listToInputResults = document.querySelector('.list');
    listToInputResults.appendChild(resultDiv);
    this.reset();
}