demo.state6 = function() {};
demo.state6.prototype = {
    preload: function() {},
    create: function() {
        console.log('State 6');
        game.stage.backgroundColor = '#7BE744';
        addChangeStateEventlisteners();

    },
    update: function() {}
};