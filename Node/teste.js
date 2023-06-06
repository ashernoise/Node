const Sequelize = require('sequelize')
const sequelize = new Sequelize ('teste','root', 'adm74568',{
    host:"localhost",
    dialect: 'mysql'
})


//criar tabela
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING //limite de texto
    },
    conteudo: {
        type: Sequelize.TEXT // não tem limite de texto
    }
})

//postagem
/*Postagem.create({
    titulo:"Um titulo",
    conteudo:"Conteudo qualquer"
})*/


//criar tabela
const Usuario = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER // inteiros 
    },
    email:{
        type: Sequelize.STRING
    }
})

//inserir informações no banco
Usuario.create({
    nome:"Gabriel",
    sobrenome:"Olimpio",
    idade: 25,
    email: "gabriel@email.com"
})

// tabela postagens Postagem.sync({force: true})
// tabela usuarios Usuario.sync({force: true})