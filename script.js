/*
    Sorteador Online!
 */

function gerarNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector("button").addEventListener('click', function () {
    // pegando os valores inseridos:
    const value1 = parseInt(document.querySelector(".input-entre").value)
    const value2 = parseInt(document.querySelector(".input-e").value)

    if (((isNaN(value1)) || isNaN(value2))) {
        alert("Insira somente números!");
    } else {
        document.querySelector(".span-result").innerHTML = `
        O sorteado foi: <b> ${gerarNumero(value1, value2)}</b> !
    `
    }
})