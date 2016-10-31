define(
    "router",
    [/*"kendo"'*/],
    function (/*kendo*/) {

        "use strict";

        var layout = new kendo.Layout("<section id='content'></section>");

        var router = new kendo.Router();

        router.bind("init", function () {
            layout.render($("#app"));
        });

        router.bind("change", function (e) {
            console.log("change event", e);

            var id = "dashboard";
            if (e.url && e.url.length > 1) {
                id = e.url.substr(1);
            }

            var listItems = $("ul.nav.nav-sidebar");
            listItems.find("li").each(function (index, element) {
                if (element.id && element.id.length > 0) {
                    if (element.id === id) {
                        listItems.find("li#" + element.id).addClass("active");
                    }
                    else {
                        listItems.find("li#" + element.id).removeClass("active");
                    }
                }
            });
        });

        router.route("/", function () {
            require(["dashboard-indexViewModel", "text!/Views/Dashboard/Dashboard.html"], function (viewModel, view) {
                loadView(viewModel, view);
            });
        });

        router.route("/detail", function () {
            var detailView = new kendo.View("<span>Detail - press your browser back button to navigate back.</span>");
            layout.showIn("#content", detailView);
        });

        router.route("/reports", function () {
            require(["reports-indexViewModel", "text!/Views/Reports/Reports.html"], function (viewModel, view) {
                loadView(viewModel, view, function () { });
            });
        });

        router.route("/export", function () {
            require(["export-indexViewModel", "text!/Views/Export/Export.html"], function (viewModel, view) {
                loadView(viewModel, view, function () { });
            });
        });

        router.route("/dashboard", function () {
            require(["dashboard-indexViewModel", "text!/Views/Dashboard/Dashboard.html"], function (viewModel, view) {
                loadView(viewModel, view, function () { });
            });
        });

        router.route("/products", function () {
            require(['products-indexViewModel', 'text!/Views/Products/Products.html'], function (viewModel, view) {
                loadView(viewModel, view, function () {
                    kendo.bind($("#example"), viewModel);
                });
            });
        });

        router.route("/analytics", function () {
            require(["analytics-indexViewModel", "text!/Views/Analytics/Analytics.html"], function (viewModel, view) {
                loadView(viewModel, view, function () { });
            });
        });

        var loadView = function (viewModel, view, delegate) {
            try {
                var kendoView = null;
                if (viewModel) {
                    viewModel.router = router;
                    kendoView = new kendo.View(view, { model: viewModel, init: viewModel.init.bind(viewModel), show: viewModel.show.bind(viewModel) });
                }
                else {
                    kendoView = new kendo.View(view);
                }
                kendo.fx($("#content")).fadeOut().duration(300).play().then(function () {
                    layout.showIn("#content", kendoView);

                    if (delegate != undefined)
                        delegate();

                    kendo.fx($("#content")).fadeIn().play();
                });

                //kendo.fx($("#content")).slideIn("down").reverse().then(function () {            
                //    layout.showIn("#content", kendoView);
                //
                //    if (delegate != undefined)
                //        delegate();
                //
                //    kendo.fx($("#content")).slideIn("down").play();
                //});
            }
            catch (ex) {
                alert("error: " + ex.message);
            }
        };

        return router;
    });