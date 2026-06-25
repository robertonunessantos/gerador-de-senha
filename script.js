function gerarSenha() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
    let senha = "";

    for (let i = 0; i < 10; i++) {
        let numeroAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[numeroAleatorio];
    }

    document.getElementById("senha").value = senha;
}
