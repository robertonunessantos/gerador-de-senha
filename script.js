function gerarSenha() {
    const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%&*";

    const quantidade = document.getElementById("quantidade").value;

    const usarMaiusculas = document.getElementById("maiusculas").checked;
    const usarMinusculas = document.getElementById("minusculas").checked;
    const usarNumeros = document.getElementById("numeros").checked;
    const usarSimbolos = document.getElementById("simbolos").checked;

    const campoSenha = document.getElementById("senha");
    const mensagem = document.getElementById("mensagem");

    let caracteres = "";
    let senha = "";

    mensagem.textContent = "";

    if (usarMaiusculas) {
        caracteres += letrasMaiusculas;
    }

    if (usarMinusculas) {
        caracteres += letrasMinusculas;
    }

    if (usarNumeros) {
        caracteres += numeros;
    }

    if (usarSimbolos) {
        caracteres += simbolos;
    }

    if (caracteres === "") {
        campoSenha.value = "";
        mensagem.textContent = "Selecione pelo menos um tipo de caractere.";
        return;
    }

    for (let i = 0; i < quantidade; i++) {
        let numeroAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[numeroAleatorio];
    }

    campoSenha.value = senha;
}
