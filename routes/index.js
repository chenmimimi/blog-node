var User = require('../model/User.js')

const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/test', async(ctx, next) => {
  "use strict";
  const result = await User.find({}, {_id: 0, "name": 1, "age": 1})
  const totalElements = await User.find({}).countDocuments()
  const totalPages = Math.ceil(totalElements / 10)
  
  ctx.set('content-type', 'application/json')
  ctx.body = {
    list: result,
    totalElements: totalElements,
    totalPages: totalPages,
  }
})

module.exports = router
