const express =  require('express')
const app =  express()
const bodyParser =  require('body-parser')
const cors = require('cors')
const http = require('http').Server(app);
const menuRouter =  require('./routes/menu.route')
const mongoose =  require('mongoose')

const port = 4000
const uri = 'mongodb+srv://root:bottega@cluster0.wlf0e.mongodb.net/bottega?retryWrites=true&w=majority'

app.use(cors({origin: '*'}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/menu', menuRouter)

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'bottega'}).then(() => {
    console.log('database connection success +++++++')
}).catch((err) => {
    console.log('database connection faild -------')
    console.log(err)
    console.log('database connection faild -------')
})

http.listen(
    port,
    console.log('server start successfully on port: ', port)
).on('error', function(err) {
    console.log('server error start -------');
    console.log(err);
    console.log('server error end -------');
});
