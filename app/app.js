var np = '../node_modules/';

requirejs.config({
    baseUrl: 'app',
    shim: {
        'wow': {
            exports: 'WOW',
        },
        'bootstrap': {
           deps: ['jquery', 'plugins/popper'],
           exports: 'bootstrap',
        },
        mdb : {
            deps : [ 'jquery', 'bootstrap'],
            exports: 'mdb'
        },
        helper : {
            deps : [ 'mdb'],
            exports: 'helper'
        },
    },
    paths: {
        underscore: np + 'underscore/underscore-min',
        backbone: np + 'backbone/backbone-min',
        backboneTouch: np + 'tapjs/dist/tap.min',
        localstorage: np + 'backbone.localstorage/backbone.localStorage-min',
        jquery: np + 'jquery/dist/jquery.min',
        bootstrap: np + 'mdbootstrap/js/bootstrap.min',
        mustache: np + 'mustache/mustache.min',
    },
});

requirejs(['jquery', 'underscore', 'backbone', 'backboneTouch', 'localstorage', 'mustache',
    'bootstrap', 'utilities/mainView',  'utilities/data', 
    'collection.item-list', 'model.item', 'view.item-list', 'view.item'],
function($, _, backbone, backboneTouch, localstorage, mustache,
    bootstrap, View, data,
    itemList, item, itemListView, itemView) {
        var appView = new View();
});