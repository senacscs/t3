function firstExample() {
  const number = document.getElementById("first-input").value;
  const final = parseInt(number) * 2;

  document.getElementById("viewer").innerHTML = `Número duplicado = ${final}`;
}

function secondExample() {
  const name = document.getElementById("second-input").value;

  document.getElementById("viewer").innerHTML = `Seu nome é ${name}`;
}

function thirdExample() {
  const calc = document.getElementById("third-input").value;

  document.getElementById("viewer").innerHTML = `Resultado: ${eval(calc)}`;
}

function fourthExample() {
  const number = document.getElementById("fourth-input").value;

  const power = Math.pow(number, 2.0);
  const sqrt = Math.sqrt(number);

  document.getElementById(
    "viewer"
  ).innerHTML = `Potência: ${power}<br>Raiz: ${sqrt}`;
}

function fifthExample() {
  const adulthood = 18;
  const age = document.getElementById("fifth-input").value;

  if (age < adulthood) {
    const time = adulthood - age;
    document.getElementById(
      "viewer"
    ).innerHTML = `Faltam ${time} ano(s) para você atingir a maioridade`;
  } else {
    document.getElementById("viewer").innerHTML =
      "Você já atingiu a maioridade";
  }
}

function sixthExample() {
  const year = document.getElementById("sixth-input").value;
  const leapYearsQuantity = year / 4;
  const days = (year - 1) * 365 + leapYearsQuantity;

  document.getElementById("viewer").innerHTML =
    "Já se passaram " + days + " dias desde 01/01/0001";
}

function seventhExample() {
  const number = document.getElementById("seventh-input").value;

  if (number % 5 == 0) {
    document.getElementById("viewer").innerHTML =
      "O número " + number + " é múltiplo de 5";
  } else {
    document.getElementById("viewer").innerHTML =
      "O número " + number + " não é múltiplo de 5";
  }
}

function eighthExample() {
  const number = document.getElementById("eighth-input").value;

  if (number == 0) {
    document.getElementById("viewer").innerHTML = "O número é igual a zero";
  } else if (number < 0) {
    document.getElementById("viewer").innerHTML = "O número é negativo";
  } else {
    document.getElementById("viewer").innerHTML = "O número é positivo";
  }
}
