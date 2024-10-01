function verificaHabilidade(habilidades) {
    return habilidades.includes("JavaScript");
  }
  
  // Exemplo de uso
  const skills = ["HTML", "CSS", "JavaScript", "Python"];
  console.log(verificaHabilidade(skills)); // true
  
  const outrasSkills = ["HTML", "CSS", "Python"];
  console.log(verificaHabilidade(outrasSkills)); // false
  