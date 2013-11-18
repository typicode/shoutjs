# ShoutJS

Make your ShellJS commands explicit and get a beautiful output.

## Example

Get this:

![](http://i.imgur.com/cS6MTiQ.png)

With this:

```javascript
var shout = require('shoutjs');

shout.mkdir('bleach');
shout.to('bleach/ichigo', 'Bankai!');
shout.rm('-rf', 'bleach');
```

## Commands

Supported ShellJS commands are: `cp`, `rm`, `mv`, `mkdir`, `to`.

ShoutJS only wraps ShellJS commands which change the filesystem. 
For usage information, you can go here [ShellJS](https://github.com/arturadib/shelljs). 

There's only ```to``` which differs from ShellJS:

```javascript
var shell = require('shelljs/global'),
    shout = require('shoutjs');

'Bankai!'.to('file');        // ShellJS
shout.to('file', 'Bankai!'); // ShoutJS
```

## Theming

ShoutJS supports theming through [Logan](http://typicode.github.com/logan).
So it's possible to customize ShoutJS output pretty much the way you want.

Here is the default theme:

```javascript
// Default theme
shout.logan.set({
  cp    : ['  copy   % to %', 'cyan . cyan .'],
  rm    : ['  remove %     ', 'red          '],
  mv    : ['  move   % to %', 'cyan . cyan .'],
  mkdir : ['  create %     ', 'cyan         '],
  to    : ['  create %     ', 'cyan         '],
  exec  : ['  exec   %     ', 'blue .       ']
});
```

To override it:

```javascript
//  A bit more old fashioned theme...
shout.logan.set({
  cp    : ['cp % %', 'grey'],
  rm    : ['rm %  ', 'grey'],
  // ...
});
```

## Adding new messages

In many cases, you may want to log more than ShellJS commands for your users.  
The recommanded way is to use [Logan](http://typicode.github.com/logan).

Here's an example:

```javascript
var shout = require('shoutjs'),
    logan = require('logan');

logan.set({
  info: ['  info %', 'yellow']
});

logan.info('starting script...');
shout.rm('file.txt');
logan.info('done');
```

## Configuration

You can disable ShoutJS output using ```logan.silent``` option.

```javascript
shout.logan.silent = true;
shout.to('ichigo.txt', 'Bankai!'); // No output
```

## Issues

Have a bug or missing a new command introduced in ShellJS? Please create an issue here on GitHub!

## Themes

If you've created a theme for ShellJS feel free to drop me a message [@typicode](https://github.com/typicode).

