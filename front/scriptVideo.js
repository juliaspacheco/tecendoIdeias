let button = document.getElementById("enviar");

async function postar(event) {
    event.preventDefault();
    
    let formData = new FormData();

    let usuario = JSON.parse(localStorage.getItem("usuarioLogado"))
    let id = usuario.id

    formData.append("idUsuario", usuario.id);
    formData.append("titulo",document.getElementById('titulo').value);
    formData.append("descricao",document.getElementById('descricao').value);
    formData.append("materiais",document.getElementById('materiais').value);
    formData.append("files", document.getElementById('video').files[0]);
    let moldes = document.getElementById('moldes').files;

    for(let i = 0; i < moldes.length; i++) {
        console.log(moldes[i])
        formData.append("files", moldes[i])
    }
    console.log(formData.get('files'));
    
    const response = await fetch('http://localhost:3001/api/store/video', {
        method: "POST", 
        body: formData
    });

    let content = await response.json();

    if(content.success) {
        alert("sucesso")
        window.location.href = 'perfil.html';
    } else {
        alert('não foi criado');
        console.log(content.sql);
    }
} 