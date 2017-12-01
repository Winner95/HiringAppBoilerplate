define(['jquery'],
function($) {
    var Templates = {};

    Templates.preload = {
            'objectList': 'app/tpl/item_list.mst',
            'objectDetailed': 'app/tpl/item_detailed.mst',
        };

    Templates.compiled = {};

    Templates.loadTemplate = function(name, adress) {
        $.get(adress, function(templateLoaded) {
            Templates.compiled[name] = templateLoaded;
        });
    };

    Templates.loadAllTemplates = function(list, loader) {
        var templates = list;

        for (var template in templates) {
            if (templates.hasOwnProperty(template)) {
                loader(template, templates[template]);
            }
        }
    };

    Templates.loadAllTemplates(Templates.preload, Templates.loadTemplate);

    return Templates;
});
