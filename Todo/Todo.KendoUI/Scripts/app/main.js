require.config({
    paths: {
        //jquery: "//ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min",
        //bootstrap: "//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min",
        //kendo: "//kendo.cdn.telerik.com/2016.3.914/js/kendo.ui.core.min",
        "text": "/Scripts/text",
        "utils": "/Scripts/app/utils",
        "router": "/Scripts/app/router",        
        // view models
        "analytics-indexViewModel": "/Scripts/app/viewModels/Analytics/indexViewModel",
        "dashboard-indexViewModel": "/Scripts/app/viewModels/Dashboard/indexViewModel",
        "export-indexViewModel": "/Scripts/app/viewModels/Export/indexViewModel",
        "reports-indexViewModel": "/Scripts/app/viewModels/Reports/indexViewModel"
    },
    shim: {
        //"bootstrap": {
        //    deps: ["jquery"]
        //},
        //"kendo": {
        //    deps: ['jquery']
        //}
    },
    priority: ['text', 'router', 'app']
});

require([
    "app"
], function (app) {
    console.log("app loaded");
});