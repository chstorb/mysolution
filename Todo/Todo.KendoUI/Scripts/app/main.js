requirejs.config({
    baseUrl: 'Scripts',
    paths: {
        'app': 'app/app',
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min',
        'bootstrap': '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min',
        'kendo': '//kendo.cdn.telerik.com/2016.3.914/js/kendo.ui.core.min',
        'text': 'text',
        'utils': 'app/utils',
        'router': 'app/router',
        // datasources
        'productDatasource': 'app/datasources/productDatasource',
        // models
        'productModel': 'app/models/productModel',
        // view models
        'analytics-indexViewModel': 'app/viewModels/Analytics/indexViewModel',
        'dashboard-indexViewModel': 'app/viewModels/Dashboard/indexViewModel',
        'export-indexViewModel': 'app/viewModels/Export/indexViewModel',
        'products-indexViewModel': 'app/viewModels/Products/indexViewModel',
        'reports-indexViewModel': 'app/viewModels/Reports/indexViewModel'
    }
    , shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'kendo': {
            deps: ['jquery']
        }
    }
});

requirejs([
    'app'
], function (app) {
    console.log('app loaded');
});