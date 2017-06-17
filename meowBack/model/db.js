const Sequelize = require('sequelize')
const sequelize = new Sequelize('database', null, null, {
    dialect: 'sqlite',
    storage: 'database.db'
})
sequelize.authenticate().then(() => {
    console.log('success')
})
.catch(err => {
    console.error('failed', err)
})

const User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING
    }
})
User.sync()

module.exports = User