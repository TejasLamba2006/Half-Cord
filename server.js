const app = require('express')();

app.get('/', (req, res) => res.send('Bot is on powered by Rainbow Studios'));

module.exports = () => {
  app.listen(3000);
}