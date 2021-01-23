const express = require('express');
const cookieSession = require('cookie-session')
const app = express()

app.use(cookieSession({
  name: 'my-session',
  // 随机生成密钥
  secret: '7EjfQ0tbntWr380eHytPMZcydC1e3WKD',
  maxAge: 1000 * 3600 * 24 * 20,
}))

app.get('/', (req, res) => {
  // btoa(JSON.stringify({ tokenA: 'foo', tokenB: 'bar' })) === 'eyJ0b2tlbkEiOiJmb28iLCJ0b2tlbkIiOiJiYXIifQ=='
  req.session.tokenA = 'foo'
  req.session.tokenB = 'bar'

  res.send(' I am home')
})

app.listen(3900, () => {
  console.log('I am listening port 3900...');
});
