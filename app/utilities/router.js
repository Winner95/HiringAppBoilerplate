define(['backbone', 'utilities/data', 'collection.item-list', 'view.item'],
function(Backbone, appHelper, ItemList, ItemView) {
    var App = {};

    var ApplicationRouter = Backbone.Router.extend({
        routes: {
            '': 'route_home',
            'home': 'route_home',
            'vacancies/:id': 'route_vacancy',
            'send-offer/:page': 'route_offer',
            'deliver': 'route_deliver'
        },

        route_home: function() {
            if(App.vacancies) {
                appHelper.toggleView('.js-vacancy', '.js-vacancies');
            } else {
                App.vacancies = new ItemList();
            }

            if($('.js-vacancies').hasClass('fadeOut')) {
                appHelper.toggleView('.js-vacancy', '.js-vacancies');
            }
        },

        route_vacancy: function(id) {
            var model;

            if(App.vacancies) {
                if(App.modalOpen) {
                    $('#modalWindow').modal('hide');
                } else {
                    model = App.vacancies.get(id);
                    
                    appHelper.showItem(model, ItemView);
                    appHelper.toggleView('.js-vacancies', '.js-vacancy');
                }
            } else {
                this.navigate('home', {trigger: true});
            }

            if($('.js-vacancy').hasClass('fadeOut')) {
                appHelper.toggleView('.js-vacancies', '.js-vacancy');
            }
        },

        route_offer: function(query) {
            var router = this;
            var form = $('#modalWindow');

            if(App.vacancies) {
                App.position = query;

                if(App.modalOpen) {
                    App.modalOpen = false;

                    form.find('input').val('').removeClass('invalid');

                    form.modal('hide');
                } else {
                    App.modalOpen = true;
                    
                    form.modal('show');
                    
                    form.on('hide.bs.modal', function (e) {
                        App.modalOpen = false;

                        form.find('input').val('').removeClass('invalid');

                        router.navigate('vacancies/' + query, {trigger: true});
                    }).bind(null, router);
                }
            } else {
                this.navigate('home', {trigger: true});
            }
        },

        route_deliver: function() {
            $('.modal-progress').addClass('is-active');

            if(App.vacancies && App.position) {
                var Offer = {};
                
                Offer.name = $('#form1').val();
                Offer.currentOccupation = $('#form2').val();
                Offer.email = $('#form3').val();
                Offer.phone = $('#form4').val();
                Offer.position = App.vacancies.get(App.position).attributes.position;
                
                if(!Offer.name) {
                    alert('Укажие имя и фамилию!');

                    $('.modal-progress').removeClass('is-active');
                    
                    return;
                }

                if(!Offer.email) {
                    alert('Укажите адрес электрооной почты!');

                    $('.modal-progress').removeClass('is-active');

                    return;
                }

                if(!Offer.phone) {
                    alert('Укажите номер телефона!');

                    $('.modal-progress').removeClass('is-active');
                    
                    return;
                }

                $.ajax({
                    type: "POST",
                    url: 'https://badoo-email-api.herokuapp.com/sendEmail', // #01 link to backend instance
                    data: Offer,
                    success: function (data) {
                        $('#modalWindow').find('input').val('').removeClass('invalid');
                        $('.modal-progress').removeClass('is-active');
                        $('#modalWindow').modal('hide');
                    },
                    error: function (error) {
                        console.log(error);
                        $('.modal-progress').removeClass('is-active');
                    },
                    dataType: 'json'
                });

            } else {
                this.navigate('home', {trigger: true});
            }
        }
        
    });

    return ApplicationRouter;
});