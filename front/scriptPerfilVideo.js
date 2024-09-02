// Pág de perfil, com botão (no próprio vídeo) para redirecionar para pág de detalhes
document.addEventListener('DOMContentLoaded', async () => {
// adiciona um ouvinte de evento que executa a função assíncrona fornecida assim que 
// o conteúdo HTML da página for completamente carregado
   
    const response = await fetch('http://localhost:3001/api/get/video');
    const result = await response.json();
    // O await espera que a resposta do servidor seja recebida antes de continuar
    // O resultado é armazenado em 'result'.
 
    if(result.success){
        const videosLista = document.querySelector('.videosLista');
        result.data.forEach(videos => {
            // Para cada item dentro da lista vai criar:
            const videosDiv = document.createElement('div');
            videosDiv.className = 'videosContainer';
            // Cria um novo elemento div para colocar o vídeo e define a classe da div.
            console.log(videos)
            let videoContent = `http://localhost:3001/uploads/${videos.video}`;
            let video = document.createElement("video")
            video.src = videoContent;
            // Cria um elemento video e define seu atributo src para o URL do vídeo
            video.style.cursor = "pointer"
            video.controls = false
            // estiliza o cursor e os controles do vídeo

            console.log(videos) 
            video.addEventListener('click', function() {
                window.location.href = `videoPostado.html?id=${videos.id}`;
            })
            // Função de clique em que, quando o vídeo for clicado, o usuário vai ser redirecionado 
            // para a página de detalhes (videoPostado.html), passa o ID do vídeo na URL
             
            const infoDiv = document.createElement('div');
            infoDiv.className = 'videosListaInfo';
            // div de informações adicionais do vídeo (título)
 
            const titulo = document.createElement('h4');
            titulo.className = 'textoVideo';
            titulo.textContent = videos.titulo;
 
            infoDiv.appendChild(titulo);
            videosDiv.appendChild(video);
            videosDiv.appendChild(infoDiv);
 
            videosLista.appendChild(videosDiv);
            // Coloca tudo dentro do container principal
 
        })
    } else {
        console.log("erro", result.sql);
    }
})