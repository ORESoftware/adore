/**
 * Created by amills001c on 2/8/16.
 */


module.exports = (suman) => {

    suman.configure({

        'request': function (cb) {

            setTimeout(function () {
                cb(null, {});
            }, 100);

        },
        'socketio': function (cb) {

            setTimeout(function () {
                cb(null, {});
            }, 100);
        },
        'choodles': function (cb) {

            setTimeout(function () {
                cb(null, {
                    choodles: true
                });
            }, 100);
        }
    });

};