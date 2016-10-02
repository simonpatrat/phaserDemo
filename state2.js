demo.state2 = function() {};
demo.state2.prototype = {
    preload: function() {},
    create: function() {
        console.log('State 2');
        game.stage.backgroundColor = '#777888';
        addChangeStateEventlisteners();

    },
    update: function() {}
};