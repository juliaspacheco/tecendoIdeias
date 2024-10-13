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
                                <button id="modalBotao">Ver moldes</button>
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
                        <p id="">Lorem ipsum dolor sit amet.</p>
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
                ${
                    Object.keys(data.moldes).map(function (key) {
                        return "<a target='_blank'  href='http://localhost:3001/uploads/" + data.moldes[key].moldes + "'><img class='imgMolde' src='http://localhost:3001/uploads/" + data.moldes[key].moldes + "'></a>"
                    }).join("")
                   }
               
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

                // "botão" para abrir a janela
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


                // Baixar moldes
                const botaoBaixar = document.getElementById("baixarMoldes");
                if (botaoBaixar) {
                    botaoBaixar.onclick = function() {
                        const urls = Object.keys(data.moldes).map(key => 
                            `http://localhost:3001/uploads/${data.moldes[key].moldes}`
                        );

                        baixarArquivos(urls);
                    };
                }

                async function baixarArquivos(urls) {
                    for (const url of urls) {
                        // itera sobre cada url para conseguir fazer o download de cada arquivo
                        try {
                            const response = await fetch(url);
                            if (!response.ok) throw new Error(`Erro!: ${response.status}`);
                                
                            const blob = await response.blob();
                            // converte a resposta em "blob" (arquivo em forma de dados binários)
                            // blob é importante porque cria um URL que pode ser usado para download

                            const a = document.createElement('a');
                            a.href = URL.createObjectURL(blob);
                            a.download = url.split('/').pop(); // nome do arquivo
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);
                            URL.revokeObjectURL(a.href); 
                        } catch (error) {
                            console.error(`Erro ao tentar baixar ${url}:`, error);
                        }
                    }
                }              
                                    

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


                // Comentários

                let button = document.getElementById("postar");

                button.onclick = async function (event) {

                    event.preventDefault();

                    let user_id = usuario.id;
                    let comentario = document.getElementById("comentario").value;
                    let dataAtual = new Date();
                    let dataPostagem = dataAtual.toISOString().split('T')[0];
                    let video_id = videoId;
                    let data = {user_id, comentario, dataPostagem, video_id}

                    console.log(data);

                    const response = await fetch('http://localhost:3001/api/store/comentario', {
                        method: "POST",
                        headers: {"Content-type": "application/json;charset=UTF-8"},
                        body: JSON.stringify(data)
                    });

                    let content = await response.json();

                    console.log(content);

                    if(content.success) {
                        alert("Sucesso");
                    } else {
                        alert('Não foi criado');
                    }
                }


            } else {
                const detalhesMain = document.getElementById("detalhes")
                detalhesMain.innerHTML = `Não há videos`
            }
        });
    }
})