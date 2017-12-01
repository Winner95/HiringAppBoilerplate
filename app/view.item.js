define(['backbone', 'mustache', 'utilities/templates','model.item'],
function(Backbone, Mustache, Templates, Item) {
    var itemView = Backbone.View.extend({
        el: $('.js-vacancy'),
        model: Item,
        initialize: function(item) {
            this.render(item);
        },
        template: function(template, item) {
            return Mustache.render(template, item);
        },
        render: function(item) {
            var compiled = this.template(Templates.compiled.objectDetailed, item);

            this.$el.html(compiled);

            return this;
        },
    });

    return itemView;
});
