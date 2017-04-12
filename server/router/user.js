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
      if(userInfo && userInfo.status){
        const Conflict = `${email}已經註冊過了`
        ctx.status = 200
        ctx.message = "error"
        ctx.response.body = {
          registered: 1,
          message: Conflict
        }
      } else {
        const Pass = `${email}註冊成功`
        const maxNum = 10000;
        const code = ('0000' + Math.floor(Math.random() * maxNum)).substr(-4)
        if (userInfo &&  ( userInfo.status == 0 ) ) {
          await User.findOneAndRemove( { email } )
        }
        let user = new User({...ctx.request.body, code})
        await user.save()
        await mailTransport( email, code )
        ctx.status = 200
        ctx.message = "success"
        ctx.response.body = {
          registered: 0,
          message: Pass
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
          const Acceptable = `${email}驗證成功, 請重新登入`
          ctx.status = 200
          ctx.message = "success"
          ctx.response.body = {
            pass: 1,
            message: Acceptable
          }
        }else {
          const NotAcceptable = '驗證錯誤'
          ctx.status = 200
          ctx.message = "error"
          ctx.response.body = {
            pass: 0,
            message: NotAcceptable
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
          const Acceptable = `${email}登入成功`
          const { auth } = user
          ctx.status = 200
          ctx.message = "success"
          ctx.response.body = {
            auth,
            message: Acceptable
          }
        }else {
          const NotAcceptable = '登入錯誤'
          ctx.status = 200
          ctx.message = "error"
          ctx.response.body = {
            auth: null,
            message: NotAcceptable
          }
        }
      }else {
        const NotAcceptable = '無此使用者'
        ctx.status = 200
        ctx.message = "error"
        ctx.response.body = {
          auth: null,
          message: NotAcceptable
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

router.post('/authentication',
  validate({
    'auth:body':[]
  }),
  async(ctx,next)=>{
    try {
      const {auth} = ctx.request.body
      const userDBInfo = await User.findOne({auth})
      let done = 0
      if(userDBInfo){
        const { email } = userDBInfo
        if (email == Config.mail.Sender) {
          done = 2
        }else {
          done = 1
        }
        ctx.status = 200
        ctx.message = "pass"
        ctx.response.body = {
          message: "PASS",
          done
        }
      }else {
        ctx.status = 200
        ctx.message = "deny"
        ctx.response.body = {
          message: "Deny",
          done
        }
      }
    } catch (err) {
      console.log(err)
      if(err.output.statusCode){
        ctx.throw(err.output.statusCode, err)
      }else {
        ctx.throw(500, err)
      }
    }
  }
)

router.get('/list',
  validate({
    'auth:query':['require', 'auth is required']
  }),
  async(ctx,next)=>{
    try {
      const { auth } = ctx.request.query
      const userInfo = await User.findOne( { auth } )
      let email = []
      if (userInfo && ( userInfo.email == Config.mail.Sender )) {
        const user = await User.find({})
        user.forEach((data)=>{
          email.push(data.email)
        })
        const Acceptable = `搜尋使用者成功`
        ctx.status = 200
        ctx.message = "success"
        ctx.response.body = {
          email,
          message: Acceptable
        }
      }else {
        const NotAcceptable = '無授權使用'
        ctx.status = 200
        ctx.message = "error"
        ctx.response.body = {
          email,
          message: NotAcceptable
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

router.post('/delete',
  validate({
    'auth:body':[],
    'delEmail:body':[]
  }),
  async(ctx,next)=>{
    try {
      const {auth, delEmail} = ctx.request.body
      const userDBInfo = await User.findOne({auth})
      if(userDBInfo){
        const { email } = userDBInfo
        if (email == Config.mail.Sender) {
          await User.findOneAndRemove({email: delEmail})
          ctx.status = 200
          ctx.message = "pass"
          ctx.response.body = {
            message: "PASS",
            done: 1
          }
        }else {
          ctx.status = 200
          ctx.message = "deny"
          ctx.response.body = {
            message: "Deny",
            done: 0
          }
        }

      }else {
        ctx.status = 200
        ctx.message = "deny"
        ctx.response.body = {
          message: "Deny",

        }
      }
    } catch (err) {
      console.log(err)
      if(err.output.statusCode){
        ctx.throw(err.output.statusCode, err)
      }else {
        ctx.throw(500, err)
      }
    }
  }
)

export default router
