const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const input = document.querySelector("#input-ej1");

input.addEventListener("change", showResult);

function showResult() {
  const resultP = document.querySelector("#result");
  const result = pangrama();
  console.log(result);
  resultP.innerHTML = result;
}

function pangrama() {
  let isPangram = true;
  const text = input.value;
  const newText = text.toLocaleLowerCase();
  input.value = "";
  for (let i = 0; i < newText.length; i++)
    if (!newText.includes(alphabet[i])) {
      isPangram = false;
      break;
    }
  return isPangram ? `El texto "${newText}" es un pangrama.` : `El texto "${newText}" no es un pangrama.`;
}
