document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript loaded");

    const theForm = document.querySelector("#form");
    theForm.addEventListener('submit', handleFormSubmition);
})

const extractRawData = function(){
    const thisFormSubmition = event.target;
    const rawData = {
        commonName: thisFormSubmition.common_name.value,
        scientificName: thisFormSubmition.scientific_name.value,
        population: thisFormSubmition.population.value,
        habitat: thisFormSubmition.habitat.value,
        conservationStatus: thisFormSubmition.conservation_status.value
    }
    return rawData;
}


const handleFormSubmition = function (event) {
    event.preventDefault();
    const rawData = extractRawData()

    prepDataIntoHtml(rawData);
    // let resultDiv = document.createElement('div');
    // let resultH = document.createElement('h3');
    // let resultUl = document.createElement('ul');
    // let resultLiSciName = document.createElement('li');
    // let resultLiPopulation = document.createElement('li');
    // let resultLiHabitat = document.createElement('li');
    // let resultLiStatus = document.createElement('li');

    // resultH.textContent = commonName;
    // resultLiSciName.textContent = `Scientific name: ${scientificName}`;
    // resultLiPopulation.textContent = `Population: ${population}`;
    // resultLiHabitat.textContent = `Habitat: ${habitat}`;
    // resultLiStatus.textContent = `Conservation status: ${conservationStatus}`;

    // if (conservationStatus === "Extinct" || conservationStatus === "Extinct in the wild" || conservationStatus === "Critically endangered") {
    //     console.dir(conservationStatus);
    //     resultLiStatus.className = "red"
    // } else if (conservationStatus === "Endangered" || conservationStatus === "Vulnerable" || conservationStatus === "Near threatened") {
    //     resultLiStatus.className = "yellow"
    // }else{
    //     resultLiStatus.className = "green"
    // }



    // resultDiv.appendChild(resultH);
    // resultUl.appendChild(resultLiSciName);
    // resultUl.appendChild(resultLiPopulation);
    // resultUl.appendChild(resultLiHabitat);
    // resultUl.appendChild(resultLiStatus);
    // resultDiv.appendChild(resultUl);

    // const listToInputResults = document.querySelector('.list');
    // listToInputResults.appendChild(resultDiv);
    // this.reset();
}