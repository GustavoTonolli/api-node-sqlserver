const sequelize = require('sequelize');

const database = new sequelize('DatabaseNodeApi','sa','123456', 
    {
        dialect:'mssql',host:'localhost',port:50411
    });

    database.sync();

module.exports = database;
