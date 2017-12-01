define([],
function() {
    var App = {};

    App.showItem = function(model, View) {
        if(model) {
            new View(model.attributes);
        }
    };

    App.toggleView = function (previous, next) {
        $(previous)
            .removeClass('fadeIn')
            .addClass('animated fadeOut')
            .css({
                'height': '0',
                'overflow': 'hidden',
            });

        $(next)
            .removeClass('fadeOut')
            .addClass('animated fadeIn')
            .removeAttr('style');
    }

    return App;
});
