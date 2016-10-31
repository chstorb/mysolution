define([
    'productModel'
], function (productModel) {
    var productDatasource = new kendo.data.DataSource({
        schema: {
            model: productModel
        },
        batch: true,
        transport: {
            read: {
                url: "//demos.telerik.com/kendo-ui/service/products",
                dataType: "jsonp"
            },
            update: {
                url: "//demos.telerik.com/kendo-ui/service/products/update",
                dataType: "jsonp"
            },
            destroy: {
                url: "//demos.telerik.com/kendo-ui/service/products/create",
                dataType: "jsonp"
            },
            parameterMap: function (options, operation) {
                if (operation !== "read" && options.models) {
                    return { models: kendo.stringify(options.models) };
                }
            }
        }
    });
    return productDatasource;
});
