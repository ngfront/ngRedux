"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var store_1 = require('@ngrx/store');
var people_1 = require('./people');
var filter_1 = require('./filter');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    store_1.provideStore({ people: people_1.people, filter: filter_1.filter })
]);
//# sourceMappingURL=main.js.map