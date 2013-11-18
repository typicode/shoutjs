var logan = require('logan'), 
    shell = require('shelljs');

logan.set({
  cp    : ['  copy   % to %', 'cyan . cyan .'],
  rm    : ['  remove %     ', 'red          '],
  mv    : ['  move   % to %', 'cyan . cyan .'],
  mkdir : ['  create %     ', 'cyan         '],
  to    : ['  create %     ', 'cyan         '],
  exec  : ['  exec   %     ', 'blue .       ']
});

var __slice = Array.prototype.slice;

module.exports = {
  // expose logan
  logan: logan,

  // Flatten an array
  _flatten: function(array) {
    return [].concat.apply([], array);
  },

  // returns true is string starts with '-''
  _isOption: function(string) {
    return string.charAt(0) === '-'
  },

  // Removes items from array which start with '-'
  _stripOptions: function() {
    var that = this;
    return __slice.call(arguments).filter(function(item) {
      return !that._isOption(item);
    });
  },

  // Returns "first" part of an array (ie all except last)
  // useful for cp or mv functions which can have source(s) and a dest
  _getSources: function() {
    return this._stripOptions.apply(this, arguments).slice(0, -1);
  },

  // Returns last item of an array
  _getDest: function() {
    return this._stripOptions.apply(this, arguments).slice(-1)[0];
  },

  /*
   * ShellJS wrapped functions
   */
  cp: function() {
    var sources = this._getSources.apply(this, arguments),
        dest    = this._getDest.apply(this, arguments);

    sources.forEach(function(source) {
      logan.cp(source, dest);
    });

    shell.cp.apply(this, __slice.call(arguments));
  },

  rm: function() {
    var files = this._stripOptions.apply(this, arguments);

    files.forEach(logan.rm);

    shell.rm.apply(this, __slice.call(arguments));
  },

  mv: function() {
    var sources = this._getSources.apply(this, arguments),
        dest    = this._getDest.apply(this, arguments);

    sources.forEach(function(source) {
      logan.mv(source, dest);
    });

    shell.mv.apply(this, __slice.call(arguments));
  },

  mkdir: function() {
    var dirs = this._stripOptions.apply(this, arguments);
    
    dirs.forEach(logan.mkdir);

    shell.mkdir.apply(this, __slice.call(arguments));
  },

  to: function() {
    var file   = arguments[0],
        string = arguments[1];

    logan.to(file);

    string.to(file);
  },

  exec: function() {
    logan.exec(arguments[0]);

    shell.exec.apply(this, __slice.call(arguments));
  }
}