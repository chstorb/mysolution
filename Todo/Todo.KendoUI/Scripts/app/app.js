// models
var viewModel = kendo.observable({
    foo: "World!",

    init: function() {
        console.log("view init", this.foo);
    },

    show: function() {
        console.log("view show", this.foo);
    },

    buttonClick: function() {
        alert("button clicked");
    },

    goToView2: function(e) {
        router.navigate("/detail");
        e.preventDefault();
    }
});

// views, layouts
var layout = new kendo.Layout("<header>Header</header><section id='content'></section><footer>Footer</footer>");

var indexView = new kendo.View("index", { model: viewModel, init: viewModel.init.bind(viewModel), show: viewModel.show.bind(viewModel) });

var detailView = new kendo.View("<span>Detail - press your browser back button to navigate back.</span>");

var reportsView = new kendo.View("<span>Reports</span>");

var analyticsView = new kendo.View("<span>Analytics</span>");

var exportView = new kendo.View("<span>Export</span>");

// routing
var router = new kendo.Router();

router.bind("init", function() {
    layout.render($("#app"));
});

router.route("/", function() {
    layout.showIn("#content", indexView);
});

router.route("/detail", function() {
    layout.showIn("#content", detailView);
});

router.route("/reports", function () {
    layout.showIn("#content", reportsView);
});

router.route("/analytics", function () {
    layout.showIn("#content", analyticsView);
});

router.route("/export", function () {
    layout.showIn("#content", exportView);
});

$(function() {
    router.start();
});

