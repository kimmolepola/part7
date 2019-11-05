const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api/**', { target: 'https://tranquil-bayou-44537.herokuapp.com:3000' }));
}