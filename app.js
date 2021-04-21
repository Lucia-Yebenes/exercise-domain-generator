//Ejercicio pedido
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let con = [".com", ".net", ".us", ".io"];
var i = null
var j = null
var x = null
var l = null
for (i = 0; i <= 1; i++) {
    var palabra1 = pronoun[i];
    for (j = 0; j <= 1; j++) {
        var palabra2 = adj[j];
        for (x = 0; x <= 1; x++) {
            var palabra3 = noun[x];
            for (l = 0; l <= 3; l++) {
                var palabra4 = con[l];
                console.log(palabra1 + palabra2 + palabra3 + palabra4);
                //var ResultadoFinal = (palabra1 +  palabra2 + palabra3 + palabra4)
            }
        }
    }
}

//let sdsg = document.getElementById("DomainGenerador");
//sdsg.innerHTML = ResultadoFinal;