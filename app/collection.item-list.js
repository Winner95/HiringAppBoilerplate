define(['backbone', 'localstorage', 'model.item', 'view.item-list'],
function(Backbone, Localstorage, Item, ViewItemList) {
    var ItemList = Backbone.Collection.extend({
        view: ViewItemList,
        model: Item,
        url: 'app/data/demo.json',
        initialize: function(data) {
            this.fetch({ 
                add: true,
                data: { page: 1 },
                processData: true,
                reset: true,                
                success: this.view.successHandler.bind(this.view),
                error: this.view.errorHandler
            })
        },
    });

    return ItemList;
});
