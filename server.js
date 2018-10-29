var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var port = process.env.PORT || 2100; 
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: 1024102420, type: 'application/json' }));
var query = require('./app/common/mysqlHelper')
var auth = require('./app/route/auth/auth.route')
var user_master=require('./app/route/user_master/user_master.route')
// var syscon = require('./app/route/syscon/syscon.route')
var sqlinjection = require('sql-injection')

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/auth', auth)
app.use('/user_master',user_master)
// app.use('/syscon', syscon)
app.use(sqlinjection)

app.listen(port);
console.log('Server running at http://localhost:' + port);
