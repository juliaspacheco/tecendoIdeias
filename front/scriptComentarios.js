let button = document.getElementById("postar");

async function postar(event) {
    event.preventDefault();
    
    let formData = new FormData();

    let usuario = JSON.parse(localStorage.getItem("usuarioLogado"))
    let id = usuario.id

    formData.append("idUsuario", usuario.id);
    formData.append("comentario",document.getElementById('comentario').value);

    // for(let i = 0; i < moldes.length; i++) {
    //     console.log(moldes[i])
    //     formData.append("files", moldes[i])
    // }
    // console.log(formData.get('files'));

    // console.log(formData.get('idUsuario'));
    // console.log(formData.get('titulo'));
    // console.log(formData.get('file'));
    // console.log(formData.get('files'));
    
    const response = await fetch('http://localhost:3001/api/store/comentario', {
        method: "POST", 
        body: formData
    });

    let content = await response.json();

    if(content.success) {
        alert("sucesso")
    } else {
        alert('não foi criado');
        console.log(content.sql);
    }
} 