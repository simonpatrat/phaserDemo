demo.state5 = function() {};
demo.state5.prototype = {
    preload: function() {},
    create: function() {
        console.log('State 5');
        game.stage.backgroundColor = '#444FF2';
        addChangeStateEventlisteners();

    },
    update: function() {}
};