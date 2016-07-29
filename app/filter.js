"use strict";
exports.filter = function (state, action) {
    if (state === void 0) { state = function (person) { return person; }; }
    switch (action.type) {
        case "SHOW_ATTENDING":
            return function (person) { return person.attending; };
        case "SHOW_ALL":
            return function (person) { return person; };
        case "SHOW_WITH_GUESTS":
            return function (person) { return person.guests; };
        default:
            return state;
    }
};
//# sourceMappingURL=filter.js.map