// DOM API Access & Events
const gameArea = document.querySelector("#game-container");

gameArea.addEventListener("dragstart", function (pEvent) {
   selectedSyllableIndex = +pEvent.target.dataset.index;
})

gameArea.addEventListener("drop", function (pEvent) {
   if (pEvent.target.tagName.toLowerCase() == "div") {
      targetIndex = +pEvent.target.dataset.index;
      switchWords(targetIndex, selectedSyllableIndex);

      refreshUI(userWordArray)
   }
})

gameArea.addEventListener("dragover", function (pEvent) {
   pEvent.preventDefault();
});

document.querySelector("#trigger-check").addEventListener("click", function () {
   if (checkResult()) {
      console.log("yaayyy!")
   } else {
      console.error("nooo!")
   }
})