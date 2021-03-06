const { User, Post, Comment } = require('../model/db') 
var router = require('koa-router')()


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
})

router.get('/posts', async function (ctx, next) {
  let post_type = ctx.request.query.section
  let posts = await Post.findAll({ where: { post_type: post_type}})
  ctx.body = {
    posts: posts
  }
})
router.get('/post/:id', async function (ctx, next) {
  let post_id = ctx.params.id
  let post = await Post.findOne({ where: { post_id: post_id }})
  let comments = await Comment.findAll({ where: { post_id: post_id } })
  ctx.body = {
    post: post,
    comments: comments
  }
})

router.post('/push', async function (ctx, next) {
  let content = ctx.request.body.content
  let url = ctx.request.body.content
  let post_type = ctx.request.body.post_type
  let user = ctx.request.body.user
  let result = await Post.create({
    content: content,
    url: url,
    post_type: post_type,
    user: user
  })
  if(result) {
    ctx.body = {
      postSuccess: true
    }
  }
})
router.post('/comment', async function (ctx, next) {
  let content = ctx.request.body.content
  let user = ctx.request.body.user
  let post_id = ctx.request.body.id
  if(user === '') {
    user = '匿名用户'
  }
  let result = await Comment.create({
    content: content,
    user: user,
    post_id: post_id
  })
  if(result) {
    ctx.body = {
      commentSuccess: true
    }
  }
})
module.exports = router;
