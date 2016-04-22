# univ-config

<br>
<a href="https://nodei.co/npm/npm-univ-config/"><img src="https://nodei.co/npm/npm-univ-config.png?downloads=true&downloadRank=true&stars=true"></a>
<br>

this module is designed to work with any configuration loaded synchronously

your configuration should be on the local filesystem and accessed synchronously


### example usage

```
// (near the top of any file)
const config = require('univ-config')(module, '*my-server', 'config/setup.js');
```

### general example

```
const config = require('univ-config')(module, String('*unique-identifier'),String('path-to-config-provider'));
```

the first argument is the naked module value from a CommonJS module

the second argument is a unique identifier which identifies the configuration stored in a hash

the third argument is the path to a module in your project that exports a function, and that function returns an object, 
such as an nconf instance, using nconf.Provider(), or just a POJSO


the 'path-to-config-provider' value must be relative to the root of your project.