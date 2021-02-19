// Data Model
const words = ["Hicoders!", "Switzerland", "Zürich", "React", "WebProgramming", "Computer"];
let originalWord = getRandomWord(words);
let userWordArray = shuffleSyllableList(extractSyllables(originalWord));
let selectedSyllableIndex = null;
let targetIndex = null;


// Data Model Functions/Operations
function getRandomWord(pWords) {
   return pWords[Math.floor(Math.random() * pWords.length)];
}

function extractSyllables(pWord) {
   let syllableList = [];
   let letterArray = pWord.split("");
   while (letterArray.length > 0) {
      let extractedLetters = letterArray.splice(0, Math.floor(Math.random() * 3) + 1);
      syllableList.push(extractedLetters.join(""));
   }

   return syllableList;
}

function shuffleSyllableList(pSyllableList) {
   return pSyllableList.sort(() => Math.random() - 0.5);
}

function checkResult() {
   return originalWord === userWordArray.join("")
}

function switchWords(targetIndex, selectedSyllableIndex) {
   let targetSyllable = userWordArray[targetIndex];
   userWordArray[targetIndex] = userWordArray[selectedSyllableIndex];
   userWordArray[selectedSyllableIndex] = targetSyllable;
}