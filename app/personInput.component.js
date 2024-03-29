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
var PersonInput = (function () {
    function PersonInput() {
        this.addPerson = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PersonInput.prototype, "addPerson", void 0);
    PersonInput = __decorate([
        core_1.Component({
            selector: 'person-input',
            template: "\n\t\t<input #newPerson type=\"text\" placeholder=\"Type Person Name and Hit Enter\" (keyup.enter)=\"addPerson.emit(newPerson.value); newPerson.value=''; \" />\n\t\t<button type=\"submit\">Add Person</button>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], PersonInput);
    return PersonInput;
}());
exports.PersonInput = PersonInput;
//# sourceMappingURL=personInput.component.js.map