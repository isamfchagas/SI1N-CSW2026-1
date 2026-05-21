document.writeln("Olá Mundo!")
document.writeln("<h2>Bem-Vindo a aula de JavaScript</h2>")
window.alert("esta é uma mensagem de alerta!")
document.getElementById("title").innerHTML = "Aprendendo JavaScript com o melhor professor da UVV"


let nome = prompt("Digite seu nome")

document.getElementById("novafrase").innerHTML = "Olá " + nome + "! Seja Bem-Vindo ao JS!"
document.getElementById("novafrase").style.color = "purple"
document.getElementById("novafrase").style.fontSize = "80px"

const novafrase = document.getElementById("nome").value
    document.getElementById("novafrase").innerHTML = "Olá " + nome + "! Seja bem-vindo ao JS!"


function exibirMensagem() {
    let nome = document.getElementById("nome").value
    document.getElementById("novafrase").innerHTML = "Olá " + nome + "! Seja bem-vindo ao JS!"
}


