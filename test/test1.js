/**
 * Created by amills001c on 12/30/15.
 */



const assert = require('assert');
//const suman = require('C:\\Users\\denman\\WebstormProjects\\suman');
const suman = require('/Users/amills001c/WebstormProjects/ORESoftware/suman');
//const suman = require('suman');

/////////////////////////////////////////////////////
var Test = suman.init(module);
/////////////////////////////////////////////////////


Test.describe('@Test1', function () {


    var config = null;

    this.beforeEach(function () {
        if (config) {
            throw new Error('config should be null before each test!');
        }
    });

    this.afterEach(function () {
        config = null;
    });

    this.it('does not throw', function (done) {

        setTimeout(function () {
            assert.doesNotThrow(function () {  //prob unnecessary, but for clarity

                config = require('../index')(module, '*', 'test/test-config/test-config');
                done();

            });
        }, 1000);

    });


    this.it('does throw part 1', function (/*done*/) {

        setTimeout(function () {
            assert.throws(function () {

                config = require('../index')(module, 'some string without an asterisk', 'test/test-config/test-config');
                //done();


            });
        },1000);

    });

    this.it('does throw part 2', function () {

        assert.throws(function () {

            config = require('../index')(module, '***', 'test/test-config/bad-path');

        });

    });



    this.it('verify config values', function () {

        config = require('../index')(module, '***', 'test/test-config/test-config.js');

        assert.equal(config.prop1, 1);
        assert.deepEqual(config.prop2, {foo: 'bar'}, 'prop2 has unexpected value');
        assert(typeof config.prop3.jungle === 'function', 'prop3 is not a function');

    });


});
