const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const url = "mongodb+srv://cweston0727:RIpcpqZAFy0W9qQu@cluster0.ahgdx.mongodb.net/pali?retryWrites=true&w=majority"
const dbName = "Pali";

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/api', (req, res) => {
  if (req.query.input) {

    let str = req.query.input
    let re = /[^A-Za-z0-9]/g;
    let checkStr = str.toLowerCase().replace(re, '')
    const newStr = checkStr.split('').reverse().join('');
    let isTrue = null

    if (newStr === checkStr) {
      isTrue = true
    }
    else {
      isTrue = false
    }

    const objToJson = {
      isPali: isTrue,
      originalWord: checkStr,
      reverseWord: newStr
    }

    res.send(objToJson);

  }
})

app.listen(8015, console.log('running'));
