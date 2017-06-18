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

const Post = sequelize.define('post', {
    post_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: Sequelize.STRING
    },
    url: {
        type: Sequelize.STRING 
    },
    post_type: {
        type: Sequelize.STRING
    },
    user: {
        type: Sequelize.STRING
    }
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
Post.sync()
module.exports =  {User, Post}