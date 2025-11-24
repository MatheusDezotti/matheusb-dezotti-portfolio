document
  .getElementById("formContato")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // evita envio real

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    // Validação
    if (nome === "" || email === "" || mensagem === "") {
      alert("Preencha todos os campos!");
      return;
    }

    // Validação simples de email
    if (!email.includes("@") || !email.includes(".")) {
      alert("Digite um e-mail válido!");
      return;
    }

    // Sucesso
    alert("Mensagem enviada com sucesso!");

    // Limpa os campos
    document.getElementById("formContato").reset();
  });
