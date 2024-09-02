// login
let button = document.getElementById("entrar");

button.onclick = async function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let data = {email, senha}
     // Acessa os valores dos campos de entrada com esses ids
    // e seleciona o elemento HTML correspondente (.value pega o valor atual do campo)

    // fetch faz uma solicitação HTTP POST para a URL, os dados do formulário são enviados 
    // no corpo da solicitação como uma string JSON. 
    // O await espera que a resposta do servidor seja recebida antes de continuar
    const response = await fetch('http://localhost:3001/api/login', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();
    // Depois de receber a resposta do servidor, o código analisa a resposta como JSON e o 
    // resultado é armazenado

    console.log(content);

    if(content.success) {
        //salvar os dados do usuario no localStorage
        localStorage.setItem("usuarioLogado", JSON.stringify(content.data[0]))
                                                            // acessa o primeiro item de data, 
                                                            // que está dentro do objeto 'content'
        // LocalStorage = armazena dados no navegador do cliente, só pode armazenar strings
        

        window.location.href = 'feed.html';
    } else {
        alert(content.message);
    }
}