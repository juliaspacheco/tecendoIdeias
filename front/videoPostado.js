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
                                <img src=>
                                <button id="modalBotao">Baixar</button>
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
            
        <section id="modal" class="modal">
            <div class="moldesJanela">
                <div class="tituloBotao">
                    <h3>MOLDES</h3>
                    <span class="fecharJanela">&times;</span>
                </div>
                <div class="imgMoldeDiv">
                    <img class="imgMolde" src="img/costuraImg1.png">
                    <img class="imgMolde" src="img/costuraImg1.png">
                    <img class="imgMolde" src="img/costuraImg1.png">
                    <img class="imgMolde" src="img/costuraImg1.png">
                    <img class="imgMolde" src="img/costuraImg1.png">
                    <img class="imgMolde" src="img/costuraImg1.png">
                </div>
                <button id="baixarMoldes">Baixar</button>
            </div>
        </section>
        </section>
                `;

                let usuario = JSON.parse(localStorage.getItem("usuarioLogado"))
                document.getElementById("nomeUsuario").innerHTML = usuario.nome;

                // Janela/modal para baixar moldes

                var modal = document.getElementById("modal");
                var botao = document.getElementById("modalBotao");
                var span = document.getElementsByClassName("fecharJanela")[0];

                // botão para abrir a janela
                botao.onclick = function() {
                modal.style.display = "block";
                }

                // quando clicar no "botao" a janela fecha
                span.onclick = function() {
                modal.style.display = "none";
                }

                // muda a cor/estilo quando o mouse passar por cima do botão
                span.onmouseover = function() {
                    span.style.color = "#000"; 
                    span.style.cursor = "pointer"; 
                }

                // volta a cor original quando o mouse sair de cima do botão
                span.onmouseout = function() {
                    span.style.color = "#BA90C6"; 
                    
                }

                // quando clicar fora da janela ela fecha
                window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }};


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

<<<<<<< HEAD
=======
                let usuario = JSON.parse(localStorage.getItem("usuarioLogado"))
                
                document.getElementById("nomeUsuario").innerHTML = usuario.nome;

>>>>>>> 3cc723d290747e97ffd3ce7b8f86db041f26385f

            } else {
                const detalhesMain = document.getElementById("detalhes")
                detalhesMain.innerHTML = `Não há videos`
            }
        });
    }
})