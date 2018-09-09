document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript loaded");

    const theForm = document.querySelector("#form");
    theForm.addEventListener('submit', handleFormSubmition);
})


//MAIN ENGINE:
const handleFormSubmition = function (event) {
    event.preventDefault();
    const rawData = extractRawData()
    const preparedData = prepDataIntoHtml(rawData);
    appendElements(preparedData);
    this.reset();
}


//===HELPERS:

const extractRawData = function(){
    const thisFormSubmition = event.target;
    const rawData = {
        common_name: thisFormSubmition.common_name.value,
        scientific_name: thisFormSubmition.scientific_name.value,
        population: thisFormSubmition.population.value,
        habitat: thisFormSubmition.habitat.value,
        conservation_status: thisFormSubmition.conservation_status.value
    }
    return rawData;
}

const prepDataIntoHtml = function(rawData){

    let preparingELements = {
     resultDiv: document.createElement('div'),
     resultH: document.createElement('h3'),
     resultUl: document.createElement('ul'),
     resultLiSciName: document.createElement('li'),
     resultLiPopulation: document.createElement('li'),
     resultLiHabitat: document.createElement('li'),
     resultLiStatus: document.createElement('li')
    }

    preparingELements.resultH.textContent = `${rawData.common_name}`;
    preparingELements.resultLiSciName.textContent = `Scientific name: ${rawData.scientific_name}`;
    preparingELements.resultLiPopulation.textContent = `Population: ${rawData.population}`;
    preparingELements.resultLiHabitat.textContent = `Habitat: ${rawData.habitat}`;
    preparingELements.resultLiStatus.textContent = `Conservation status: ${rawData.conservation_status}`;


    if (rawData.conservation_status === "Extinct" || rawData.conservation_status === "Extinct in the wild" || rawData.conservation_status === "Critically endangered") {
        preparingELements.resultLiStatus.className = "red"
    } else if (rawData.conservation_status === "Endangered" || rawData.conservation_status === "Vulnerable" || rawData.conservation_status === "Near threatened") {
        preparingELements.resultLiStatus.className = "yellow"
    }else{
        preparingELements.resultLiStatus.className = "green"
    }

    return preparingELements;
}



const appendElements = function (data){
    data.resultDiv.appendChild(data.resultH);
    data.resultUl.appendChild(data.resultLiSciName);
    data.resultUl.appendChild(data.resultLiPopulation);
    data.resultUl.appendChild(data.resultLiHabitat);
    data.resultUl.appendChild(data.resultLiStatus);
    data.resultDiv.appendChild(data.resultUl);

    const listToInputResults = document.querySelector('.list');
    listToInputResults.appendChild(data.resultDiv);
}

