import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiHealthCheckService {

  constructor(private http: HttpClient) { }

  checkApiHealth(){

    return this.http.get("/api/health").pipe(
      catchError(() => of({healthy: false}))
    );
  }
}
