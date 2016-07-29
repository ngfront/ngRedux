import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'person-list',
	template: `
		<ul>
			<li  *ngFor="let person of peopleWrap" [class.attending]="person.attending">
				{{person.name}}
				<input type="checkbox" id="attending" [checked]="person.attending" (change)="toggleAttending.emit(person)" /> <label for="attending">Attending</label>
				No. of Guests<button (click)="addGuest.emit(person.id)">+</button>{{person.guests}}<button (click)="removeGuest.emit(person.id)">-</button>
				<span class="remove"><button (click)="removePerson.emit(person.id)">Remove</button></span>
			</li>

		</ul>
	`
})
export class PersonList {

	@Input() peopleWrap: Array<any>;
	@Output() removePerson: EventEmitter<any> = new EventEmitter();
	@Output() addGuest: EventEmitter<any> = new EventEmitter();
	@Output() removeGuest: EventEmitter<any> = new EventEmitter();
	@Output() toggleAttending = new EventEmitter();

	constructor() {
		
	}

	toggleAttend(personId) {
		console.log(personId);
		this.toggleAttending.emit(personId); 
	}
}