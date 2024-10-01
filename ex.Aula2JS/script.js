function verificarParOuImpar() {
    const numero = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado");
  
    if (numero === "") {
      resultado.innerHTML = "Por favor, insira um número.";
      return;
    }
  
    const numeroConvertido = parseInt(numero);
  
    if (isNaN(numeroConvertido)) {
      resultado.innerHTML = "Valor inválido, por favor insira um número.";
      return;
    }
  
    if (numeroConvertido % 2 === 0) {
      resultado.innerHTML = "O número " + numeroConvertido + " é <strong>Par</strong>.";
    } else {
      resultado.innerHTML = "O número " + numeroConvertido + " é <strong>Ímpar</strong>.";
    }
  }
  