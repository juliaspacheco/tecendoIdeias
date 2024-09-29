// Pág de detalhes do vídeo
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search)
    const videoId = urlParams.get("id")

    if(videoId) {
        // Verifica se um ID de vídeo foi extraído da URL
        fetch(`http://localhost:3001/api/get/video/detalhes/${videoId}`)
        // faz uma solicitação GET para a URL fornecida, que é construída usando o ID do vídeo
        .then(response => response.json())
        // converte a resposta da solicitação para um objeto
        .then(data => {
            if(data.success) {
                let detalhesMain = document.getElementById("detalhes")
                
                detalhesMain.innerHTML = 
                `<section class="videoPostado">
                <section class="videoInfo">
                    <h4 id="nomeUsuario"></h4>
                    <video src="http://localhost:3001/uploads/${data.data.video}" controls></video>                                       
                    <h3>${data.data.titulo}</h3>
                    <section class="info">
                        <div class="separacaoFundo">
                            <h4>Descrição</h4>
                            <p>${data.data.descricao}</p>
                        </div>
                        <div class="extras">
                            <div class="separacaoFundo">
                                <h4>Moldes</h4>
                                <img src="http://localhost:3001/uploads/${data.data.moldes}">
                                <button id="baixarMoldes">Baixar</button>
                            </div>
                            <div  class="separacaoFundo">
                                <h4>Materiais</h4>
                                <div>
                                    <p id="materiaisLink">${data.data.materiais}</p>
                                </div>
                                <button id="botaoCopiar">Copiar link</button>
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
                    <h4 id="">Seu comentário</h4>
                    <div>
                        <input id="comentario" type="text" placeholder="Adicione um comentário">
                        <button id="postar" onclick="postar(event)">Postar</button>
                    </div>
                </section>
            </section>
        </section>
                `;
                // Copiar link dos materiais
                let link = document.getElementById('materiaisLink');
                let botaoCopiar = document.getElementById('botaoCopiar');

                botaoCopiar.addEventListener('click', () => {
                    // API Clipboard para conseguir copiar texto de <p>
                    navigator.clipboard.writeText(link.textContent)
                        .catch(err => {
                            console.error('Erro: ', err);
                        });
                });

                let usuario = JSON.parse(localStorage.getItem("usuarioLogado"))
                
                document.getElementById("nomeUsuario").innerHTML = usuario.nome;


            } else {
                const detalhesMain = document.getElementById("detalhes")
                detalhesMain.innerHTML = `Não há videos`
            }
        });
    }
})