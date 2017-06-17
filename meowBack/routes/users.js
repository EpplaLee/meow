var router = require('koa-router')()
const User = require('../model/db')

router.prefix('/api');

router.get('/login', async function (ctx, next) {
  let username = ctx.request.query.username
  let password = ctx.request.query.password
  let user = await User.findOne({ where: { username: username }})
  if(user.password === password) {
      ctx.set("Access-Control-Allow-Origin", "*")
      ctx.body = {
        loginSuccess: true
      }
    } else {
      ctx.set("Access-Control-Allow-Origin", "*")
      ctx.body = {
        loginSuccess: false
      }
    }
});

router.get('/signup', async function (ctx, next) {
  let username = ctx.request.query.username
  let password = ctx.request.query.password
  
  let user = await User.findAll({
    where: {
      username: username
    }
  })
  console.log(user.length)
  if (user.length !== 0) {
    ctx.set("Access-Control-Allow-Origin", "*")
    ctx.body = {
        signupSuccess: false
      }
  } else {
    User.create({
      username: username,
      password: password
    })
      ctx.set("Access-Control-Allow-Origin", "*")
      ctx.body = {
        signupSuccess: true
    }
    
  }
});

module.exports = router;
