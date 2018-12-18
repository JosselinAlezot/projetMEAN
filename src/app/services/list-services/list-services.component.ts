import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
	selector: 'app-list-services',
	templateUrl: './list-services.component.html',
	styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {

	private services:any;

	constructor(private serviceService: ServicesService) { }

	ngOnInit() {
		this.serviceService.getServices().subscribe(res => this.services = res);
	}

}
