define(['backbone', 'utilities/router'],
function(Backbone, Router) {    
    var ApplicationView = Backbone.View.extend({
        el: document.body,
        events: {
            'tap [data-href]': 'pageOpen',
            'tap [data-toggle="modal"]': 'openModal'
        },
        router: new Router(),
        initialize: function() {            
            this.router.on('route', function(page) {
                
                $('html, body').animate({ scrollTop: 0 }, 200 );

            });

            Backbone.history.start();
        },

        pageOpen: function(e) {
            e.preventDefault();

            var destination = e.currentTarget.getAttribute('data-href');

            if (destination !== '' && destination !== null ) {
                this.router.navigate(destination, {trigger: true});
            } else {
                console.log('destination is not defined.');
            }
        },
        
        openModal: function (e) {
            var offer = e.currentTarget.getAttribute('data-title');

            this.router.navigate('send-offer/' + offer, {trigger: true});
        }
    });

    return ApplicationView;
});