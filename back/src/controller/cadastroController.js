const connection = require('../config/db');
const dotenv = require('dotenv').config();

// async function = permite que o programa inicie uma tarefa 
// demorada e continue a responder a outros eventos enquanto a tarefa é executada
async function cadastro(request, response) {
    const params = Array(
        request.body.email,
        request.body.nome,
        request.body.senha
    );
    
    const query = "INSERT INTO usuarios(email, nome, senha) VALUES(?,?,?)";
    // query = solicitação de informações feita ao banco de dados
    // params = valores que vão ser inseridos nos lugares dos parâmetros na consulta SQL

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
    cadastro
}