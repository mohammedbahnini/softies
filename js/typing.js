const introParagraph = document.querySelector(".intro p");
let text = introParagraph.textContent;
text = text.replace(/\s\s+/g, " ");
const letters = text.split("");
//console.log(letters);
introParagraph.textContent = "";
startTyping();

async function startTyping() {
  for (let i = 0; i <= letters.length - 1; i++) {
    //introParagraph.textContent += letters[i];
    await addLetter(letters[i]);
  }
}
function addLetter(letter) {
  return new Promise(async (resolve) => {
    setTimeout(() => {
      introParagraph.textContent += letter;
      //console.log(letter);
      resolve();
    }, 25);
  });
}