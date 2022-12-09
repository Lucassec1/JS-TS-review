require('dotenv').config()

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: 'postgres',
    dialectOptions: {
        require: true,
    }
});

const Conection = async () => {
    try {
        await sequelize.sync({ force: false})
    } catch(error) {
        console.error(error);
    }
}

Conection()

module.exports = sequelize;
