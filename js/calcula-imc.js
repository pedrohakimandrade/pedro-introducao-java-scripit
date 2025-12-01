var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

/*
console.log(paciente);  //tr
console.log(tdPeso);    // td que tem peso
console.log(tdAltura);  //td que tem altura
console.log(peso);      //valor do peso
console.log(altura);    //valor da altura
*/

var pacientes = document.querySelectorAll(".paciente");

for (var i=0; i < pacientes.length; i++) {

    var paciente = pacientes[i];      // inserir

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    if (!pesoEhValido) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
    }
    
    if (!alturaEhValida){
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
    }
    
    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }

}

// Reescrever o mesmo código em tres funções independentes

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso/(altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if (peso <= 0 ||  peso >= 1000) {
        return false;
    } else {
        return true;
    }
}

function validaAltura(altura) {
    if (altura <=0 || altura > 3.00){
        return false;
    } else {
        return true;
    }
}