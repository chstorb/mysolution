define([
    /*"kendo"*/
], function (/*kendo*/) {

    "use strict";

    var viewModel = kendo.observable({
        title: "Reports",
        router: null,

        init: function () {
            console.log("view init", this.title);
        },

        show: function () {
            console.log("view show", this.title);
        }
    });
    return viewModel;
});
