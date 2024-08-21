let button = document.getElementById("entrar");

button.onclick = async function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let data = {email, senha}

    const response = await fetch('http://localhost:3001/api/login', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();

    console.log(content);

    if(content.success) {
        //salvar os dados do usuario no localStorage
        localStorage.setItem("usuarioLogado", JSON.stringify(content.data[0]))

        window.location.href = 'feed.html';
    } else {
        alert(content.message);
    }
}