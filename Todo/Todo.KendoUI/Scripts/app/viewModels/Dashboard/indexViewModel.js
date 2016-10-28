define([
    /*"kendo"*/
], function (/*kendo*/) {

    "use strict";

    var viewModel = kendo.observable({
        title: "Dashboard",
        router: null,

        init: function () {
            console.log("view init", this.title);
        },

        show: function () {
            console.log("view show", this.title);
        },

        buttonClick: function () {
            alert("button clicked");
        },

        goToView2: function (e) {
            //router.navigate("/detail");
            this.router.navigate("/detail");
            e.preventDefault();
        }
    });

    return viewModel;
});
