"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
var AppController = (function () {
    function AppController() {
        this.sampleText = 'Hello World!';
    }
    return AppController;
}());
exports.AppController = AppController;
exports.AppComponent = {
    controller: AppController,
    template: require('./app.component.html')
};
//# sourceMappingURL=app.component.js.map