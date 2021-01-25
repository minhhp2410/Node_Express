const path= require('path')
const express= require('express')
const morgan = require('morgan')
const app=express()
const exphbs  = require('express-handlebars')
const port=3000

app.use(express.static(path.join(__dirname,'public')))

//HTTP logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', exphbs({
    extname:".hbs"
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resource/views'));
console.log('path', path.join(__dirname,'resource/views'))
app.get('/',(req, res)=> res.render('home'));

app.listen(port,()=>console.log(`app listening at http://localhost:${port}`));