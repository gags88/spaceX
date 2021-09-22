import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Launch } from '../shared/model/launch';
import { LaunchDetail } from '../shared/model/launch-detail';

@Injectable({
  providedIn: 'root',
})
export class SpaceXService {
  API_URL = 'https://api.spacexdata.com/v4/launches';

  constructor(private readonly httpClient: HttpClient) {}

  getLaunchesList(): Observable<Launch[]> {
    return this.httpClient
      .get<Launch[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  getLaunchDetail(launchNumber: number): Observable<Launch> {
    return this.httpClient
      .post<LaunchDetail>(`${this.apiUrl}/query`, {
        query: {
          flight_number: launchNumber,
        },
      })
      .pipe(
        map(({ docs }) => docs[0]),
        catchError(this.handleError)
      );
  }

  get apiUrl(): string {
    return this.API_URL;
  }

  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
