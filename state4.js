demo.state4 = function() {};
demo.state4.prototype = {
    preload: function() {},
    create: function() {
        console.log('State 4');
        game.stage.backgroundColor = '#00FFEE';
        addChangeStateEventlisteners();

    },
    update: function() {}
};