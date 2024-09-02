// Pág de detalhes do vídeo
document.addEventListener('DOMContentLoaded', function() {
// adiciona um ouvinte de evento que executa a função assíncrona fornecida assim que 
// o conteúdo HTML da página for completamente carregado

// window.location.search retorna a parte da URL que contém os parâmetros de consulta
// para que ocorra a manipulação dos parâmetros da URL ao acessar seus valores
    const urlParams = new URLSearchParams(window.location.search)
    const videoId = urlParams.get("id")

    if(videoId) {
        // Verifica se um ID de vídeo foi extraído da URL
        fetch(`http://localhost:3001/api/get/video/detalhes/${videoId}`)
        // faz uma solicitação GET para a URL fornecida, que é construída usando o ID do vídeo
        .then(response => response.json())
        // converte a resposta da solicitação para um objeto
        .then(data => {
            // contém os detalhes do vídeo retornados pela API
            if(data.success) {
                // Verifica se os detalhes do vídeo foram encontrados, se sim:
                let detalhesMain = document.getElementById("detalhes")
                detalhesMain.innerHTML = 
                `<section class="videoPostado">
                <section class="videoInfo">
                    <h4>usuário</h4>
                    <video src="http://localhost:3001/uploads/${data.data.video}" controls></video>
                                                            // data refere-se ao objeto JSON retornado pela resposta da 
                                                            // API após ser convertido com response.json()
                                                            // O segundo data refere-se ao campo data dentro desse objeto(que tem as 
                                                            // informações do video, titulo e descrição)
                                                            
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
                <section class="comentarios">
                <h3>COMENTÁRIOS</h3>
                <div class="container">
                    <div class="containerDiv">
                        <h4 id="idUsuario">Usuário</h4>
                        <p id="comentario">Lorem ipsum dolor sit amet.</p>
                        <div class="botoes">
                            <button>Ver resposta(s)</button>
                            <button>Responder</button>
                        </div>
                    </div>
                    <div class="containerDiv">
                        <h4>Usuário</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua.</p>
                        <div class="botoes">
                            <button>Ver resposta(s)</button>
                            <button>Responder</button>
                        </div>
                    </div>
                    <div class="containerDiv">
                        <h4>Usuário</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua.</p>
                        <div class="botoes">
                            <button>Ver resposta(s)</button>
                            <button>Responder</button>
                        </div>
                    </div>
                    <div class="containerDiv">
                        <h4>Usuário</h4>
                        <p>Comentário</p>
                        <div class="botoes">
                            <button>Ver resposta(s)</button>
                            <button>Responder</button>
                        </div>
                    </div>
                    <div class="containerDiv">
                        <h4>Usuário</h4>
                        <p>Comentário</p>
                        <div class="botoes">
                            <button>Ver resposta(s)</button>
                            <button>Responder</button>
                        </div>
                    </div>
                    <div class="containerDiv">
                        <h4>Usuário</h4>
                        <p>Comentário</p>
                        <div class="botoes">
                            <button>Ver resposta(s)</button>
                            <button>Responder</button>
                        </div>
                    </div>
                </div>
                <section class="seuComentario">
                    <h4 id="idUsuario">Seu usuário</h4>
                    <div>
                        <input id="comentario" type="text" placeholder="Adicione um comentário">
                        <button id="postar" onclick="postar(event)">Postar</button>
                    </div>
                </section>
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