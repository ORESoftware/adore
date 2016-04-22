# adore

this module is designed to work with any configuration loaded synchronously


### example usage

```
// (near the top of any file)
const config = require('adore')(module, '*my-server', 'config/setup.js');
```

### general example

```
const config = require('adore')(module, String('*unique-identifier'),String('path-to-config-provider'));
```

* the first argument is the naked module value from a CommonJS module

* the second argument is a unique identifier which identifies the configuration stored in a hash

* the third argument is the path to a module in your project that exports a function, and that function returns an object, 
such as an nconf instance, using nconf.Provider(), or just a POJSO

* the 'path-to-config-provider' value must be relative to the root of your project.