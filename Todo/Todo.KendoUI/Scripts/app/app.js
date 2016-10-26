// view models

var analyticsViewModel = kendo.observable({
    title: "Analytics",

    init: function () {
        console.log("view init", this.title);
    },

    show: function () {
        console.log("view show", this.title);
    }
});

var dashboardViewModel = kendo.observable({
    title: "Dashboard",

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
        router.navigate("/detail");
        e.preventDefault();
    }
});

var exportViewModel = kendo.observable({
    title: "Export",

    init: function () {
        console.log("view init", this.title);
    },

    show: function () {
        console.log("view show", this.title);
    }
});

var reportsViewModel = kendo.observable({
    title: "Reports",

    init: function () {
        console.log("view init", this.title);
    },

    show: function () {
        console.log("view show", this.title);
    }
});

function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}

function getViewTemplate(id) {
    var templates = getObjects(viewTemplates, "id", id);
    var l = templates.length;
    if (l === 0) return null;
    for (var i = 0; i < l; i++) {
        template = templates[i];
        if (template && typeof template !== "undefined") return template;
    }
    return null;
}

// layout
var layout = new kendo.Layout("<section id='content'></section>");

// views

var viewTemplates = [
    { id: "analyticsViewTemplate", path: "Views/Analytics/_Analytics.html", model: analyticsViewModel },
    { id: "dashboardViewTemplate", path: "Views/Dashboard/_Dashboard.html", model: dashboardViewModel },
    { id: "exportViewTemplate", path: "Views/Export/_Export.html", model: exportViewModel },
    { id: "reportsViewTemplate", path: "Views/Reports/_Reports.html", model: reportsViewModel }
];

var detailView = new kendo.View("<span>Detail - press your browser back button to navigate back.</span>");

// routing
var router = new kendo.Router();

router.bind("init", function() {
    layout.render($("#app"));
});

router.bind("change", function(e) {
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
    var viewTemplate = getViewTemplate("dashboardViewTemplate");
    templateLoader.loadExtTemplate(viewTemplate.id, viewTemplate.path);
});

router.route("/detail", function() {
    layout.showIn("#content", detailView);
});

router.route("/reports", function () {
    var viewTemplate = getViewTemplate("reportsViewTemplate");
    templateLoader.loadExtTemplate(viewTemplate.id, viewTemplate.path);
});

router.route("/analytics", function () {
    var viewTemplate = getViewTemplate("analyticsViewTemplate");
    templateLoader.loadExtTemplate(viewTemplate.id, viewTemplate.path);
});

router.route("/dashboard", function () {
    var viewTemplate = getViewTemplate("dashboardViewTemplate");
    templateLoader.loadExtTemplate(viewTemplate.id, viewTemplate.path);
});

router.route("/export", function () {
    var viewTemplate = getViewTemplate("exportViewTemplate");
    templateLoader.loadExtTemplate(viewTemplate.id, viewTemplate.path);
});

//Subscribe to the event triggered when the templates are loaded
//Do not load use templates before they are available
$(document).bind("TEMPLATE_LOADED", function (e, id, path) {
    var templateContent = $("#" + id).html()

    //Compile and cache templates
    _itemTemplate = kendo.template(templateContent, { useWithBlock: false });

    //Use the template (assuming "data" is collection loaded elsewhere)
    var data = { dummy: "" };
    var result = _itemTemplate(data);

    var currentView = null;

    var viewTemplate = getViewTemplate(id);
    if (viewTemplate.model !== null) {
        currentView = new kendo.View(result, { model: viewTemplate.model, init: viewTemplate.model.init.bind(viewTemplate.model), show: viewTemplate.model.show.bind(viewTemplate.model) });
    }
    else {
        currentView = new kendo.View(result);
    }
    layout.showIn("#content", currentView);
});

$(function () {    
    router.start();
    //router.navigate("/");
});

