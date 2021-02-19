
// UI Functions
function createSyllableContainer(pSyllableList) {
    return pSyllableList.map((syllable, index) => `
        <div id="syllable-container-${index}" data-index="${index}">
            <span draggable="true" id="syllable-${index}" data-index="${index}">${syllable}</span>
        </div>`
    ).join("");
}

function refreshUI(pSyllableList) {
    document.querySelector("#game-container").innerHTML = createSyllableContainer(pSyllableList);
}

