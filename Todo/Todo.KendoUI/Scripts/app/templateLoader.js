﻿define([], function ($) {
    "use strict";
    //Creates a gloabl object called templateLoader with a single method "loadExtTemplate"
    var templateLoader = (function ($, host) {
        //Loads external templates from path and injects in to page DOM
        return {
            //Method: loadExtTemplate
            //Params: (string) path: the relative path to a file that contains template definition(s)
            loadExtTemplate: function (id, path) {
                //Use jQuery Ajax to fetch the template file
                var tmplLoader = $.get(path)
                    .done(function (result) {
                        //On success, Add templates to DOM (assumes file only has template definitions)
                        $("body").append(result);
                    })
                    .fail(function (result) {
                        alert("Error Loading Templates -- TODO: Better Error Handling");
                    });

                tmplLoader.always(function () {
                    //Publish an event that indicates when a template is done loading
                    $(host).trigger("TEMPLATE_LOADED", [id]);
                });
            }
        };
    })(jQuery, document);

    return templateLoader;
});