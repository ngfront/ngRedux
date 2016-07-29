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
var PersonList = (function () {
    function PersonList() {
        this.removePerson = new core_1.EventEmitter();
        this.addGuest = new core_1.EventEmitter();
        this.removeGuest = new core_1.EventEmitter();
        this.toggleAttending = new core_1.EventEmitter();
    }
    PersonList.prototype.toggleAttend = function (personId) {
        console.log(personId);
        this.toggleAttending.emit(personId);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PersonList.prototype, "peopleWrap", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PersonList.prototype, "removePerson", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PersonList.prototype, "addGuest", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PersonList.prototype, "removeGuest", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PersonList.prototype, "toggleAttending", void 0);
    PersonList = __decorate([
        core_1.Component({
            selector: 'person-list',
            template: "\n\t\t<ul>\n\t\t\t<li  *ngFor=\"let person of peopleWrap\" [class.attending]=\"person.attending\">\n\t\t\t\t{{person.name}}\n\t\t\t\t<input type=\"checkbox\" id=\"attending\" [checked]=\"person.attending\" (change)=\"toggleAttending.emit(person)\" /> <label for=\"attending\">Attending</label>\n\t\t\t\tNo. of Guests<button (click)=\"addGuest.emit(person.id)\">+</button>{{person.guests}}<button (click)=\"removeGuest.emit(person.id)\">-</button>\n\t\t\t\t<span class=\"remove\"><button (click)=\"removePerson.emit(person.id)\">Remove</button></span>\n\t\t\t</li>\n\n\t\t</ul>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], PersonList);
    return PersonList;
}());
exports.PersonList = PersonList;
//# sourceMappingURL=personList.component.js.map