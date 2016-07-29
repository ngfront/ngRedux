"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var FilterSelect = (function () {
    function FilterSelect() {
        this.updateFilter = new core_1.EventEmitter();
        this.filters = [
            { key: "All", action: "SHOW_ALL" },
            { key: "Attending", action: "SHOW_ATTENDING" },
            { key: "Guests", action: 'SHOW_WITH_GUESTS' }
        ];
    }
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FilterSelect.prototype, "updateFilter", void 0);
    FilterSelect = __decorate([
        core_1.Component({
            selector: 'filter-select',
            template: "\n\t\t<select #selectList (change)=\"updateFilter.emit(selectList.value)\">\n\t\t\t<option *ngFor=\"let filter of filters\" value=\"{{filter.action}}\">\n\t\t\t\t{{filter.key}}\n\t\t\t</option>\n\t\t</select>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], FilterSelect);
    return FilterSelect;
}());
exports.FilterSelect = FilterSelect;
//# sourceMappingURL=filter-select.js.map