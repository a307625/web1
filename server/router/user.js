import Router from 'koa-router'
import convert from 'koa-convert'
import _validate from 'koa-req-validator'
import Config from '../config'
import User from '../model/user'
import { Token } from '../utils/token'
import { mailTransport } from '../utils/email'

const validate = (...args) => convert(_validate(...args))
const router = new Router({
  prefix: `/EBSweb/${Config.apiversion}/manager`
})


router.post('/signup',
  validate({
    'email:body':['require', 'isEmail','email is required/not email'],
    'password:body':['require', 'isAlphanumeric', 'password is required/not Alphanumeric']
  }),
  async(ctx,next)=>{
    try {
      const {email, password} = ctx.request.body
      const userInfo = await User.findOne( { email } )
      if(userInfo){
        const Conflict = `${email}已經註冊過了`
        ctx.status = 409
        ctx.message = "error"
        ctx.response.body = {
          error: Conflict
        }
      } else {
        const maxNum = 10000;
        const code = ('0000' + Math.floor(Math.random() * maxNum)).substr(-4)
        let user = new User({...ctx.request.body, code})
        // await user.save()
        await mailTransport( email, code )
        const { status } = user
        ctx.status = 200
        ctx.message = "success"
        ctx.response.body = {
          email,
          status
        }
      }
    } catch(err) {
      if(err.output.statusCode){
        ctx.throw(err.output.statusCode, err)
      }else {
        ctx.throw(500, err)
      }
    }
  }
)

router.post('/auth',
  validate({
    'email:body':['require', 'isEmail','email is required/not email'],
    'password:body':['require', 'isAlphanumeric', 'password is required/not Alphanumeric'],
    'code:body':['require', 'isAlphanumeric', 'code is required/not Alphanumeric'],
  }),
  async(ctx, next)=>{
    try {
      const { email, password, code } = ctx.request.body
      const user = await User.findOne( { email } )
      if (user) {
        const check = await user.validatePassword(password)
        if (check && ( code == user.code)) {
          const auth = await Token(email)
          const status = 1
          await user.update({
            status,
            auth
          })
          ctx.status = 200
          ctx.message = "success"
          ctx.response.body = {
            email,
            status
          }
        }else {
          const NotAcceptable = '驗證錯誤'
          ctx.status = 406
          ctx.message = "error"
          ctx.response.body = {
            error: NotAcceptable
          }
        }
      }
    } catch(err) {
      if(err.output.statusCode){
        ctx.throw(err.output.statusCode, err)
      }else {
        ctx.throw(500, err)
      }
    }
  }
)

router.post('/signin',
  validate({
    'email:body':['require', 'isEmail','email is required/not email'],
    'password:body':['require', 'isAlphanumeric', 'password is required/not Alphanumeric']
  }),
  async(ctx,next)=>{
    try {
      const {email, password} = ctx.request.body
      const user = await User.findOne( { email } )
      if (user) {
        const { status } = user
        const check = await user.validatePassword(password)
        if (check && status) {
          const { auth } = user
          ctx.status = 200
          ctx.message = "success"
          ctx.response.body = {
            auth
          }
        }else {
          const NotAcceptable = '登入錯誤'
          ctx.status = 406
          ctx.message = "error"
          ctx.response.body = {
            error: NotAcceptable
          }
        }
      }
    } catch(err) {
      if(err.output.statusCode){
        ctx.throw(err.output.statusCode, err)
      }else {
        ctx.throw(500, err)
      }
    }
  }
)


export default router
