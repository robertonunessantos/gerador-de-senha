function gerarSenha() {
    const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%&*";

    const quantidade = Number(document.getElementById("quantidade").value);

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
        atualizarForca(0);
        return;
    }

    for (let i = 0; i < quantidade; i++) {
        let numeroAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[numeroAleatorio];
    }

    campoSenha.value = senha;

    verificarForcaSenha(
        quantidade,
        usarMaiusculas,
        usarMinusculas,
        usarNumeros,
        usarSimbolos
    );
}

function verificarForcaSenha(quantidade, usarMaiusculas, usarMinusculas, usarNumeros, usarSimbolos) {
    let pontos = 0;

    if (quantidade >= 8) {
        pontos++;
    }

    if (quantidade >= 12) {
        pontos++;
    }

    if (usarMaiusculas) {
        pontos++;
    }

    if (usarMinusculas) {
        pontos++;
    }

    if (usarNumeros) {
        pontos++;
    }

    if (usarSimbolos) {
        pontos++;
    }

    if (pontos <= 2) {
        atualizarForca(1);
    } else if (pontos <= 4) {
        atualizarForca(2);
    } else if (pontos === 5) {
        atualizarForca(3);
    } else {
        atualizarForca(4);
    }
}

function atualizarForca(nivel) {
    const barraForca = document.getElementById("barraForca");
    const textoForca = document.getElementById("textoForca");

    if (nivel === 0) {
        barraForca.style.width = "0%";
        barraForca.style.background = "#cbd5e1";
        textoForca.textContent = "Aguardando senha";
        textoForca.style.color = "#555";
    }

    if (nivel === 1) {
        barraForca.style.width = "25%";
        barraForca.style.background = "#dc2626";
        textoForca.textContent = "Fraca";
        textoForca.style.color = "#dc2626";
    }

    if (nivel === 2) {
        barraForca.style.width = "50%";
        barraForca.style.background = "#f59e0b";
        textoForca.textContent = "Média";
        textoForca.style.color = "#f59e0b";
    }

    if (nivel === 3) {
        barraForca.style.width = "75%";
        barraForca.style.background = "#16a34a";
        textoForca.textContent = "Forte";
        textoForca.style.color = "#16a34a";
    }

    if (nivel === 4) {
        barraForca.style.width = "100%";
        barraForca.style.background = "#15803d";
        textoForca.textContent = "Muito forte";
        textoForca.style.color = "#15803d";
    }
}
