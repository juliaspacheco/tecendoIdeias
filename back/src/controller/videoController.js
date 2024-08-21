const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeVideo(request, response) {
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
            let idVideo = results.insertId;

            let query2 = "INSERT INTO moldes(moldes,id_video) values(?,?)";

            request.files.forEach((file, index) => {
                if (index > 0) {
                    connection.query(query2, [file.filename, idVideo], (err2, results2) => {
                        if (results2) {
                            response
                                .status(200)
                                .json({
                                    success: true,
                                    message: "Sucesso",
                                    data: results2
                                })
                        } else {
                            response
                                .status(400)
                                .json({
                                    success: false,
                                    message: "Sem Sucesso",
                                    data: err2
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
    console.log("entrou aqui no get video")

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
            if (results.length > 0) {
                response.status(200).json({
                    success: true,
                    data: results[0],
                    message: "Sucesso!"
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