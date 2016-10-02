var demo = {};
demo.state0 = function() {};
demo.state0.prototype = {
    preload: function() {},
    create: function() {
        console.log('State 0');
        game.stage.backgroundColor = '#80FF80';

    },
    update: function() {}
};