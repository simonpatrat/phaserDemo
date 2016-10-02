demo.state7 = function() {};
demo.state7.prototype = {
    preload: function() {},
    create: function() {
        console.log('State 7');
        game.stage.backgroundColor = '#CF9355';
        addChangeStateEventlisteners();

    },
    update: function() {}
};