var shell = require('shelljs'),
    shout = require('./');

console.log();

shout.mkdir('bleach');
shout.to('bleach/ichigo', 'Bankai!');
shout.rm('-rf', 'bleach');

console.log();