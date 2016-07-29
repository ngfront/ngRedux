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
var Rx_1 = require('rxjs/Rx');
var store_1 = require('@ngrx/store');
var personInput_component_1 = require('./personInput.component');
var personList_component_1 = require('./personList.component');
var filter_select_1 = require('./filter-select');
var AppComponent = (function () {
    function AppComponent(_store) {
        this._store = _store;
        this.id = 0;
        this.people = Rx_1.Observable.combineLatest(_store.select('people'), _store.select('filter'), function (people, filter) {
            console.log(people);
            console.log(filter);
            return people.filter(filter);
        });
        // _store.select('people')
        // 	.subscribe(people => {
        // 		this.people = people;
        // 	});
    }
    AppComponent.prototype.personAdded = function (person) {
        this._store.dispatch({
            type: 'ADD_PERSON',
            payload: {
                id: ++this.id,
                name: person,
                guests: 0,
                attending: false
            }
        });
    };
    AppComponent.prototype.onPersonRemove = function (personId) {
        this._store.dispatch({
            type: 'REMOVE_PERSON',
            payload: {
                id: personId
            }
        });
    };
    AppComponent.prototype.guestAdded = function (personId) {
        this._store.dispatch({
            type: 'GUEST_ADDED',
            payload: {
                id: personId
            }
        });
    };
    AppComponent.prototype.guestRemoved = function (personId) {
        this._store.dispatch({
            type: 'GUEST_REMOVED',
            payload: {
                id: personId
            }
        });
    };
    AppComponent.prototype.toggleAttend = function ($event) {
        console.log($event);
        this._store.dispatch({
            type: 'TOGGLE_ATTENDING',
            payload: {
                id: $event.id
            }
        });
    };
    AppComponent.prototype.updateFilter = function (filter) {
        this._store.dispatch({ type: filter });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            directives: [personInput_component_1.PersonInput, personList_component_1.PersonList, filter_select_1.FilterSelect],
            template: "\n\t\t<filter-select (updateFilter)=\"updateFilter($event)\"></filter-select>\n\t\t<person-input (addPerson)=\"personAdded($event)\"></person-input>\n\t\t<person-list \n\t\t\t[peopleWrap]=\"people | async\"\n\t\t\t(removePerson)=\"onPersonRemove($event)\"\n\t\t\t(addGuest)=\"guestAdded($event)\"\n\t\t\t(removeGuest)=\"guestRemoved($event)\"\n\t\t\t(toggleAttending)=\"toggleAttend($event)\">\n\t\t</person-list>\n\t"
        }), 
        __metadata('design:paramtypes', [store_1.Store])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map