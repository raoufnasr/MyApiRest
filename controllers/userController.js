var models = require('../models');
const Op = models.Sequelize.op;

exports.addUser = (req, res) => {
    var input = JSON.parse(JSON.stringify(req.body));
    var data = {
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        password: input.password,
        role: input.role
    }
    models.user.create(data).then(result => {
        res.status(201).send({
            message: 'User successfully created',

        })
            .catch(err => {
                res.status(400).send({
                    message: 'An error occurred',

                })
            })
    })

}


exports.updateUser = (req, res) => {
    var input = JSON.parse(JSON.stringify(req.body));
    var option = {
        where: {
            id: req.params.id
        }
    }
    var data = {
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        password: input.password,
        role: input.role
    }
    models.user.findOne(option).then(result => {
        if (result) {
            return result.update(data).then(result1 => {
                res.status(200).send({
                    message: 'User successfully modified',
                })
            })
        }
        else {
            return res.status(404).send({
                message: 'User was not found.',
            })
        }

    }).catch(err => {
        res.status(400).send({
            message: 'An error occurred',

        })
    })

}


exports.deleteUser = (req, res) => {
    var input = JSON.parse(JSON.stringify(req.body));
    var option = {
        where: {
            id: req.params.id
        }
    }

    models.user.findOne(option).then(result => {
        if (result) {
            return result.destroy(option).then(result1 => {
                res.status(200).send({
                    message: 'User successfully deleted',

                })
            })
        }
        else {
            return res.status(404).send({
                message: 'User was not found.',

            })
        }

    }).catch(err => {
        res.status(400).send({
            message: 'An error occurred',

        })
    })

}

exports.getUser = (req, res) => {
    var input = JSON.parse(JSON.stringify(req.body));
    var option = {
        where: {
            id: req.params.id
        }
    }

    models.user.findOne(option).then(result => {
        if (result) {

            res.status(200).send({
                user: result
            })

        }
        else {
            return res.status(404).send({
                message: 'User was not found.',
            })
        }

    }).catch(err => {
        res.status(400).send({
            message: 'An error occurred',
        })
    })

}

exports.getUsers = (req, res) => {
    var input = JSON.parse(JSON.stringify(req.body));
    models.user.findAll().then(result => {
        res.status(200).send({
            users: result
        })
    }).catch(err => {
        res.status(400).send({
            message: 'An error occurred',

        })
    })

}