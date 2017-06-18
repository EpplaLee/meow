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
const Comment = sequelize.define('comment', {
    post_id: {
        type: Sequelize.INTEGER,
    },
    content: {
        type: Sequelize.STRING
    },
    user: {
        type: Sequelize.STRING
    }
})
User.sync()
Post.sync()
Comment.sync()
module.exports =  {User, Post, Comment}