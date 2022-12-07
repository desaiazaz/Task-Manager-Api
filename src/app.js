const express = require('express')
const bcrypt = require('bcryptjs')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

// middleware function to block get/post request
// app.use((req,res,next) =>{

//     console.log(req.method,req.path)
//     next()
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app

// Encrypted password process example 
// const myFunction = async () =>{

//    const password = 'Red12345!'
//    const hashedPssword = await bcrypt.hash(password,8)

//    console.log(password)
//    console.log(hashedPssword)

// }

// myFunction()

//Jsonwebtoken 
// const jwt = require('jsonwebtoken')
// const myFunction = async () =>{

//    const token= await jwt.sign({_id:'abc123'},'thisismynewcourse',{expiresIn:'7 days'})
//    console.log('TOKEN: '+token)

//    const data =  jwt.verify(token,'thisismynewcourse')
//    console.log(data)
// }

// myFunction()


// const Task = require('./models/task')
//  const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5c2e505a3253e18a43e612e6')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('6375f6f2c9382607df1bfccf')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()

//file upload with size limit and extension 

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 100000
//     },
//     fileFilter(req, file, cb) {
//         // if (!file.originalname.endsWith('.pdf')) {
//         //     return cb(new Error('Please upload a PDF document'))
//         // }

//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a Word document....'))
//         }

//         cb(undefined, true)
//     }
// })
// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// })



