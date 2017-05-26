"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var app_module_1 = require("./components/app.module");
angular.module('main', [app_module_1.AppModule.name]);
angular.element(function () {
    angular.bootstrap(document, ['main']);
});
//# sourceMappingURL=main.js.map