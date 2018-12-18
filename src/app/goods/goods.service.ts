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
     console.log(observable);
     return observable;
  }

  createGood(nom:string, prixNeuf:number) {
    var json = {"nom":nom,"prixNeuf":prixNeuf};
    console.log(json);
  	return this.http.post("http://localhost:8888/biens", json);
  }

  deleteGood(id:string) {
    console.log("on passe dans le service");
    console.log("http://localhost:8888/biens/delete");
    var json = {"idBien":id}
    console.log(id);
    return this.http.post("http://localhost:8888/biens/delete", json);
  }
}
