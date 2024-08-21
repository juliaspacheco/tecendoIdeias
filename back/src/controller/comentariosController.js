// const connection = require('../config/db');
// const dotenv = require('dotenv').config();

// async function storeComentario(request, response) {
//     let params = Array(
//         request.body.idUsuario,
//         request.body.comentario,
//     )
// }

// console.log(params);

// let query = "INSERT INTO comentarios(idUsuario,comentario) values(?,?)";

// connection.query(query, params, (err, results) => {
//     if (results) {
//         response.status(200).json({
//             success: true,
//             message: "sucesso",
//             data: results
//         })
//     } else {
//         response.status(400).json({
//             success: false,
//             message: "erro",
//             sql: err
//         })
//     }
// });

// module.exports = {
//     storeComentario
// }