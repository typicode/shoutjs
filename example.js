var shell = require('shelljs'),
    shout = require('./');

// shell.cd('/tmp')
// shout.rm('-rf', 'foo');
// shout.mkdir('foo');
// shout.exec('touch foo/some_file');
// shout.to('foo/some_file', 'hello');
// shout.cp('foo/some_file', 'foo/some_other_file');
// shout.mkdir('foo/some_dir');
// shout.cp('foo/some_file', 'foo/some_other_file', 'foo/some_dir')
// shout.mv('foo/some_dir', 'foo/some_other_dir')

console.log();

shout.mkdir('bleach');
shout.to('bleach/ichigo', 'Bankai!');
shout.rm('-rf', 'bleach');

console.log();