document.addEventListener('DOMContentLoaded', function() {
    const urlParams = URLSearchParams(window.location.search)

    const videoId = urlParams.get("id")

    if(videoId) {
        fetch(`http//localhost:3001/api/get/video/detalhes/${videoId}`).then(response => response.json()).then(data => {
            if(data.success) {
                const detalhesMain = document.getElementById("detalhes")
                detalhesMain.innerHTML = 
                `
                <section class="videoPostado">
                <section class="videoInfo">
                    <h4>usuário</h4>
                    <video src="http//localhost:3001/uploads/${data.data.video}" controls></video>
                    <h3>${data.data.titulo}</h3>
                    <section class="info">
                        <div class="separacaoFundo">
                            <h4>Descrição</h4>
                            <p>${data.data.descricao}</p>
                        </div>
                        <div class="extras">
                            <div class="separacaoFundo">
                                <h4>Moldes</h4>
                                <button>Baixar</button>
                            </div>
                            <div  class="separacaoFundo">
                                <h4>Materiais</h4>
                                <button>Copiar link</button>
                            </div>
                        </div>
    
                    </section>
                </section>


                `
            } else {
                const detalhesMain = document.getElementById("detalhes")
                detalhesMain.innerHTML = `Não há videos`
            }
        })
    }
})