import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  reddit: any;

  constructor(
    private http: HttpClient
    ) { }

    // calls reddit api
    fetchAwwSubreddit() {
      return this.http.get('https://www.reddit.com/r/aww/.json');
    }
}
