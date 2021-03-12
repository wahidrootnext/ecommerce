const express = require('express')
const app = express()
app.set("port", process.env.PORT || 3000)
app.set('view engine', 'ejs');
app.use(express.static('dist'))

app.get('/shop', function(req, res) {
    res.render('pages/shop')
})
app.get('/cart', function(req, res) {
    res.render('pages/cart')
})
app.get('/checkout', function(req, res) {
    res.render('pages/checkout')
})
app.get('/product', function(req, res) {
    res.render('pages/product')
})
app.get('/', function(req, res) {
    res.render('pages/index')
})
app.get('*', function(req, res) {
    res.send("404 Not Found")
})

app.listen(app.get('port'), function() {
    console.log("Application running at http://localhost:" + app.get('port'))
})