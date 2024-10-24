// Pág de perfil, com botão para redirecionar para pág de detalhes
document.addEventListener('DOMContentLoaded', async () => {
<<<<<<< HEAD
 
=======

>>>>>>> fddbfe1 (configuração swagger)
    const response = await fetch('http://localhost:3001/api/get/video');
    const result = await response.json();

    let usuario = JSON.parse(localStorage.getItem("usuarioLogado"))
    let id = usuario.id
    
    if(result.success){
        const videosLista = document.querySelector('.videosLista');
        result.data.forEach(videos => {
            if(videos.user_id == id) {
                const videosDiv = document.createElement('div');
                videosDiv.className = 'videosContainer';
                let videoContent = `http://localhost:3001/uploads/${videos.video}`;
                let video = document.createElement("video")
                video.src = videoContent;
                video.style.cursor = "pointer"
                video.controls = false

                console.log(videos) 
                video.addEventListener('click', function() {
                    window.location.href = `videoPostado.html?id=${videos.id}`;
                })
                
                const infoDiv = document.createElement('div');
                infoDiv.className = 'videosListaInfo';
    
                const titulo = document.createElement('h4');
                titulo.className = 'textoVideo';
                titulo.textContent = videos.titulo;
    
                infoDiv.appendChild(titulo);
                videosDiv.appendChild(video);
                videosDiv.appendChild(infoDiv);
    
                videosLista.appendChild(videosDiv);
            }
        })
    } else {
        console.log("erro", result.sql);
    }
})