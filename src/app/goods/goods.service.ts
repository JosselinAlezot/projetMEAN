import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private http: HttpClient) { }

  getGoods(): Observable<any> {
     let observable: Observable<any>;
     observable =  this.http.get("http://localhost:8888/biens/prix/1");
     return observable;
  }

  createGood(nom:string, prixNeuf:number) {
    var json = {"nom":nom,"prixNeuf":prixNeuf};
  	return this.http.post("http://localhost:8888/biens", json);
  }

  deleteGood(id:string) {
    var json = {"idBien":id}
    return this.http.post("http://localhost:8888/biens/delete", json);
  }
}
