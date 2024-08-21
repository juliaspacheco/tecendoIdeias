document.addEventListener('DOMContentLoaded', async () => {
    
    const response = await fetch('http://localhost:3001/api/get/video');
    const result = await response.json();

//<div class="videosContainer">
//     <video src="#" controls></video>
//     <div class="videosListaInfo">
//         <h4>Título</h4>
//         <p>Descrição</p>
//     </div>
// </div>


    // <div class="videosContainer">
    //     <video src="#" controls></video>
    //         <div class="videosListaInfo">
    //             <h4 class="textoVideo">Título</h4>
    //     </div>
    // </div>


    if(result.success){
        const videosLista = document.querySelector('.videosLista');
        result.data.forEach(videos => {
            const videosDiv = document.createElement('div');
            videosDiv.className = 'videosContainer';
            console.log(videos)
            let videoContent = `http://localhost:3001/uploads/${videos.video}`;
            let video = "<video controls='controls' src='"+ videoContent +"'> </video>";
            video.style.cursor = "pointer";
            video.addEventListener('click', function() {
                window.location.href = `videoPostado.html?id=${video.id}`;
            })
            // width='200px' height='200px'
             
            const infoDiv = document.createElement('div');
            infoDiv.className = 'videosListaInfo';

            const titulo = document.createElement('h4');
            titulo.className = 'textoVideo';
            titulo.textContent = videos.titulo;

            infoDiv.appendChild(titulo);
            videosDiv.innerHTML = video;
            videosDiv.appendChild(infoDiv);

            videosLista.appendChild(videosDiv);

        })
    } else {
        console.log("erro", result.sql);
    }
})

