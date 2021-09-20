var express = require('express');
const { body } = require('express-validator');
const { get } = require('.');
const {user_game, user_game_biodata, user_game_history} = require('../models');
var router = express.Router();


router.get('/', async (req, res) =>{
    const user = await user_game.findAll({
        include: [{model: user_game_biodata, as: 'user_biodata'}]
    })
    res.json(user)
})

router.get('/views', async (req, res) =>{
    const user = await user_game.findAll({
        include: [{model: user_game_biodata, as: 'user_biodata'}]
    })
    res.render('index', {user})
})


//ini gabisa :(
// router.post(
//     '/',
//     body('nama').notEmpty().withMessage('nama tidak boleh kosong'),
//     body('alamat').notEmpty.withMessage('alamat tidak boleh kosong'),
//     body('noTelp').notEmpty.withMessage('Nomer Telepon tidak boleh kosong'),
//     async (req, res) => {
//         console.log(req)
//         console.log(errors.array())
//         if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//         }

//         const data = await user_game_biodata.findOne({ where: { username: req.body.username } });

//         if(data) {
//         return res.status(400).json({message: 'username sudah ada'})
//         }
//     }
// )

module.exports = router;