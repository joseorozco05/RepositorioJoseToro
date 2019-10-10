import { Injectable } from '@angular/core';
import {Avion} from '../models/avion';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AvionDataService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private avionUrl = 'api/aviones';

  constructor(private http: HttpClient) { }

  add (avion:Avion): Observable<Avion> {
    return this.http.post<Avion>(this.avionUrl, avion,  this.httpOptions).pipe(
      tap((newAvion: Avion) => this.log(`Se registro Cliente=${newAvion.id}`)),
      catchError(this.handleError<Avion>('addPasajero'))
      );
}
searchAvion(id: number): Observable<Avion> {
  if (!id) {
    return of();
  }
  return this.http.get<Avion>(`${this.avionUrl}/${id}`).pipe(
    tap(_ => this.log(`Se encontro  ${id}`)),
    catchError(this.handleError<Avion>(`searchPasajero id=${id}`))
  );
}


getAvion(): Observable<Avion[]> {
  return this.http.get<Avion[]>(this.avionUrl).pipe(
    tap(aviones => {
      return this.log('Consulta de Avion');
    }),
    catchError(this.handleError<Avion[]>('getAvion', [])));
}

deleteAvion(avion: Avion | number): Observable<Avion> {
  const id = typeof avion === 'number' ? avion : avion.id;
  const url = `${this.avionUrl}/${id}`;

  return this.http.delete<Avion>(url, this.httpOptions).pipe(
    tap(_ => this.log(`Se eliminó =${id}`)),
    catchError(this.handleError<Avion>('deleteAvion'))
  );
}
updateAvion(avion: Avion): Observable<any> {
  return this.http.put(this.avionUrl, avion, this.httpOptions).pipe(
    tap(_ => this.log(`Se actualizo =${avion.id}`)),
    catchError(this.handleError<any>('updateAvion'))
  );
}

private log(message: string) {
    
  alert(`avionService: ${message}`);
 }
 
 
 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error); 
    this.log(`${operation} Fallo: ${error.message}`);
    return of(result as T);
  };
}

}
