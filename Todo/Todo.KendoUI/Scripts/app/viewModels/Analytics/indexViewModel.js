define([
    /*"kendo"*/
], function (/*kendo*/) {

    "use strict";

    var viewModel = kendo.observable({
        title: "Analytics",
        router: null,

        init: function () {
            console.log("view init", this.title);
        },

        show: function () {
            console.log("view show", this.title);
            $(".page-header").css("color", "darkblue");
        }
    });
    return viewModel;
});
