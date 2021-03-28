const year = document.querySelector("#input-ej2");

year.addEventListener("change", showResult);

function showResult() {
  const resultado = document.querySelector("#result-year");
  const result = isLeapYear();
  resultado.innerHTML = result;
  console.log(result);
}

function isLeapYear() {
  let leapYear = year.value;
  let isLeap = false;
  if (leapYear < 1 || leapYear % 1 !== 0 || isNaN(leapYear)) {
    isLeap = false;
    return "El numero ingresado no corresponde a un año";
  }
  year.value = "";
  if (leapYear % 4 == 0) {
    if (leapYear % 100 == 0) {
      if (leapYear % 400 == 0) {
        leapYear = true;
      }
    } else {
      isLeap = true;
    }
  } 

  return isLeap
    ? `El Año ${leapYear} es bisiesto.`
    : `El Año ${leapYear} no es bisiesto.`;
}
