'use strict';
define(['jquery',
    'main/config',
    'main/loader'
],
    function ($, cf, loader) {
        var initCallback;
        var utility;
        var settings;
        var config = cf.init();

        function loadScript(basePath) {
            var normalizedCulture = config.culture.split("-")[0];
            var language = getBundleLanguage(normalizedCulture);
            var url = basePath + "/bundle-" + language + ".js";
            $.ajax({
                dataType: "script",
                cache: true,
                url: url
            });
        }

        function getBundleLanguage(culture) {
            var fallbackLanguage = "en";
            var availableLanguages = ["en"];
            return availableLanguages.indexOf(culture) > 0 ? culture : fallbackLanguage;
        }


        return {
            init: function (wrapper, util, params, callback) {
                initCallback = callback;
                utility = util;
                settings = params.settings;

                if (!settings) {
                    throw new Error("Azure AD settings are not defined in persona bar customSettings");
                }

                var publicPath = settings.uiUrl + "/scripts/bundles/";
                window.dnn.initAzureAD = function initializeAzureAD() {
                    return {
                        publicPath: publicPath,
                        apiServiceUrl: settings.apiUrl,
                        libraryVersion: settings.libraryVersion,
                        loader: loader,
                        utility: util,
                        moduleName: 'AzureAD',
                        notifier: {
                            confirm: util.confirm,
                            notify: util.notify,
                            notifyError: util.notifyError
                        }
                    };
                };
                loadScript(publicPath);

                if (typeof callback === "function") {
                    callback();
                }
            },

            load: function (params, callback) {
                var azureAD = window.dnn.azureAD;
                if (azureAD && azureAD.load) {
                    azureAD.load();
                }

                if (typeof callback === "function") {
                    callback();
                }
            }
        };
    });
