const btnCrypt = document.querySelector(".btn-crypt");
const btnDescrypt = document.querySelector(".btn-descrypt");
const btnCopy = document.querySelector(".btn-copy");
const textArea = document.getElementById("textarea");
const translationCard = document.querySelector(".translationcard");
const tagArticle = document.getElementById("article");
const translatedText = document.getElementById("translatedtext");

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function encryptText() {
  let textCript = textArea.value
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return textCript;
}

function descryptText() {
  let textDescryptor = textArea.value
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return textDescryptor;
}

function handleBtnEncrypt() {
  if (textArea.value !== "") {
    let valueTextArea = (textArea.value.innerHTML = encryptText());
    translatedText.innerHTML = valueTextArea;
    translationCard.classList.replace("visible", "isVisible");
    btnCopy.classList.replace("isVisible", "visible");
    changeStyleJustyfiBetwwen();
    textArea.value = innerHTML = "";
  }
}

function handleBtnDescrypt() {
  console.log("descriptografar");
  if (textArea.value !== "") {
    let valueTextArea = (textArea.value.innerHTML = descryptText());
    translationCard.classList.replace("visible", "isVisible");
    btnCopy.classList.replace("isVisible", "visible");
    translatedText.innerHTML = valueTextArea;
    changeStyleJustyfiBetwwen();
    textArea.value = innerHTML = "";
  }
}

function handleBtnCopy() {
  console.log("copiar");
  copyTextClipBoard();
  translationCard.classList.replace("isVisible", "visible");
  btnCopy.classList.replace("visible", "isVisible");
  changeStyleJustyfiCenter();
  translatedText.innerHTML = "";
}
function focusTextArea() {
  translatedText.innerHTML = "";
  translationCard.classList.replace("isVisible", "visible");
  btnCopy.classList.replace("visible", "isVisible");
  changeStyleJustyfiCenter();
}

function changeStyleJustyfiBetwwen() {
  tagArticle.style.justifyContent = "space-between";
}
function changeStyleJustyfiCenter() {
  tagArticle.style.justifyContent = "center";
}

function copyTextClipBoard() {
  let content = translatedText.innerHTML;
  navigator.clipboard.writeText(content);
}

btnCrypt.addEventListener("click", handleBtnEncrypt);
btnDescrypt.addEventListener("click", handleBtnDescrypt);
btnCopy.addEventListener("click", handleBtnCopy);
textArea.addEventListener("focus", focusTextArea);



