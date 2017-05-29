System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var LocalStorage, LOCAL_STORAGE_PROVIDERS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LocalStorage = (function () {
                function LocalStorage() {
                    if (!localStorage) {
                        throw new Error('Current browser does not support Local Storage');
                    }
                    this._localStorage = localStorage;
                }
                LocalStorage.prototype.set = function (key, value) {
                    this._localStorage[key] = value;
                };
                LocalStorage.prototype.get = function (key) {
                    return this._localStorage[key] || false;
                };
                LocalStorage.prototype.setObject = function (key, value) {
                    this._localStorage[key] = JSON.stringify(value);
                };
                LocalStorage.prototype.getObject = function (key) {
                    return JSON.parse(this._localStorage[key] || '{}');
                };
                LocalStorage.prototype.remove = function (key) {
                    this._localStorage.removeItem(key);
                };
                return LocalStorage;
            }());
            exports_1("LocalStorage", LocalStorage);
            exports_1("LOCAL_STORAGE_PROVIDERS", LOCAL_STORAGE_PROVIDERS = [
                core_1.provide(LocalStorage, { useClass: LocalStorage })
            ]);
        }
    }
});
//# sourceMappingURL=local_storage.js.map