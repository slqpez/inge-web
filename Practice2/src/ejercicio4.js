const input = document.querySelector("#input-ej4")


input.addEventListener("change", showValue)


function showValue(){
    const value =toRomanize(parseInt(input.value))
    const result = document.querySelector("#result-roman")
    result.innerHTML = value
    input.value =""
}

function toRomanize(number) {
  let values = [1, 5, 10, 50, 100, 500, 1000],
    letras = ["I", "V", "X", "L", "C", "D", "M"],
    res = [],
    num,
    letra,
    val,
    pos,
    insert;

  for (let i = 6; (num = values[i]), (letra = letras[i]); i--) {
    if (number >= num) {
      let r = Math.floor(number / num);

      number -= r * num;

      if (r < 4) {
        while (r--) {
          res.push(letra);
        }
      } else {
        val = res.pop();

        pos = (val ? letras.indexOf(val) : i) + 1;

        insert = letra + (letras[pos] || "M");

        res.push(insert);
      }
    } else {
      res.push("");
    }
  }

  return res.join("");
}


