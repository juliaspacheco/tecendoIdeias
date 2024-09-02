// Cadastro de usuários
let button = document.getElementById("handleSubmit");

button.onclick = async function (event) {

    event.preventDefault();
    // Se o evento não funcionar como deveria, não vai ser feito o padrão de um formulário
    // Ex: recarregar a pág após o envio
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let data = {nome, email, senha}
    // Acessa os valores dos campos de entrada com esses ids
    // e seleciona o elemento HTML correspondente (.value pega o valor atual do campo)

    // fetch faz uma solicitação HTTP POST para a URL, os dados do formulário são enviados 
    // no corpo da solicitação como uma string JSON. 
    // O await espera que a resposta do servidor seja recebida antes de continuar
    const response = await fetch('http://localhost:3001/api/cadastro', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        //  informa ao servidor que o corpo da solicitação está no formato JSON
        body: JSON.stringify(data)
    });

    let content = await response.json();
    // Depois de receber a resposta do servidor, o código analisa a resposta como JSON e o 
    // resultado é armazenado

    console.log(content);

    if(content.success) {
        alert("Sucesso")
        window.location.href = 'login.html';
    } else {
        alert('Não');
    }
}