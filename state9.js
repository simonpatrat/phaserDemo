demo.state9 = function() {};
demo.state9.prototype = {
    preload: function() {},
    create: function() {
        console.log('State 9');
        game.stage.backgroundColor = '#C0F370';
        addChangeStateEventlisteners();

    },
    update: function() {}
};