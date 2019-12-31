const { db } = require('../config/config')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(db.database, db.username, db.password, {
  host: db.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
})

console.log('sequelize', sequelize)

module.exports = sequelize