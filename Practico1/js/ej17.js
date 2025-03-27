let chirridos;
let resultFahrenheit;
let resultCelcius;
let resultDirectCelcius

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult(){
    chirridos = Number(document.querySelector("#nbr1").value);
    resultFahrenheit = 50 + ((chirridos - 40) / 4);
    resultCelcius = (resultFahrenheit - 32) / 1.8;
    resultDirectCelcius = 10 + ((chirridos - 40) / 7);

    document.querySelector("#pResultFahrenheit").innerHTML = `Resultado en Fahrenheit: ${resultFahrenheit} `;
    document.querySelector("#pResultCelsius").innerHTML = `Resultado en Celcius: ${resultCelcius}`;
    document.querySelector("#pResultDirectCelsius").innerHTML = `Resultado directo Celcius: ${resultDirectCelcius}`;
}