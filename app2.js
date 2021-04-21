//prueba para ver si podia meterlo en la html pero el app es el ejercicio pedido
window.onload = function () {
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
                    var ResultadoFinal = (palabra1 +  palabra2 + palabra3 + palabra4)
                    console.log(ResultadoFinal);
                }
            }
        }
    }
}
let sdsg = document.getElementById("DomainGenerador");
sdsg.innerHTML = ResultadoFinal;