const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeVideo(request, response) {
    console.log("here")
    let params = Array(
        request.body.titulo,
        request.body.descricao,
        request.body.idUsuario,
        request.body.materiais,
        request.files[0].filename
    )

    let query = "INSERT INTO videos(titulo,descricao,user_id,materiais,video) values(?,?,?,?,?)";
    connection.query(query, params, (err, results) => {
        if (results) {
            console.log("results", results)
            let idVideo = results.insertId; 
            // Pega o ID do vídeo inserido

            let query2 = "INSERT INTO moldes(moldes,id_video) values(?,?)";
            console.log(request.files)
            request.files.forEach((file, index) => {
                // Itera sobre cada arquivo enviado. Se o arquivo não for um vídeo MP4, 
                // insere o nome do arquivo e o ID do vídeo na tabela moldes

                if(file.mimetype != "video/mp4") {
                    connection.query(query2, [file.filename, idVideo], (err2, results2) => {
                        if(index == request.files.length  - 1) {
                            // Verifica se o arquivo atual é o último na lista de arquivos, para a resposta de
                            // sucesso ser enviada apenas depois do processamento de todos os arquivos
                            response
                                .status(200)
                                .json({
                                    success: true,
                                    message: "Sucesso",
                                    data: results2
                                })
                        }
                    });
                }              
            });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Não foi possivel cadastrar video",
                    data: err
                })
        }
    })
}

async function getVideo(request, response) {

    const query3 = "SELECT * FROM videos order by id desc"

    connection.query(query3, (err3, results3) => {
       
        if(results3) {
            response
            .status(200)
            .json({
                success: true,
                message: "sucesso",
                data: results3
            })
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "erro",
                sql: err3
            })
        }
    }) 
}

async function getVideosById(request, response) {
    const params = Array(
        request.params.id
    );

    const query = "SELECT * FROM videos where id = ?"
        connection.query(query, params, (err, results) => {
            console.log(err)
            if (results.length > 0) {





                const query2 = "SELECT * FROM moldes where id_video = ?"

                connection.query(query2, params, (err, results2) => {
                    response.status(200).json({
                        success: true,
                        data: results[0],
                        moldes: results2,
                        message: "Sucesso!"
                    })
                })

                
            } else {
                response.status(400).json({
                    success: false,
                    message: "erro",
                    sql: err
                })
            }
        })
    
}

module.exports = {
    storeVideo,
    getVideo,
    getVideosById
}