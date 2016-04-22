/**
 * Created by amills001c on 8/25/15.
 */



const path = require('path');
const fs = require('fs');
const residence = require('residence');

//////////////////////////////////////

const configs = {};   //all configs in this node.js process will be stored in this here hash, make sure it's finite data

//////////////////////////////////////


module.exports = function initModuleConfigViaAdore(module, identifier, pathToProvider) {


    if (typeof module !== 'object' || !module.filename) {
        throw new Error('first argument to adore function must be "module"');
    }

    if (String(identifier).indexOf('*') < 0) {
        throw new Error('did not pass in an identifier to adore');
    }

    if (configs[identifier]) {
        return configs[identifier]; //config has already been stored, so we return it
    }
    else {
        if (pathToProvider) {
            try {
                var configPath;
                if (path.isAbsolute(pathToProvider)) {  //consumer of this lib has been so kind as to provide an absolute path, the risk is now yours
                    configPath = path.normalize(pathToProvider);
                }
                else {
                    var root = residence.findProjectRoot(path.dirname(module.filename));
                    configPath = path.resolve(path.normalize(root + '/' + pathToProvider));
                }

                return configs[identifier] = require(configPath)();
            }
            catch (err) {
                throw new Error('adore package could not resolve the path to your config provider module - given as: ' + pathToProvider +  '\n\n .... or this happened: ' + err.stack);
            }
        }
        else {
            throw new Error('no config key matched the identifier but no path to config provider was passed to adore');
        }
    }

};