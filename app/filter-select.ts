import {Component, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'filter-select',
	template: `
		<select #selectList (change)="updateFilter.emit(selectList.value)">
			<option *ngFor="let filter of filters" value="{{filter.action}}">
				{{filter.key}}
			</option>
		</select>
	`
})
export class FilterSelect {

	@Output() updateFilter: EventEmitter<any> = new EventEmitter();

	public filters = [
		{	key: "All", action: "SHOW_ALL"},
		{   key: "Attending", action: "SHOW_ATTENDING" },
		{   key: "Guests", action: 'SHOW_WITH_GUESTS' }
	]
	constructor() {
		
	}
}