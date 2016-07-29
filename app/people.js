"use strict";
exports.people = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'ADD_PERSON':
            return state.concat([
                action.payload
            ]);
        case 'REMOVE_PERSON':
            return state.filter(function (person) { return person.id !== action.payload.id; });
        case 'TOGGLE_ATTENDING':
            return state.map(function (person) {
                if (person.id == action.payload.id) {
                    return Object.assign({}, person, {
                        attending: !person.attending
                    });
                }
                return person;
            });
        case 'GUEST_ADDED':
            return state.map(function (person) {
                if (person.id == action.payload.id) {
                    return Object.assign({}, person, {
                        guests: person.guests + 1
                    });
                }
                return person;
            });
        case 'GUEST_REMOVED':
            return state.map(function (person) {
                if (person.id == action.payload.id) {
                    return Object.assign({}, person, {
                        guests: person.guests - 1
                    });
                }
                return person;
            });
        default:
            return state;
    }
};
//# sourceMappingURL=people.js.map