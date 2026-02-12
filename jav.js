let contador = 1;

function incrementar() {
    contador++;
    document.getElementById('valor').innerText = contador;
    console.log("O contador agora é: " + contador);
}