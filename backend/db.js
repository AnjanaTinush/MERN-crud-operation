const mongoose = require("mongoose")

var mongoURL='mongodb+srv://anjana2:anjana@cluster0.rg6ebmf.mongodb.net/Mern_crud'

mongoose.connect(mongoURL , {useUnifiedTopology : true , useNewUrlparser : true}) 

 var connection =mongoose.connection

 connection.on('error' , () => {
    console.log('Mongo DB connetction faield!')
 })

 connection.on('connected' , () => {
    console.log('Mongo DB Connection Successful')
 })

 module.exports= mongoose