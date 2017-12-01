define(['backbone', 'mustache', 'utilities/templates', 
    'model.item', 'collection.item-list'],
function(Backbone, Mustache, Templates,
    Item, ItemList) {
    var itemListView = Backbone.View.extend({
        el: $('.js-vacancies'),
        collection: ItemList,
        initialize: function() {
            this.listenTo(this.model,'change', this.render);
        },

        template: function(template, item) {
            return Mustache.render(template, item);
        },
        
        render: function(data) {
            var compiledData = this.template(Templates.compiled.objectList, data);
            
            this.$el.append(compiledData);

            return this;
            
        },

        successHandler: function (collection, rawData, requestData) {
            var i;

            if (collection.length > 0) {
                for(i = 0; i < collection.length; i++) {
                    var item = collection.models[i].attributes;

                    item.id = collection.models[i].cid; // fallback to id

                    this.render(item);
                }
            }
        },

        errorHandler: function (error) {
            console.log(error);
        }
    });

    return new itemListView();
});
