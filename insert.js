const { user_game } = require('./models')

user_game.create({
    username: 'afel',
    password: 'Afel123',
    email: 'admin',
    generate_random: 'admin'
   })
    .then(result => {
      console.log(result)
})