import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
  	let url: string = "http://localhost:8888/Users";
  	let observable: Observable<any> = this.http.get(url).pipe(map((res:Response) => res.json()));
  	return observable;
  }
}
