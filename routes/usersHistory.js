var express = require('express');
var router = express.Router();
const { user_game, user_game_history } = require('./../models');

router.get('/', async (req, res) => {
	const user = await user_game.findAll({
		include: [ { model: user_game_history, as: 'user_history' } ]
	});
	res.json(user);
});

router.get('/views', async (req, res) => {
	const user = await user_game.findAll({
		include: [ { model: user_game_history, as: 'user_history' } ]
	});
	res.render('index', { user });
});

module.exports = router;