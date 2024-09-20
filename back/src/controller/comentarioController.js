const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeComentario(request, response){
    const params = Array(
        request.body.user_id,
        request.body.comentario,
        request.body.created_at,
        request.body.video_id
    );

    const query = "INSERT INTO comentarios(user_id, comentario, created_at, video_id) VALUES(?,?,?,?)";

    connection.query(query, params, (err, results) => {
        if(results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Ops, deu problema!",
                    data: err
                })
        }
    })
}

module.exports = {
    storeComentario
}