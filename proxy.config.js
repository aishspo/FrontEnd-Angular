const proxy = [
  {
    context: ['/api'],
    target: 'http://localhost:7016',
    secure: false,
    logLevel: 'debug',
    pathRewrite: {'^/api' : ''}
  }

];module.exports = proxy;
