const express = require('express')
const app = express()
let PORT = 1313
app.use(express.json())
const path = require('path')


app.use(express.static(path.join(__dirname, 'public')));



app.get('/laxx', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/lax.json'));
});


app.get('/max', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', '/max.json'));
});



const main = [
  {
   'id' : 10 ,
   'name': 'majd' ,
   'age' : 24
  }
]


app.get('/lax' , (req, res) => {
   res.send(lax.json)
})


app.get('/main' , (request, response) => {
   response.send(main)
   console.log('DONEEEE')
})

app.post ('/main' , (request, response) => {
   response.send(main)
})


app.listen (PORT , () => {
   console.log('TAMM BENAHA7')
})