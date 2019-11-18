// document.addEventListener("click", calculate);
document.addEventListener("keyup", calculate);

function calculate() {
  let accuracy = parseInt(document.getElementById("accuracy").value);
  let unfamiliar = parseInt(document.getElementById("unfamiliar").value);
  let essay = parseInt(document.getElementById("essay").value);
  let total = accuracy + unfamiliar + essay;

  let grade;
  if (total < 12) {
    grade = "N0";
  } else if (total < 24) {
    grade = "N1";
  } else if (total < 37) {
    grade = "D2";
  } else if (total < 47) {
    grade = "A3";
  } else if (total < 56) {
    grade = "A4";
  } else if (total < 65) {
    grade = "M5";
  }  else if (total < 74) {
    grade = "M6";
  } else if (total < 83) {
    grade = "E7";
  } else if (total < 91) {
    grade = "E8";
  } else {
    grade = "ERR";
  }
  document.getElementById("output").value = total + " / " + grade;
}
