let contador = 0;

function incrementar() {
    contador++;
    document.getElementById('valor').innerText = contador;
    console.log("O contador agora é: " + contador);
}