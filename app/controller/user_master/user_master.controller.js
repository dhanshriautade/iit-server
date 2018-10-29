var mysqlQuery = require('../../common/mysqlHelper')


function selectProfileForEdit(req, res) {
    var id = req.params.id
    var query = "SELECT * FROM `user_master` WHERE `id`=" + id + "";
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })
        else
            return res.json({ error: false, result: result })
    })
}

function updateProfile(req, res) {
    var param = req.body
    var query = "UPDATE `user_master` SET `first_name`='" + param.first_name + "',`last_name`='" + param.last_name + "',`email_id`='" + param.email_id + "',`password`='" + param.password + "',`favourite_question`='" + param.favourite_question + "',`answar`='" + param.answar + "' WHERE `id`=" + param.id + "";
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })
        else
            return res.json({ error: false, message: 'Profile updated' })
    })
}
module.exports = {
    updateProfile: updateProfile,
    selectProfileForEdit: selectProfileForEdit,
}