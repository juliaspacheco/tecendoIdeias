const connection = require('../config/db');
const dotenv = require('dotenv').config();

// async function = permite que um programa inicie uma tarefa 
// demorada e continue a responder a outros eventos enquanto a tarefa é executada, 
// em vez de ter de esperar que a tarefa seja concluída
async function cadastro(request, response) {
    // contém os valores recebidos do corpo da requisição (request.body - informação enviada pelo cliente para a API) 
    // que vão ser inseridos na tabela do banco de dados
    const params = Array(
        request.body.email,
        request.body.nome,
        request.body.senha
    );
    console.log(request.body)
    const query = "INSERT INTO usuarios(email, nome, senha) VALUES(?,?,?)";
    // query = solicitação de informações feita ao banco de dados
    // params = Valores que vão ser inseridos nos lugares dos parâmetros na consulta SQL

    connection.query(query, params, (err, results) => {
        // Verifica se há resultados da consulta
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