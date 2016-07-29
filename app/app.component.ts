import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Store} from '@ngrx/store';

import {PersonInput} from './personInput.component';
import {PersonList} from './personList.component';
import {FilterSelect} from './filter-select';

import {people} from './people';
import {filter} from './filter';

@Component({
	selector:'app',
	directives:[PersonInput, PersonList, FilterSelect],
	template: `
		<filter-select (updateFilter)="updateFilter($event)"></filter-select>
		<person-input (addPerson)="personAdded($event)"></person-input>
		<person-list 
			[peopleWrap]="people | async"
			(removePerson)="onPersonRemove($event)"
			(addGuest)="guestAdded($event)"
			(removeGuest)="guestRemoved($event)"
			(toggleAttending)="toggleAttend($event)">
		</person-list>
	`
})
export class AppComponent{

	public people;
	private id = 0;

	constructor(private _store: Store<any>) {
		this.people = Observable.combineLatest(
						_store.select('people'),
						_store.select('filter'),
						(people:any[], filter) => {
							console.log(people);
							console.log(filter);

							return people.filter(filter);
						}
		)
		// _store.select('people')
		// 	.subscribe(people => {
		// 		this.people = people;
		// 	});
	}

	personAdded(person) {
		this._store.dispatch({
			type: 'ADD_PERSON',
			payload: {
				id: ++this.id,
				name:person,
				guests: 0,
				attending: false
			}
		})
	}
	onPersonRemove(personId) {
		this._store.dispatch({
			type:'REMOVE_PERSON',
			payload: {
				id: personId
			}
		})
	}

	guestAdded(personId){
		this._store.dispatch({
			type:'GUEST_ADDED',
			payload: {
				id: personId
			}
		})
	}

	guestRemoved(personId) {
		this._store.dispatch({
			type: 'GUEST_REMOVED',
			payload : {
				id: personId
			}
		})
	}

	toggleAttend($event) {
		console.log($event);
		this._store.dispatch({
			type: 'TOGGLE_ATTENDING',
			payload: {
				id: $event.id
			}
		})
	}

	updateFilter(filter) {
		this._store.dispatch({type: filter});
	}
}