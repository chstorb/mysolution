define([
    'productDatasource'
], function (productDatasource) {

    var viewModel = kendo.observable({
        title: "Products",
        router: null,
        isVisible: true,
        products: productDatasource,
        onDataBound: function (arg) {
            console.log("view onDataBound", this.title);
        },
        onSave: function (e) {
            console.log("event :: save(" + kendo.stringify(e.model, null, 4) + ")");
        },
        init: function () {
            console.log("view init", this.title);
        },

        show: function () {
            console.log("view show", this.title);
        }
    });
    return viewModel;
});
