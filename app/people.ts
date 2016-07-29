export const people = (state=[], action) => {
	switch(action.type) {

		case 'ADD_PERSON':
			return [
				...state,
				action.payload
			];

		case 'REMOVE_PERSON':
			return state.filter(person => person.id !== action.payload.id);
		case 'TOGGLE_ATTENDING': 
			return state.map(person => {
					if(person.id == action.payload.id) {
						return Object.assign({}, person, {
							attending: !person.attending
						})
					}
					return person;
			})
		case 'GUEST_ADDED': 
			return state.map(person => {
				if(person.id == action.payload.id) {
					return Object.assign({}, person, {
						guests: person.guests+1
					});
				}
				return person;
			});

		case 'GUEST_REMOVED':
			return state.map(person => {
				if(person.id == action.payload.id) {
					return Object.assign({}, person, {
						guests: person.guests-1
					});
				}
				return person;
			});

		default:
            return state;

	}
}