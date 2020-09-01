//MVC, model view controller,model 和 view 通过controller 链接
//model用于存数据，比如people.js
//controller 跟路径route链接，一个路径对应一个资源，还有route handler
//model写函数，controller调用函数
//package-->npm init -y,npm i express, npm i -D nodemon, npm i cors, npm i dotenv
//npm i helmet morgan winston三个package，
//winston提供代替console.log功能，可以提供更多层级，设置warning，detects， development，info。。。，可以设置，在dev模式下-->show all， 在prod情况下show warning, 并且可以记录到本地文件或数据库中
//helmet-->保护server，server并不时常做更新
//morgan-->日志上的打印，有不同的打印级别
//造轮子
//pm2,帮助启动多个nodeserver,npm i pm2,在根目录下写ecosystemconfig.js，根据document写环境变量
//"start": "pm2-runtime start ecosystem.config.js --env production"
require('dotenv').config()

const express =  require('express')
//npm i cors
const cors = require('cors')
const routes = require('./routes')
const app = express()
app.use(cors())
app.use(express.json())

//加版本号v1
app.use('/v1',routes)

//error handing
app.use((err,req,res,next)=>{
    //log
    return res.status(499).send('Unable to bandle the request')
})

//process当前进程
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`)
})

