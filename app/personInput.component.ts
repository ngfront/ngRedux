import {Component, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'person-input',
	template: `
		<input #newPerson type="text" placeholder="Type Person Name and Hit Enter" (keyup.enter)="addPerson.emit(newPerson.value); newPerson.value=''; " />
		<button type="submit">Add Person</button>
	`
})
export class PersonInput {
	@Output() addPerson: EventEmitter<any>;

	constructor() {
		this.addPerson = new EventEmitter();
	}
}