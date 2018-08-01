import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  API = environment.api;

  constructor(
    private http: HttpClient,
    private messageSvc: MessageService,
  ) {}

  getBlogs(): Observable<any> {
    return this.http.get(this.API + '/blog')
    .pipe(
      // tap(blogs => console.log('Fetched Blog Data')),
      catchError(this.handleError('getBlogs', []))
    );
  }

  getBlogArchives(): Observable<any> {
    return this.http.get(this.API + '/archives')
      .pipe(
        // tap(archives => console.log('Fetched Archives Data')),
        catchError(this.handleError('getBlogArchives', []))
      );
  }

  getBlog(id: string): Observable<any> {
    return this.http.get(this.API + '/blog/' + id)
      .pipe(
        // tap(blog => console.log('fetched: ', blog)),
        catchError(this.handleError('getBlog', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.messageSvc.addMessage(error);
      return of (result as T);
    };
  }
}
