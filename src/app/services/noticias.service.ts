import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';
import {throwError} from 'rxjs/index';

@Injectable({
    providedIn: 'root'
})
export class NoticiasService {

    constructor(private http: HttpClient) {
    }


    methodGet() {

        const url = 'https://api-rest-jean.herokuapp.com/noticias';

        return this.http.get(url).pipe(
            catchError(this.handleError)
        );
    }

    methodPost(params: any) {

        const url = 'https://api-rest-jean.herokuapp.com/noticias';

        const body = new HttpParams()
            .set('buscar', params.buscar);

        return this.http.post(url, body).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    }
}
