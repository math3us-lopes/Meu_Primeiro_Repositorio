function verificarIdade() {
    const idade = document.getElementById("idade").value;
    const mensagem = document.getElementById("mensagem");
  
    if (idade === "") {
      mensagem.innerHTML = "Por favor, insira sua idade.";
      return;
    }
  
    const idadeConvertida = parseInt(idade);
  
    if (isNaN(idadeConvertida) || idadeConvertida < 0) {
      mensagem.innerHTML = "Por favor, insira uma idade válida.";
      return;
    }
  
    if (idadeConvertida >= 18) {
      mensagem.innerHTML = "Acesso permitido. Bem-vindo!";
    } else {
      mensagem.innerHTML = "Acesso negado. Você precisa ter pelo menos 18 anos.";
    }
  }
  