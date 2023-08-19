let moneyText = document.querySelector("#valor")
let buttons = document.querySelectorAll("#btn-calc")
let result = document.querySelector("#resultado")
let porcentagemText = document.querySelector("#porcent")

class Calculo {
    constructor (moneyText,porcentagemText) {
    this.moneyText = moneyText
    this.porcentagemText = porcentagemText
    }
    
}

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        result.innerText;
    })
});
