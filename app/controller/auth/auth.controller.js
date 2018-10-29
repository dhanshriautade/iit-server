var mysqlQuery = require('../../common/mysqlHelper')
// var dateFormat = require('dateformat');

function login(req, res) {
    var param = req.body;
    if (!param.username && !param.password)
        return res.json({ error: true, message: "Please provide valid credentials" })

    var query = "SELECT * FROM user_master WHERE email_id='" + param.email_id + "' AND password='" + param.password + "'";
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })
        if (result.length > 0) {
            var payload = {
                id: result[0].id,
                email: result[0].email,
                first_name: result[0].first_name,
                last_name: result[0].last_name,
                favourite_question: result[0].favourite_question
            }

            return res.json({ error: false, result: payload })
        }
        return res.json({ error: true, message: 'Username/ Password invalid' })
    })
}
function register(req, res) {
    var param = req.body
    var query = "INSERT INTO `user_master`(`first_name`, `last_name`, `email_id`, `password`, `favourite_question`, `answar`) VALUES ('" + param.first_name + "','" + param.last_name + "','" + param.email_id + "','" + param.password + "','" + param.favourite_question + "','" + param.answar + "')";
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })
        else
            return res.json({ error: false, message: 'Record inserted' })
    })
}
function checkAnswar(req, res) {
    var param = req.body[0]
    var query = "SELECT `answar` FROM `user_master` WHERE id='" + param.id + "'";
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })
        if (result[0].answar == param.answar)
            return res.json({ error: false, message: 'Correct answar' })
        else
            return res.json({ error: true, message: 'Wrong answar' })


    })
}
module.exports = {
    login: login,
    register: register,
    checkAnswar: checkAnswar
}