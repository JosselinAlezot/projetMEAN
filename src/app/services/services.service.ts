import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ServicesService {

	constructor(private http: HttpClient) { }

	createService(nom:string, descriptif:string, prix:string, type:string) {
		var json = {"nom":nom,"descriptif": descriptif,"prix":prix,"type":type};
		console.log(json);
		return this.http.post("http://localhost:8888/services", json);
	}

}
