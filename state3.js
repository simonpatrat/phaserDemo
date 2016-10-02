demo.state3 = function() {};
demo.state3.prototype = {
    preload: function() {},
    create: function() {
        console.log('State 3');
        game.stage.backgroundColor = '#80FF80';

    },
    update: function() {}
};